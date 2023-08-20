import React from 'react';
import characterImage from '../../assets/hermione.png'; // Make sure to import your image file

const Contact = () => {
    return (
        <div name="contact" className="w-full min-h-screen bg-[#7C1C3B] flex flex-col justify-center items-center p-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:ml-20">
                <div className="md:w-1/2">
                    <form
                        method="POST"
                        action="https://getform.io/f/30d47a6d-0cc3-4434-a6cb-5b76a58e516e"
                        className="bg-[#F2EDE4] p-6 md:p-8 rounded-lg shadow-lg"
                    >
                        <div className="pb-6">
                            <p className="text-2xl font-bold inline border-b-4 border-[#B08D57] text-[#B08D57]">Contact</p>
                            <p className="text-gray-700 py-4">Submit the form below or shoot me an email at: tiyas.dey@nyu.edu</p>
                        </div>
                        <input
                            className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
                            type="text"
                            placeholder="Name"
                            name="name"
                        />
                        <input
                            className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <textarea
                            className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
                            name="message"
                            rows="6"
                            placeholder="Message"
                        ></textarea>
                        <button className="bg-[#B08D57] text-[#F2EDE4] hover:bg-[#5A142A] px-6 py-3 rounded-md transition duration-300 w-full">
                            Let's Connect!
                        </button>
                    </form>
                </div>
                <div className="md:w-1/2 hidden md:block">
                    <img src={characterImage} alt="Character" className="rounded-lg shadow-lg mx-auto md:mx-0 md:w-2/4 lg:w-1/3 opacity-70" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
