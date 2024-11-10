import { useState, useEffect, useRef } from 'react';
import './ChatPage.css';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { sender: 'A', text: 'Hey, how are you?', time: '10:00 AM', isInappropriate: false },
        { sender: 'B', text: 'I am good, thanks! How about you?', time: '10:01 AM', isInappropriate: false },
        { sender: 'A', text: 'I am great, just chilling.', time: '10:02 AM', isInappropriate: false },
    ]);
    const [newMessageA, setNewMessageA] = useState('');
    const [newMessageB, setNewMessageB] = useState('');
    const [blockB, setBlockB] = useState(false);
    const [reported, setReported] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Create refs for both chat boxes and file inputs
    const chatBoxARef = useRef(null);
    const chatBoxBRef = useRef(null);
    const fileInputARef = useRef(null);
    const fileInputBRef = useRef(null);

    const inappropriateWords = ['badword', 'adult', 'sex', 'pp', 'dick', 'vag'];

    // Auto-scroll effect
    useEffect(() => {
        if (chatBoxARef.current) {
            chatBoxARef.current.scrollTop = chatBoxARef.current.scrollHeight;
        }
        if (chatBoxBRef.current) {
            chatBoxBRef.current.scrollTop = chatBoxBRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = (sender) => {
        let message = sender === 'A' ? newMessageA : newMessageB;

        if (message.trim() === '') return;

        const hasInappropriateWord = inappropriateWords.some(word => 
            message.toLowerCase().includes(word.toLowerCase())
        );

        setMessages([
            ...messages,
            { 
                sender, 
                text: hasInappropriateWord ? '*****' : message, 
                time: new Date().toLocaleTimeString(),
                isInappropriate: hasInappropriateWord,
                type: 'text'
            },
        ]);

        if (sender === 'A') {
            setNewMessageA('');
        } else {
            setNewMessageB('');
        }
    };

    const handleImageSelect = async (sender) => {
        const fileInput = sender === 'A' ? fileInputARef.current : fileInputBRef.current;
        fileInput.click();
    };

    const handleImageUpload = async (e, sender) => {
        const file = e.target.files[0];
        if (!file) return;
    
        setIsLoading(true);
    
        try {
            // Test server connection first
            console.log('Testing server connection...');
            const testResponse = await fetch('http://localhost:5000/test')
                .catch(error => {
                    console.error('Server test failed:', error);
                    throw new Error('Cannot connect to server. Please make sure the backend is running on port 5000.');
                });
    
            if (!testResponse.ok) {
                throw new Error(`Server test failed with status: ${testResponse.status}`);
            }
    
            console.log('Server connection successful, uploading image...');
    
            // Create FormData
            const formData = new FormData();
            formData.append('image', file);
    
            // Upload image
            const response = await fetch('http://localhost:5000/api/check-image', {
                method: 'POST',
                body: formData
            });
    
            if (!response.ok) {
                throw new Error(`Image upload failed with status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Upload response:', data);
    
            // Create temporary URL for the image
            const imageUrl = URL.createObjectURL(file);
    
            // Add message with image
            setMessages(prev => [...prev, {
                sender,
                type: 'image',
                imageUrl: data.isNude ? null : imageUrl,
                text: data.isNude ? '***** Inappropriate image removed *****' : null,
                time: new Date().toLocaleTimeString(),
                isInappropriate: data.isNude
            }]);
    
        } catch (error) {
            console.error('Error:', error);
            alert(error.message);
        } finally {
            setIsLoading(false);
            e.target.value = '';
        }
    };
    ;
    

    const handleReport = () => {
        setReported(true);
        alert('User reported!');
    };

    const handleBlock = () => {
        setBlockB(true);
        alert('User blocked!');
    };

    const handleKeyPress = (e, sender) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(sender);
        }
    };

    const renderMessage = (message) => {
        if (message.type === 'image') {
            return message.isInappropriate ? (
                <div className="inappropriate-image">
                    <p>***** Inappropriate image removed *****</p>
                </div>
            ) : (
                <img 
                    src={message.imageUrl} 
                    alt="Shared" 
                    className="shared-image"
                    onLoad={() => URL.revokeObjectURL(message.imageUrl)}
                />
            );
        }
        return <p>{message.text}</p>;
    };

    return (
        <div className="chat-page">
            <div className="device-container">
                <div className="device">
                    <div className="chat-box" ref={chatBoxARef}>
                        <h2>Chat with Person B</h2>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'A' ? 'sender-a' : 'sender-b'}`}
                            >
                                <div className="message-content">
                                    {renderMessage(message)}
                                    <small>{message.time}</small>
                                </div>
                                {message.isInappropriate && message.sender === 'B' && !blockB && (
                                    <div className="action-buttons">
                                        <button className="action-btn" onClick={handleBlock}>Block</button>
                                        <button className="action-btn" onClick={handleReport}>Report</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {!blockB && (
                        <div className="actions">
                            <textarea
                                value={newMessageA}
                                onChange={(e) => setNewMessageA(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e, 'A')}
                                placeholder="Type your message..."
                                rows="4"
                            />
                            <div className="button-group">
                                <button className="send-btn" onClick={() => handleSendMessage('A')} disabled={isLoading}>
                                    Send
                                </button>
                                <button className="photo-btn" onClick={() => handleImageSelect('A')} disabled={isLoading}>
                                    Send Photo
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputARef}
                                    onChange={(e) => handleImageUpload(e, 'A')}
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="device">
                    <div className="chat-box" ref={chatBoxBRef}>
                        <h2>Chat with Person A</h2>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'B' ? 'sender-b' : 'sender-a'}`}
                            >
                                <div className="message-content">
                                    {renderMessage(message)}
                                    <small>{message.time}</small>
                                </div>
                                {message.isInappropriate && message.sender === 'A' && !blockB && (
                                    <div className="action-buttons">
                                        <button className="action-btn" onClick={handleBlock}>Block</button>
                                        <button className="action-btn" onClick={handleReport}>Report</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {!blockB && (
                        <div className="actions">
                            <textarea
                                value={newMessageB}
                                onChange={(e) => setNewMessageB(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e, 'B')}
                                placeholder="Type your message..."
                                rows="4"
                            />
                            <div className="button-group">
                                <button className="send-btn" onClick={() => handleSendMessage('B')} disabled={isLoading}>
                                    Send
                                </button>
                                <button className="photo-btn" onClick={() => handleImageSelect('B')} disabled={isLoading}>
                                    Send Photo
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputBRef}
                                    onChange={(e) => handleImageUpload(e, 'B')}
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {blockB && (
                <div className="block-message">
                    <h3>You have blocked this user. You will no longer receive messages from them.</h3>
                </div>
            )}
        </div>
    );
};

export default ChatPage;