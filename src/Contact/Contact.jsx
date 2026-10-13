
import React from 'react';
import './Contact.css';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const subject = `Portfolio Message from ${name}`;

        const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

        const gmailURL =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=hmpramodkumar541@gmail.com` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, '_blank');
    };

    return (
        <section className="contact" id="contact">
            <h1>Contact Me</h1>

            <p>
                I am looking for opportunities as a Python Full Stack Developer.
                Feel free to contact me regarding job opportunities.
            </p>

            <div className="contact-details">
                <p>
                    <i className="fa-solid fa-phone"></i>{' '}
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+91XXXXXXXXXX">+91 9380070434</a>
                </p>

                <p>
                    <i className="fa-solid fa-envelope"></i>{' '}
                    <strong>Email:</strong>{' '}
                    <a href="hmpramodkumar541@gmail.com">
                        hmpramodkumar541@gmail.com
                    </a>
                </p>

                <p>
                    <i className="fa-solid fa-location-dot"></i>{' '}
                    <strong>Location:</strong> Bengaluru, Karnataka
                </p>
            </div>

            <h2>Send Me a Message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message"
                        rows="5"
                        required
                    />
                </div>

                <button type="submit" className="send-btn">
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                </button>
            </form>

            <a
                href="/resume.pdf"
                download="Pramod-Kumar-Resume.pdf"
                className="resume-btn"
            >
                <i className="fa-solid fa-download"></i> Download Resume
            </a>
        </section>
    );
};

export default Contact;
