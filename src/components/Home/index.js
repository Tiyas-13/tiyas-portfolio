import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { AiOutlineEnvironment } from 'react-icons/ai';
import profileImage from '../../assets/tiyas-2.jpg';
import aws from '../../assets/aws.png';
import java from '../../assets/java.png';
import react from '../../assets/react.png';
import python from '../../assets/python.png';
import gcp from '../../assets/gcp.png';
import flask from '../../assets/flask.png';
import mysql from '../../assets/mysql.png';
import mongo from '../../assets/mongo.png';
import './index.css';

const Home = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1ADgvn05_HvbSHgjl3pN5V9-8u0fjwuco/view?usp=sharing';

    const jobTitles = ['Software Engineer', 'Graduate Student'];
    const location = 'New York City, USA';

    const [titleIndex, setTitleIndex] = useState(0);
    const [currentTitle, setCurrentTitle] = useState('');
    const [typewriterIndex, setTypewriterIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const titleInterval = setInterval(() => {
            setCurrentTitle(jobTitles[titleIndex].substring(0, typewriterIndex));
            if (isTyping) {
                setTypewriterIndex(prevIndex => prevIndex + 1);
                if (typewriterIndex > jobTitles[titleIndex].length) {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsTyping(true);
                        setTypewriterIndex(0);
                        setTitleIndex(prevIndex => (prevIndex + 1) % jobTitles.length);
                    }, 1000);
                }
            }
        }, 150);

        return () => clearInterval(titleInterval);
    }, [titleIndex, typewriterIndex, jobTitles, isTyping]);

    const handleResume = () => {
        window.open(resumeUrl, '_blank');
    };

    return (
        <div name="home" className="w-full bg-[#F7F4EC] py-16 h-screen lg:h-[90vh] md:p-16">
            <div className="max-w-[1000px] w-[80vw] mx-auto px-8 py-8 flex flex-col justify-center items-center md:flex-row h-screen md:h-full">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <p className="text-gray-800 mb-2 text-xl md:text-2xl">Hello, I'm</p>
                        <h1 className="text-2xl md:text-4xl font-bold text-[#5A142A] mb-2">TIYAS DEY</h1>
                    <div className="h-10"> {/* Add this div with fixed height */}
                    <h2 className="max-w-800 text-xl md:text-2xl font-bold text-[#B08D57]">{currentTitle}</h2>
                    </div>
                        <p className="text-gray-700 py-4 max-w-md md:max-w-[500px] text-sm md:text-base">
                        Full Stack Development / API Development / Data Science
                    </p>

                    <div
                        className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
                        <button
                            onClick={handleResume}
                            className="text-[#B08D57] group border-[#B08D57] border-2 px-4 py-2 md:px-6 md:py-3 my-2 md:my-0 flex items-center hover:bg-[#B08D57] hover:border-[#B08D57] hover:text-[#F7F4EC] text-sm md:text-base"
                        >
                            Download Resume
                            <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-2"/>
                        </span>
                        </button>
                        <div className="flex space-x-4 lg:hidden">
                            <a href="https://github.com/Tiyas-13" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-[#B08D57] hover:text-[#5A142A] text-lg"/>
                            </a>
                            <a href="https://www.linkedin.com/in/tiyas-dey-623b6818b/" target="_blank"
                               rel="noopener noreferrer">
                                <FaLinkedin className="text-[#B08D57] hover:text-[#5A142A] text-lg"/>
                            </a>
                            <a href="mailto:td2355@nyu.edu">
                                <FaEnvelope className="text-[#B08D57] hover:text-[#5A142A] text-lg"/>
                            </a>
                        </div>
                    </div>
                    <div className="justify-center">
                        <div className="flex items-center space-x-5 mt-3 md:mt-10">
                            <div className="hover-content">
                                <img src={java} className="h-[30px] w-auto md:h-[40px]" alt="Java" />
                                <span className="hover-text">Java</span>
                            </div>
                            <div className="hover-content">
                                <img src={python} className="h-[30px] w-auto md:h-[40px]" alt="Python" />
                                <span className="hover-text">Python</span>
                            </div>
                            <div className="hover-content">
                                <img src={react} className="h-[30px] w-auto md:h-[40px]" alt="React" />
                                <span className="hover-text">React</span>
                            </div>
                            <div className="hover-content">
                                <img src={flask} className="h-[30px] w-auto md:h-[40px]" alt="React" />
                                <span className="hover-text">Flask</span>
                            </div>
                            <div className="hover-content">
                                <img src={aws} className="h-[30px] w-auto md:h-[40px]" alt="React" />
                                <span className="hover-text">AWS</span>
                            </div>
                            <div className="hover-content">
                                <img src={gcp} className="h-[30px] w-auto md:h-[40px]" alt="React" />
                                <span className="hover-text">GCP</span>
                            </div>
                            <div className="hover-content">
                                <img src={mysql} className="h-[30px] w-auto md:h-[40px]" alt="React" />
                                <span className="hover-text">MySQL</span>
                            </div>
                            <div className="hover-content">
                                <img src={mongo} className="h-[30px] w-auto md:h-[40px]" alt="React" />
                                <span className="hover-text">MongoDb</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-6 max-w-[70%]">
                    <img src={profileImage} alt="Profile" className="rounded-full shadow-lg mx-auto md:w-2/3"/>
                    <div className="text-center md:text-right">
                        <p className="text-gray-700 my-2 text-sm md:text-lg md:text-base">
                            <AiOutlineEnvironment className="inline text-[#B08D57] mr-1"/> {location}
                        </p>
                        <p className="text-gray-700 text-sm md:text-base font-bold">
                            Open to New Grad Software Engineering roles starting 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;