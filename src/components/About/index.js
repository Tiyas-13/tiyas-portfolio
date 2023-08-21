import React, { useRef, useEffect, useState } from 'react';
import './index.css'; // Make sure to create this CSS file

const About = () => {
    return (
        <div name="about" className="w-full h-full bg-[#F7F4EC] text-white pb-20 pt-40 lg:pt-0">
            <div className="text-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#5A142A] mb-2 text-with-shadow">About Me</h2>
                <div className="h-1 bg-[#5A142A] w-16 mx-auto mb-0"></div>
            </div>
            <div className="flex flex-col items-center md:h-full mt-10 ml-10 mr-10 lg:ml-0 lg:mr-0">

                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pb-4">
                    <div className="sm:text-right text-2xl font-bold">
                        <p className="text-[#B08D57]">
                            Thank you for visiting my portfolio. Hopefully we can connect soon. This a little about me.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-4 rounded-lg">
                        <p className="text-[#B08D57]">
                            I am a graduate student at New York University pursuing a MS in Computer Engineering. I currently live in New York, USA. I love
                            learning and gathering new experiences and aspire to make meaningful contributions in
                            the world through my skills.
                        </p>
                        <br />
                        <p className="text-[#B08D57]">
                            I primarily code in Java and Python. I have about 1 year of Full time work experience at JPMorgan Chase
                            as a Software Engineer along with other valuable internship experiences. I am experienced in Full Stack Web
                            Development, API Development and Data Manipulation. My technical skills include Java, Python, C, React.js,
                            Spring Boot, Flask, MySQL, MongoDB, AWS, GCP among others. I am also a Data Science and
                            Machine Learning enthusiast and am excited about the positive changes that we can make through technology.
                        </p>
                        <br />
                        <p className="text-[#B08D57]">
                            I love travelling and meeting new people, and if you can't tell from my website, I am a huge Harry Potter fan.
                            I have discovered a new found love for tiramisus and am spending most of my time trying to figure out how to make
                            the perfect one myself; besides coding of course :)

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;