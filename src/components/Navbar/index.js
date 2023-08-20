import React, { useState } from 'react';
import './index.css';
import Hermione from '../../assets/logo-2.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaHome, FaSuitcase, FaPhone, FaPen } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-scroll';
import {FaPerson} from "react-icons/fa6";

const Navbar = () => {
    const [mm, setMm] = useState(false);

    const handleClick = () => {
        setMm(!mm);
    }

    return (
        <div className='bg-[#F2EDE4] fixed w-full h-[80px] flex justify-between items-center px-1 pr-6 text-[#7C1C3B]'>
            <div>
                <img src={Hermione} alt="logo image" style={{width: "200px", height:"200px", marginBottom:"20px"}}/>
            </div>

            {/* menu */}
            <ul className="hidden md:flex space-x-4">
                <li>
                    <Link to="home" smooth={true}>
                        <div className="flex items-center group transition-colors duration-300 hover:text-[#B08D57]">
                            <FaHome className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true}>
                        <div className="flex items-center group transition-colors duration-300 hover:text-[#B08D57]">
                            <FaPerson className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> About
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true}>
                        <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57]">
                            <FaSuitcase className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Experience
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true}>
                        <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57]">
                            <FaPen className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Projects
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true}>
                        <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57]">
                            <FaPhone className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Contact
                        </div>
                    </Link>
                </li>
            </ul>


            {/* hamburger */}
            <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
                {
                    mm ? <FaTimes /> : <FaBars />
                }
            </div>

            {/* mobile menu */}
            <ul className={mm ? "fixed top-10 right-0 w-[40vw] h-[40vh] bg-[#F2EDE4] flex flex-col justify-center items-center shadow-lg transition-all duration-300" : "hidden"}>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="home" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <FaHome className="m-1"/> Home
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="about" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <FaPerson className="m-1"/> About
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="experience" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <FaSuitcase className="m-1"/> Experience
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="projects" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <FaPen className="m-1"/> Projects
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="contact" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <FaPhone className="m-1"/> Contact
                        </div>
                    </Link>
                </li>
            </ul>



            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a href="https://www.linkedin.com/in/tiyas-dey-623b6818b/" rel="noopener noreferrer" target="_blank" className="flex justify-between items-center w-full text-white">
                            Linkedin <FaLinkedin size={20}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
                        <a href="https://github.com/Tiyas-13" rel="noopener noreferrer" target="_blank" className="flex justify-between items-center w-full text-white">
                            Github <FaGithub size={20}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-300">
                        <a href="mailto:td2355@nyu.edu" className="flex justify-between items-center w-full text-white">
                            Mail <HiOutlineMail size={20}/>
                        </a>
                    </li>
                </ul>
            </div>

            </div>
    );
}

export default Navbar;