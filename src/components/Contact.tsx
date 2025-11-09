import React from 'react';
import '../styles/Contact.css';
const Contact: React.FC = () => {
    let mailink: string = "mailto:someone@example.com?subject=Project%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%20Please%20let%20me%20know%20when%20you%20are%20available.%0A%0AThank%20you.";

    return (
        <section className="contact-section">
            <h1 id='heading'>Lets Work Together</h1>
            <div className="subscribe-form" style={{backgroundImage: "url(orange.png)"}}>
                
                    <h3>Send Me An Email</h3>
                    <div className="input-group">
                        <input type="text" placeholder="I would like to discuss a project. Please let me know when you are available." />
                        <a target='_blank' href={mailink}>
                        <button>
                            <span>Send</span>
                        </button>
                        </a>
                    </div>
                </div>
        </section>
    );
};

export default Contact;
