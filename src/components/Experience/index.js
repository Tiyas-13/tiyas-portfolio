import React from 'react';
import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "../TabSelector";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as SchoolIcon} from "../../assets/school.svg";
import { ReactComponent as WorkIcon} from "../../assets/work.svg"

const Experience = () => {
    const [selectedTab, setSelectedTab] = useTabs([
        "education",
        "work experience",
        "extra curriculars"
    ], "work experience");

    const nit = 'https://drive.google.com/file/d/17y6f9bzOczN7ueRxNlVOABEknkqTuXyB/view?usp=sharing';
    const nyu = 'https://drive.google.com/file/d/1Nd4Y8J42K7-hbZTFkfsyqVg3kksBIlPW/view?usp=sharing';

    const handleNit = () => {
        window.open(nit, '_blank');
    };

    const handleNyu = () => {
        window.open(nyu, '_blank');
    };

    return (
        <div name="experience" className="w-full h-auto bg-[#F7F4EC] px-4 lg:px-0">
            <nav className="flex justify-center border-b border-[#B08D57]">
                <TabSelector
                    isActive={selectedTab === "education"}
                    onClick={() => setSelectedTab("education")}
                >
                    Education
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === "work experience"}
                    onClick={() => setSelectedTab("work experience")}
                >
                    Work Experience
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === "extra curriculars"}
                    onClick={() => setSelectedTab("extra curriculars")}
                >
                    Extra Curriculars
                </TabSelector>
            </nav>
            <div className="p-10">
                <TabPanel hidden={selectedTab !== "education"}>
                    <VerticalTimeline lineColor="#F2EDE4" layout="2-columns" animate={true}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="September 2022 - May 2024"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">New York University</h3>
                            <h4 className="vertical-timeline-element-subtitle font-bold">MS Computer Engineering</h4>
                            <p>
                                GPA: 3.89/4.0
                            </p>
                            <button onClick={handleNyu} className="border-[#B08D57] border-2 p-1 mt-2 text-[#B08D57] flex items-center text-sm hover:bg-[#B08D57] hover:border-[#B08D57] hover:text-[#F2EDE4]">Download Transcript</button>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="July 2017 - June 2021"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">National Institute of Technology Durgapur</h3>
                            <h4 className="vertical-timeline-element-subtitle font-bold">B.Tech Electrical Engineering</h4>
                            <p>
                                GPA: 9.19/10.0
                            </p>
                            <button onClick={handleNit} className="border-[#B08D57] border-2 p-1 mt-2 text-[#B08D57] flex items-center text-sm hover:bg-[#B08D57] hover:border-[#B08D57] hover:text-[#F2EDE4]">Download Transcript</button>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "work experience"}>
                    <VerticalTimeline lineColor="#F2EDE4" layout="2-columns" animate={true}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="September 2022 - Present"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">New York University Information Technology</h3>
                            <h4 className="vertical-timeline-element-subtitle font-bold">API Developer Intern (Part Time)</h4>
                            <ul className="list-disc ml-6">
                                <li className="mb-2">Revamped an existing product for NYU applications by improving API request functionalities using React and Flask.</li>
                                <li className="mb-2">Successfully migrated database from Snowflake to MySQL.</li>
                                <li className="mb-2">Modified GraphQL API endpoints in Mulesoft for improved performance</li>
                                <li className="mb-2">Improved user engagement for for the portal and automated process flow email notifications.</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="June 2023 - August 2023"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">GreenPortfolio</h3>
                            <h4 className="vertical-timeline-element-subtitle font-bold">Data Science Intern</h4>
                            <ul className="list-disc ml-6">
                                <li className="mb-2">Improved and refactored the data pipeline with Python</li>
                                <li className="mb-2">Enhanced the algorithm for rating calculations, fetching and organising data from various APIs</li>
                                <li className="mb-2">Moved database from spreadsheets to Google Bigquery for performance improvement</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="August 2021 - August 2022"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">JP Morgan Chase & Co.</h3>
                            <h4 className="vertical-timeline-element-subtitle font-bold">Software Engineer</h4>
                            <ul className="list-disc ml-6">
                                <li className="mb-2">Collaborated with application teams to facilitate the firm’s modernisation drive of migrating to the cloud and adopting Terraform as the standard IaaS.</li>
                                <li className="mb-2">Devised a Golang based CLI to transition the state of S3 buckets from AWS Service Catalog to Terraform.</li>
                                <li className="mb-2">Enhanced a new architectural modeling tool that helps software architects to build diagrams through Yaml code using Angular and Spring Boot.</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="February 2021 - July 2022"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">JP Morgan Chase & Co.</h3>
                            <h4 className="vertical-timeline-element-subtitle font-bold">Software Engineer Intern</h4>
                            <ul className="list-disc ml-6">
                                <li className="mb-2">Built a web application for the team’s product leveraging Reactjs and Spring Boot.</li>
                                <li className="mb-2">Integrated the app with the firm’s CI/CD pipeline based on Jenkins and deployed it to AWS, EC2 and then EKS, maintaining the firm’s security requirements.</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="June 2020 - July 2020"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">JP Morgan Chase & Co.</h3>
                            <h4 className="vertical-timeline-element-subtitle font-bold">Software Engineer Summer Intern</h4>
                            <ul className="list-disc ml-6">
                                <li className="mb-2">Created an android application for the NPO, Learning Curve, which aims at inculcating socio-emotional values in children belonging to under-privileged backgrounds.</li>
                                <li className="mb-2">Utilized React Native to create a platform that could be leveraged by Learning Curve facilitators to create customized lessons, as well as by the students to access those lessons.</li>
                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "extra curriculars"}>
                    <VerticalTimeline lineColor="#F2EDE4" layout="2-columns" animate={true}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="September 2022 - Present"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">New York University</h3>
                            <ul className="list-disc ml-6">
                                <li className="mb-2">David C. and Cecelia M. Chang Student Leadership Award, 2023</li>
                                <li className="mb-2">Graduate Research Assistant, EMERGE Lab, Fall 2023</li>
                                <li className="mb-2">Coordinator, AI For Scientific Research, Fall 2022</li>
                                <li className="mb-2">Merit Scholarship</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="July 2017 - June 2021"
                            contentStyle={{ background: '#F2EDE4'}}
                            iconStyle={{ background: '#B08D57', color: '#F2EDE4' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-lg">National Institute of Technology Durgapur</h3>
                            <ul className="list-disc ml-6">
                                <li className="mb-2">Public Relations Head, GNU/Linux Users' Group</li>
                                <li className="mb-2">General Secretary, Literary Circle</li>
                            </ul>

                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </TabPanel>
            </div>
        </div>
    );
}

export default Experience;