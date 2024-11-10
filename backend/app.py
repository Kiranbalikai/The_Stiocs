from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
import cv2
import numpy as np
from ifnude import detect
import logging
from flask_cors import CORS
import shutil

app = Flask(__name__)
CORS(app)

# Configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB

# Setup configuration
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_FILE_SIZE

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def ensure_upload_folder():
    if os.path.exists(UPLOAD_FOLDER):
        shutil.rmtree(UPLOAD_FOLDER)
    os.makedirs(UPLOAD_FOLDER)

def process_image(image_path):
    """
    Process image and check for inappropriate content.
    Returns tuple of (is_inappropriate, error_message, detections)
    """
    try:
        # Read image using cv2
        img = cv2.imread(image_path)
        if img is None:
            return True, "Invalid image format", []

        # Convert BGR to RGB
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Get detection results - will return [] if safe, list of detections if inappropriate
        nsfw_results = detect(img_rgb)
        
        # If results is not empty, it means inappropriate content was detected
        is_inappropriate = len(nsfw_results) > 0
        
        # Log the results
        if is_inappropriate:
            logger.warning(f"Inappropriate content detected in {image_path}: {nsfw_results}")
        else:
            logger.info(f"No inappropriate content detected in {image_path}")
        
        return is_inappropriate, None, nsfw_results

    except Exception as e:
        logger.error(f"Error processing image {image_path}: {str(e)}")
        return True, str(e), []

@app.route('/api/check-image', methods=['POST'])
def check_image():
    try:
        ensure_upload_folder()

        if 'image' not in request.files:
            return jsonify({
                'error': 'No image provided',
                'isNude': False,
                'imageUrl': None
            }), 400
        
        file = request.files['image']
        
        if file.filename == '':
            return jsonify({
                'error': 'No selected file',
                'isNude': False,
                'imageUrl': None
            }), 400
            
        if not allowed_file(file.filename):
            return jsonify({
                'error': 'Invalid file type. Allowed: ' + ', '.join(ALLOWED_EXTENSIONS),
                'isNude': False,
                'imageUrl': None
            }), 400

        # Save and process file
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        try:
            # Process image
            is_inappropriate, error_message, detections = process_image(filepath)

            if error_message:
                return jsonify({
                    'error': error_message,
                    'isNude': False,
                    'imageUrl': None
                }), 400

            if is_inappropriate:
                # Delete inappropriate images immediately
                if os.path.exists(filepath):
                    os.remove(filepath)
                
                return jsonify({
                    'isNude': True,
                    'message': 'Inappropriate content detected',
                    'detections': detections,
                    'imageUrl': None
                })

            # If we get here, the image is appropriate
            return jsonify({
                'isNude': False,
                'message': 'Image processed successfully',
                'imageUrl': f'/uploads/{filename}'
            })

        finally:
            # Clean up inappropriate images
            if 'is_inappropriate' in locals() and is_inappropriate and os.path.exists(filepath):
                os.remove(filepath)

    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return jsonify({
            'error': 'Internal server error',
            'isNude': False,
            'imageUrl': None
        }), 500

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    ensure_upload_folder()
    app.run(host='0.0.0.0', port=5000, debug=False)