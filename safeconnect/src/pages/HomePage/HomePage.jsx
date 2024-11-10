// src/pages/HomePage.jsx

import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* Header Section */}
            <header className="home-header">
                <h1>One Brand <span><img src="/src/assets/peach.png" alt="&" height="60" /></span> Two Solutions</h1>
                <p>
                    Empowering women with secure and discreet communication tools. Our platform offers virtual numbers for privacy and advanced message filtering to shield against harmful content, ensuring a safe and respectful digital experience.
                </p>
            </header>

            {/* Main Content with alternating images and text */}
            <section className="content-section">
                {/* Section 1: Image Left, Text Right */}
                <div className="content-block">
                    <div className="content-image">
                        <img src="/src/assets/girl.png" alt="Empowerment" /
                        >
                    </div>
                    <div className="content-text">
                        <h1>Safe Conversations to Avoid Toxicity </h1>
                        <p>Our platform prioritizes a safe and respectful messaging experience. Each message is analyzed by an intelligent filtering system that checks for offensive or harmful language.
                             If a message is identified as potentially toxic, users receive a notification, alerting them that the sender may be engaging in inappropriate or offensive communication. 
                             This feature empowers users to be aware of any concerning interactions without blocking the message outright, helping them make informed decisions while fostering a safe and supportive environment.</p>
                    </div>
                </div>

                {/* Section 2: Text Left, Image Right */}
                <div className="content-block reverse">
                    <div className="content-text">
                        <h1>Secure Virtual Number for Your Communications</h1>
                        <p>Our platform ensures privacy and security by providing women with a virtual phone number when making calls through the application. Instead of displaying the users actual phone number, the recipient sees the virtual number, safeguarding her personal contact details. This feature empowers women to communicate freely while maintaining full control over their privacy, preventing unwanted exposure and ensuring that their real phone number remains confidential.</p>
                    </div>
                    <div className="content-image">
                        <img src="/src/assets/Fakecall2.png" alt="Fake Call Feature" />
                    </div>
                </div>

                {/* Section 3: Image Left, Text Right */}
                <div className="content-block">
                    <div className="content-image">
                        <img src="/src/assets/Recordbg.png" alt="Record Background" />
                    </div>
                    <div className="content-text">
                        <h1>Automatic Emergency Recording for Future Evidence</h1>
                        <p>In an emergency, our platform provides a secure way for women to document the situation by recording audio discreetly. This feature allows users to capture important details of an incident in real time, ensuring that sensitive information is stored safely and privately. The recordings are kept confidential, offering a reliable record that can be used for support, evidence, or reporting, all while protecting the user’s privacy and security. This empowers women to document their experiences with confidence, knowing their safety and privacy are prioritized.</p>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contact-section">
                <div className="contact-content">
                    <h2>Contact Us</h2>
                    <p>We’d love to hear from you! Fill out the form below and we’ll get in touch with you soon.</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="email" id="name" placeholder="" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" cols="100" placeholder="" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
                <div className="contact-image">
                    <img src="/src/assets/contact.png" alt="Contact Us" />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
