import React from 'react';
import './index.css'; // You can add your CSS styles here
import videoSource from '../../assets/contact-bg-7.mp4'; // Replace with your video source
import Socials from '../Socials';

const Contact = () => {
    return (
        <div name="contact" className="w-full h-full contact-page">
            {/* Background Video */}
            <video autoPlay loop muted className="video-background opacity-70">
                <source src={videoSource} type="video/mp4" />
            </video>

            {/* Content */}
            <div className="max-w-5xl h-[90vh] flex flex-col justify-center items-center px-4">
                <div className="max-w-lg mx-auto lg:w-[2000px]">
                    <form className="bg-[#F2EDE4] p-8 rounded-lg shadow-2xl"
                          method="POST"
                          action="https://getform.io/f/30d47a6d-0cc3-4434-a6cb-5b76a58e516e">
                        <p className="text-gray-700 pt-2 pb-4">Submit the form below or shoot me an email at: <span className="font-bold">tiyas.dey@nyu.edu</span></p>
                        <input
                            type="text"
                            name="name"
                            className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
                            placeholder="Your Name"
                        />
                        <input
                            type="email"
                            name="email"
                            className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
                            placeholder="Your Email"
                        />
                        <textarea
                            name="message"
                            rows="6"
                            className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
                            placeholder="Your Message"
                        ></textarea>
                        <button
                            className="bg-[#B08D57] text-[#F2EDE4] hover:bg-[#5A142A] px-6 py-3 rounded-md transition duration-300 w-full"
                            type="submit"
                        >
                            Let's connect!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
