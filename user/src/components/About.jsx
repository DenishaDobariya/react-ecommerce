// src/components/About.js
import React from 'react';
import employee1 from '../assets/images/employee1.jpg';
import employee2 from '../assets/images/employee2.jpg';
import employee3 from '../assets/images/employee3.webp';
import employee4 from '../assets/images/employee4.png';

const teamMembers = [
    { id: 1, name: 'Jane Doe', role: 'Founder & CEO', image: employee1 },
    { id: 2, name: 'John Smith', role: 'Chief Operating Officer', image: employee2 },
    { id: 3, name: 'Alice Johnson', role: 'Marketing Manager', image: employee3 },
    { id: 4, name: 'Bob Brown', role: 'Product Designer', image: employee4 },
];

const About = () => {
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-lg-12 mb-4">
                    <h2 className="text-dark text-center">About Us</h2>
                    <p>
                        Welcome to eStore! We are a leading retailer offering a wide range of fashion products for men, women, and children.
                        Our mission is to provide high-quality products at affordable prices while ensuring a seamless shopping experience for our customers.
                    </p>
                    <p>
                        Established in 2020, we have grown rapidly and built a reputation for excellence in both product quality and customer service.
                        Our team is dedicated to bringing you the latest trends and timeless classics, ensuring that you always find something you love.
                    </p>
                </div>
            </div>
            <div className="row">
                {teamMembers.map((member) => (
                    <div key={member.id} className="col-lg-3 col-md-6 mb-4">
                        <div className="team-member">
                            <img src={member.image} alt={member.name} />
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
