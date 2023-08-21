import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const Socials = () => {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-1000">
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
    )
}

export default Socials;