import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { StoreContext } from '../../context/StoreContext'; // Import StoreContext to check token
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
    const [setReported] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Create refs for both chat boxes and file inputs
    const chatBoxARef = useRef(null);
    const chatBoxBRef = useRef(null);
    const fileInputARef = useRef(null);
    const fileInputBRef = useRef(null);

    const inappropriateWords = [
        "2g1c", "2 girls 1 cup", "acrotomophilia", "alabama hot pocket", "alaskan pipeline", 
        "anal", "anilingus", "anus", "apeshit", "arsehole", "ass", "asshole", "assmunch", 
        "auto erotic", "autoerotic", "babeland", "baby batter", "baby juice", "ball gag", 
        "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "bangbros", 
        "bangbus", "bareback", "barely legal", "barenaked", "bastard", "bastardo", "bastinado", 
        "bbw", "bdsm", "beaner", "beaners", "beaver cleaver", "beaver lips", "beastiality", 
        "bestiality", "big black", "big breasts", "big knockers", "big tits", "bimbos", "birdlock", 
        "bitch", "bitches", "black cock", "blonde action", "blonde on blonde action", "blowjob", 
        "blow job", "blow your load", "blue waffle", "blumpkin", "bollocks", "bondage", "boner", 
        "boob", "boobs", "booty call", "brown showers", "brunette action", "bukkake", "bulldyke", 
        "bullet vibe", "bullshit", "bung hole", "bunghole", "busty", "butt", "buttcheeks", "butthole", 
        "camel toe", "camgirl", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "chocolate rosebuds", 
        "cialis", "circlejerk", "cleveland steamer", "clit", "clitoris", "clover clamps", "clusterfuck", 
        "cock", "cocks", "coprolagnia", "coprophilia", "cornhole", "coon", "coons", "creampie", "cum", 
        "cumming", "cumshot", "cumshots", "cunnilingus", "cunt", "darkie", "date rape", "daterape", 
        "deep throat", "deepthroat", "dendrophilia", "dick", "dildo", "dingleberry", "dingleberries", 
        "dirty pillows", "dirty sanchez", "doggie style", "doggiestyle", "doggy style", "doggystyle", 
        "dog style", "dolcett", "domination", "dominatrix", "dommes", "donkey punch", "double dong", 
        "double penetration", "dp action", "dry hump", "dvda", "eat my ass", "ecchi", "ejaculation", 
        "erotic", "erotism", "escort", "eunuch", "fag", "faggot", "fecal", "felch", "fellatio", "feltch", 
        "female squirting", "femdom", "figging", "fingerbang", "fingering", "fisting", "foot fetish", 
        "footjob", "frotting", "fuck", "fuck buttons", "fuckin", "fucking", "fucktards", "fudge packer", 
        "fudgepacker", "futanari", "gangbang", "gang bang", "gay sex", "genitals", "giant cock", "girl on", 
        "girl on top", "girls gone wild", "goatcx", "goatse", "god damn", "gokkun", "golden shower", 
        "goodpoop", "goo girl", "goregasm", "grope", "group sex", "g-spot", "guro", "hand job", "handjob", 
        "hard core", "hardcore", "hentai", "homoerotic", "honkey", "hooker", "horny", "hot carl", "hot chick", 
        "how to kill", "how to murder", "huge fat", "humping", "incest", "intercourse", "jack off", "jail bait", 
        "jailbait", "jelly donut", "jerk off", "jigaboo", "jiggaboo", "jiggerboo", "jizz", "juggs", "kike", 
        "kinbaku", "kinkster", "kinky", "knobbing", "leather restraint", "leather straight jacket", "lemon party", 
        "livesex", "lolita", "lovemaking", "make me come", "male squirting", "masturbate", "masturbating", 
        "masturbation", "menage a trois", "milf", "missionary position", "mong", "motherfucker", "mound of venus", 
        "mr hands", "muff diver", "muffdiving", "nambla", "nawashi", "negro", "neonazi", "nigga", "nigger", 
        "nig nog", "nimphomania", "nipple", "nipples", "nsfw", "nsfw images", "nude", "nudity", "nutten", 
        "nympho", "nymphomania", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "orgasm", 
        "orgy", "paedophile", "paki", "panties", "panty", "pedobear", "pedophile", "pegging", "penis", 
        "phone sex", "piece of shit", "pikey", "pissing", "piss pig", "pisspig", "playboy", "pleasure chest", 
        "pole smoker", "ponyplay", "poof", "poon", "poontang", "punany", "poop chute", "poopchute", "porn", 
        "porno", "pornography", "prince albert piercing", "pthc", "pubes", "pussy", "queaf", "queef", "quim", 
        "raghead", "raging boner", "rape", "raping", "rapist", "rectum", "reverse cowgirl", "rimjob", "rimming", 
        "rosy palm", "rosy palm and her 5 sisters", "rusty trombone", "sadism", "santorum", "scat", "schlong", 
        "scissoring", "semen", "sex", "sexcam", "sexo", "sexy", "sexual", "sexually", "sexuality", "shaved beaver", 
        "shaved pussy", "shemale", "shibari", "shit", "shitblimp", "shitty", "shota", "shrimping", "skeet", 
        "slanteye", "slut", "s&m", "smut", "snatch", "snowballing", "sodomize", "sodomy", "spastic", "spic", 
        "splooge", "splooge moose", "spooge", "spread legs", "spunk", "strap on", "strapon", "strappado", 
        "strip club", "style doggy", "suck", "sucks", "suicide girls", "sultry women", "swastika", "swinger", 
        "tainted love", "taste my", "tea bagging", "threesome", "throating", "thumbzilla", "tied up", 
        "tight white", "tit", "tits", "titties", "titty", "tongue in a", "topless", "tosser", "towelhead", 
        "tranny", "tribadism", "tub girl", "tubgirl", "tushy", "twat", "twink", "twinkie", "two girls one cup", 
        "undressing", "upskirt", "urethra play", "urophilia", "vagina", "venus mound", "viagra", "vibrator", 
        "violet wand", "vorarephilia", "voyeur", "voyeurweb", "voyuer", "vulva", "wank", "wetback", "wet dream", 
        "white power", "whore", "worldsex", "wrapping men", "wrinkled starfish", "xx", "xxx", "yaoi", "yellow showers", 
        "yiffy", "zoophilia","aand", "aandu", "balatkar", "balatkari", "behen chod", "beti chod", "bhadva", "bhadve", 
        "bhandve", "bhangi", "bhootni ke", "bhosad", "bhosadi ke", "boobe", "chakke", "chinaal", 
        "chinki", "chod", "chodu", "chodu bhagat", "chooche", "choochi", "choope", "choot", 
        "choot ke baal", "chootia", "chootiya", "chuche", "chuchi", "chudaap", "chudai khanaa", 
        "chudam chudai", "chude", "chut", "chut ka chuha", "chut ka churan", "chut ka mail", 
        "chut ke baal", "chut ke dhakkan", "chut maarli", "chutad", "chutadd", "chutan", "chutia", 
        "chutiya", "gaand", "gaandfat", "gaandmasti", "gaandufad", "gandfattu", "gandu", "gashti", 
        "gasti", "ghassa", "ghasti", "gucchi", "gucchu", "harami", "haramzade", "hawas", 
        "hawas ke pujari", "hijda", "hijra", "jhant", "jhant chaatu", "jhant ka keeda", 
        "jhant ke baal", "jhant ke pissu", "jhantu", "kamine", "kaminey", "kanjar", "kutta", 
        "kutta kamina", "kutte ki aulad", "kutte ki jat", "kuttiya", "loda", "lodu", "lund", 
        "lund choos", "lund ka bakkal", "lund khajoor", "lundtopi", "lundure", "maa ki chut", 
        "maal", "madar chod", "madarchod", "madhavchod", "mooh mein le", "mutth", "mutthal", 
        "najayaz", "najayaz aulaad", "najayaz paidaish", "paki", "pataka", "patakha", "raand", 
        "randaap", "randi", "randi rona", "saala", "saala kutta", "saali kutti", "saali randi", 
        "suar", "suar ke lund", "suar ki aulad", "tatte", "tatti", "teri maa ka bhosada", 
        "teri maa ka boba chusu", "teri maa ki behenchod", "teri maa ki chut", "tharak", "tharki", 
        "tu chuda"
    ];

    const { token } = useContext(StoreContext); // Access token from context
    const navigate = useNavigate(); // To redirect on logout

    // Auto-scroll effect
    useEffect(() => {
        if (chatBoxARef.current) {
            chatBoxARef.current.scrollTop = chatBoxARef.current.scrollHeight;
        }
        if (chatBoxBRef.current) {
            chatBoxBRef.current.scrollTop = chatBoxBRef.current.scrollHeight;
        }
    }, [messages]);

    // Redirect to home if the token is removed (i.e., user logged out)
    useEffect(() => {
        if (!token) {
            navigate("/"); // Redirect to home page
        }
    }, [token, navigate]);

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

    // ChatPage.jsx updates
    const handleImageUpload = async (e, sender) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsLoading(true);

        try {
            // Create FormData with additional metadata
            const formData = new FormData();
            formData.append('image', file);
            formData.append('filename', file.name);
            formData.append('contentType', file.type);

            const response = await fetch('http://localhost:5000/api/check-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Upload response:', data);

            // More strict handling of NSFW content
            if (data.isNude || data.error || !data.imageUrl) {
                setMessages(prev => [...prev, {
                    sender,
                    type: 'image',
                    imageUrl: null,
                    text: '***** Inappropriate image removed *****',
                    time: new Date().toLocaleTimeString(),
                    isInappropriate: true
                }]);
            } else {
                const imageUrl = `http://localhost:5000${data.imageUrl}`;
                setMessages(prev => [...prev, {
                    sender,
                    type: 'image',
                    imageUrl,
                    text: null,
                    time: new Date().toLocaleTimeString(),
                    isInappropriate: false
                }]);
            }
        } catch (error) {
            console.error('Error processing image:', error);
            setMessages(prev => [...prev, {
                sender,
                type: 'image',
                imageUrl: null,
                text: 'Error processing image. Please try again.',
                time: new Date().toLocaleTimeString(),
                isInappropriate: true
            }]);
        } finally {
            setIsLoading(false);
            e.target.value = '';
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
