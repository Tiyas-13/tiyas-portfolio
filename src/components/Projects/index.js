import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';
import './index.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna vel dui egestas bibendum.',
            githubLink: 'https://github.com/yourusername/project1',
            demoLink: 'https://demo.project1.com',
        },
        {
            title: 'Project 2',
            description: 'Nulla sed nulla sit amet tellus lacinia euismod eu eget velit.',
            githubLink: 'https://github.com/yourusername/project2',
            demoLink: 'https://demo.project2.com',
        },
        {
            title: 'Project 2',
            description: 'Nulla sed nulla sit amet tellus lacinia euismod eu eget velit.',
            githubLink: 'https://github.com/yourusername/project2',
            demoLink: 'https://demo.project2.com',
        },
        {
            title: 'Project 2',
            description: 'Nulla sed nulla sit amet tellus lacinia euismod eu eget velit.',
            githubLink: 'https://github.com/yourusername/project2',
            demoLink: 'https://demo.project2.com',
        }
        // Add more projects here
    ];

    return (
        <div name="projects" className="bg-[#F2EDE4] py-16 w-full h-auto">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold border-b-4 border-[#5A142A] text-[#5A142A] inline">Projects</h2>
                <p className="mt-4 text-gray-700">A sample portfolio of my personal projects. Find more at: <a href="https://github.com/Tiyas-13" target="_blank" className="font-bold">https://github.com/Tiyas-13</a> </p>
                <div className="grid gap-8 md:grid-cols-2 mt-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="mx-4 bg-white p-6 rounded-lg shadow-md project-card hover:shadow-xl hover:border-[#B08D57] transition-shadow duration-300 border border-transparent flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#B08D57] hover:text-[#5A142A] flex items-center"
                                >
                                    <FaGithub className="mr-2" />
                                    View on GitHub
                                </a>
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#B08D57] hover:text-[#5A142A] flex items-center"
                                >
                                    <FaCode className="mr-2" />
                                    View Demo
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

