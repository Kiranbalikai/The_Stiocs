from flask import Flask, request, jsonify
from flask_cors import CORS
from ifnude import detect
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/check-image', methods=['POST'])
def check_image():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400

        image_file = request.files['image']
        image = Image.open(image_file)
        
        # Convert to bytes for ifnude
        img_byte_arr = io.BytesIO()
        image.save(img_byte_arr, format=image.format)
        img_byte_arr = img_byte_arr.getvalue()
        
        # Detect NSFW content
        results = detect(img_byte_arr)
        
        # If any NSFW content is detected with score > 0.5
        is_nude = any(result['score'] > 0.5 for result in results)
        
        return jsonify({
            'isNude': is_nude,
            'results': results
        })
        
    except Exception as e:
        print(f"Error processing image: {str(e)}")  # For debugging
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)