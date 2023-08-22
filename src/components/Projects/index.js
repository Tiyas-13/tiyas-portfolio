import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';
import './index.css';

import Cheap from '../../assets/Cheap.png';
import Resnet from '../../assets/Resnet3.png';
import Google from '../../assets/Google.png';
import Socials from "../Socials";

const Projects = () => {
    const projects = [
        {
            title: 'Cheap Thrills',
            description: 'A Trip Planning web app aimed at helping students plan budget trips ' +
                'through smart recommendations and estimates based on their preferences.',
            githubLink: 'https://github.com/Tiyas-13/CheapThrills',
            image: Cheap
        },
        {
            title: 'RESNET on CIFAR-10',
            description: 'A custom ResNet model implemented in PyTorch, that gains ~93% accuracy on the CIFAR-10 dataset while using <5 million trainable parameters.',
            githubLink: 'https://github.com/Tiyas-13/ResNet-on-CIFAR-10',
            image: Resnet
        },
        {
            title: 'Google Clone',
            description: 'A simple clone of tthe google search functionality made using React.js, Tailwind CSS and Rapid API.',
            githubLink: 'https://github.com/Tiyas-13/google-clone',
            image: Google
        }
    ];

    return (
        <div name="projects" className="bg-[#F7F4EC] py-16 w-full h-auto">
            <div className="max-w-7xl mx-auto text-center">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#5A142A] mb-2 text-with-shadow">Projects</h2>
                    <div className="h-1 bg-[#5A142A] w-16 mx-auto mb-0"></div>
                </div>
                <p className="mt-4 text-gray-700">A sample portfolio of my personal projects. Find more at: <a href="https://github.com/Tiyas-13" target="_blank" className="font-bold">https://github.com/Tiyas-13</a> </p>
                <div className="grid gap-8 md:grid-cols-3 mt-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="mx-4 bg-white p-6 rounded-lg shadow-lg project-card transition-transform duration-300
                            transform hover:translate-y-[-5px] hover:shadow-lg hover:border-[#B08D57] border
                            border-transparent flex flex-col justify-between fade-in-up cursor-pointer"
                        >
                            <div>
                                <img src={project.image} alt={project.title} className="mb-4 rounded-lg shadow-md" />
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                            </div>
                            <div className="mt-4 flex justify-center items-center">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#B08D57] hover:text-[#5A142A] flex items-center"
                                >
                                    <FaGithub className="mr-2" />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

