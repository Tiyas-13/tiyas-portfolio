import React, { useState } from 'react';
import './index.css';
import Hermione from '../../assets/logo-2.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaHome, FaSuitcase, FaPhone, FaPen } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineProject, AiOutlinePhone} from "react-icons/ai";
import { Link } from 'react-scroll';
import {FaPerson} from "react-icons/fa6";
import Socials from "../Socials";

const Navbar = () => {
    const [mm, setMm] = useState(false);

    const handleClick = () => {
        setMm(!mm);
    }

    return (
        <div className='bg-[#E6DFD2] fixed w-full h-[80px] flex justify-between items-center px-1 pr-6 text-[#7C1C3B] z-10'>
            <Link to="home" smooth={true}>
                <img className="cursor-pointer" src={Hermione} alt="logo image" style={{width: "200px", height:"200px", marginBottom:"20px"}}/>
            </Link>

            {/* menu */}
            <ul className="hidden md:flex space-x-2">
                <li>
                    <Link to="home" smooth={true}>
                        <div className="flex items-center group transition-colors duration-300 hover:text-[#B08D57]">
                            <AiOutlineHome className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true}>
                        <div className="flex items-center group transition-colors duration-300 hover:text-[#B08D57]">
                            <AiOutlineUser className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> About
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true}>
                        <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57]">
                            <AiOutlineBook className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Experience
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true}>
                        <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57]">
                            <AiOutlineProject className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Projects
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true}>
                        <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57]">
                            <AiOutlinePhone className="m-1 text-[#5A142A] text-xl transition-colors duration-300 group-hover:text-[#B08D57]" /> Contact
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
                            <AiOutlineHome className="m-1"/> Home
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="about" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <AiOutlineUser className="m-1"/> About
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="experience" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <AiOutlineBook className="m-1"/> Experience
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="projects" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <AiOutlineProject className="m-1"/> Projects
                        </div>
                    </Link>
                </li>
                <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
                    <Link to="contact" smooth={true} onClick={handleClick}>
                        <div className="flex">
                            <AiOutlinePhone className="m-1"/> Contact
                        </div>
                    </Link>
                </li>
            </ul>



            {/* social icons */}
            <Socials />


            </div>
    );
}

export default Navbar;