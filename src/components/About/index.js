import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#F2EDE4] text-white">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#5A142A] text-[#5A142A]">About</p>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-3xl font-bold">
                        <p className="text-[#B08D57]">
                            Thank you for visiting my website. Hopefully we can connect soon. This a little about me.
                        </p>
                    </div>
                    <div>
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