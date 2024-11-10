import React, { useState } from 'react';
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

    const inappropriateWords = ['badword', 'adult', 'sex', 'pp', 'dick', 'vag'];

    const handleSendMessage = (sender) => {
        let message = sender === 'A' ? newMessageA : newMessageB;

        // Check for inappropriate words
        const hasInappropriateWord = inappropriateWords.some(word => 
            message.toLowerCase().includes(word.toLowerCase())
        );

        setMessages([
            ...messages,
            { 
                sender, 
                text: hasInappropriateWord ? '*****' : message, 
                time: new Date().toLocaleTimeString(),
                isInappropriate: hasInappropriateWord
            },
        ]);

        // Clear the input after sending
        if (sender === 'A') {
            setNewMessageA('');
        } else {
            setNewMessageB('');
        }
    };

    const handleReport = () => {
        setReported(true);
        alert('User reported!');
    };

    const handleBlock = () => {
        setBlockB(true);
        alert('User blocked!');
    };

    return (
        <div className="chat-page">
            <div className="device-container">
                <div className="device">
                    <div className="chat-box">
                        <h2>Chat with Person B</h2>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'A' ? 'sender-a' : 'sender-b'}`}
                            >
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <small>{message.time}</small>
                                </div>
                                {/* Show block/report buttons when Person B sends inappropriate message */}
                                {message.isInappropriate && message.sender === 'B' && !blockB && (
                                    <div className="action-buttons">
                                        <button className="action-btn" onClick={handleBlock}>Block</button>
                                        <button className="action-btn" onClick={handleReport}>Report</button>
                                    </div>
                                )}
                            </div>
                        ))}
                        {!blockB && (
                            <div className="actions">
                                <textarea
                                    value={newMessageA}
                                    onChange={(e) => setNewMessageA(e.target.value)}
                                    placeholder="Type your message..."
                                    rows="4"
                                />
                                <button className="send-btn" onClick={() => handleSendMessage('A')}>Send</button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="device">
                    <div className="chat-box">
                        <h2>Chat with Person A</h2>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'B' ? 'sender-b' : 'sender-a'}`}
                            >
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <small>{message.time}</small>
                                </div>
                                {/* Show block/report buttons when Person A sends inappropriate message */}
                                {message.isInappropriate && message.sender === 'A' && !blockB && (
                                    <div className="action-buttons">
                                        <button className="action-btn" onClick={handleBlock}>Block</button>
                                        <button className="action-btn" onClick={handleReport}>Report</button>
                                    </div>
                                )}
                            </div>
                        ))}
                        {!blockB && (
                            <div className="actions">
                                <textarea
                                    value={newMessageB}
                                    onChange={(e) => setNewMessageB(e.target.value)}
                                    placeholder="Type your message..."
                                    rows="4"
                                />
                                <button className="send-btn" onClick={() => handleSendMessage('B')}>Send</button>
                            </div>
                        )}
                    </div>
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