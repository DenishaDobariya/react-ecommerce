// src/components/Contact.js
import React from 'react';


const Contact = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Contact Us</h2>
                    <p>
                        Have any questions or concerns? Feel free to reach out to us using the contact form below or through the contact details provided.
                    </p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2>Our Location</h2>
                    <div className="map-container mb-4">
                        {/* Replace the src with your actual map URL */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.029690073826!2d-122.41941848468119!3d37.774929279759856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7b3d1f55%3A0x8f8fcb3e08109f7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615369431872!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <h3>Contact Details</h3>
                    <p><i className="bi bi-house-door"></i> 1234 Fashion St, San Francisco, CA 94103</p>
                    <p><i className="bi bi-envelope"></i> support@estore.com</p>
                    <p><i className="bi bi-phone"></i> (123) 456-7890</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
