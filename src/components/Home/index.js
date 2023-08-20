import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import the icons
import profileImage from '../../assets/tiyas-2.jpg'; // Import your profile image

const Home = () => {
    return (
        <div name="home" className="w-full bg-[#F7F4EC] py-16 h-screen lg:h-[90vh] p-8 md:p-16">
            <div className="max-w-[1000px] w-[80vw] mx-auto px-8 py-8 flex flex-col justify-center items-center md:flex-row h-full">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <p className="text-gray-800 mb-2 text-xl md:text-2xl">Hello, I'm</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-[#5A142A] mb-2">TIYAS DEY</h1>
                    <h2 className="max-w-800 text-xl md:text-2xl font-bold text-[#B08D57]">Software Engineer</h2>
                    <p className="text-gray-700 py-4 max-w-md md:max-w-[500px] text-sm md:text-base">
                        Full Stack Development / API Development / Data Science
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
                        <button className="text-[#B08D57] group border-[#B08D57] border-2 px-4 py-2 md:px-6 md:py-3 my-2 md:my-0 flex items-center hover:bg-[#B08D57] hover:border-[#B08D57] hover:text-[#F7F4EC] text-sm md:text-base">
                            Download Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-2" />
                            </span>
                        </button>
                        <div className="flex space-x-4 lg:hidden">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-[#B08D57] hover:text-[#5A142A] text-lg" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-[#B08D57] hover:text-[#5A142A] text-lg" />
                            </a>
                            <a href="#">
                                <FaEnvelope className="text-[#B08D57] hover:text-[#5A142A] text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-6 max-w-[70%]">
                    <img src={profileImage} alt="Profile" className="rounded-full shadow-lg mx-auto md:w-2/3" />
                    <div className="text-center md:text-right">
                        <p className="text-gray-700 my-2 text-sm md:text-lg md:text-base">
                            Based in <span className="text-[#B08D57] mr-1"> New York City, USA </span>
                        </p>
                        <p className="text-gray-700 text-sm md:text-base font-bold">
                            Open to New Grad Software Engineering roles starting December 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
