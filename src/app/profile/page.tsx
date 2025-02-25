"use client"
import React, { useRef } from 'react';
import Image from "next/image";
import ProfileImage from "../profile.jpg"
const Resume: React.FC = () => {

    const sectionRef = useRef<HTMLInputElement>(null);

    const handlePrint = () => {
        if (sectionRef.current) {
            const printContents:string = sectionRef?.current?.innerHTML;
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        }
      
    };
    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-10 flex justify-center" ref={sectionRef} id="print-section">
                <div className="bg-white shadow-md w-[210mm] h-[100%] flex">
                    {/* Sidebar */}
                    <aside className="bg-blue-900 text-white p-8 w-1/3 flex flex-col ">
                        <div className="flex flex-col items-center">
                            {/* User Image */}
                            <Image
                                src={ProfileImage}
                                width={400}
                                height={400}
                                className="rounded-full h-24 w-24 mb-1"
                                alt="Picture of the author"
                            />
                            {/* <img
                            src={ProfileImage} // Replace with your image URL
                            alt="User Avatar"
                            className="rounded-full h-24 w-24 mb-1"
                        /> */}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-4">Abhishek Kumar Gupta</h1>
                            <div className="mb-8">
                                <p><strong>Mobile:</strong> +91-9958528055</p>
                                <p><strong>Email:</strong> er.abhishek18feb@gmail.com</p>
                                <p><strong>Location:</strong> AVS Orchard sector-77 Noida</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">Skills</h2>
                            <ul className="space-y-2">
                                <li className="bg-blue-800 p-2 rounded">React, Redux, Node.js</li>
                                <li className="bg-blue-800 p-2 rounded">Python, Django</li>
                                <li className="bg-blue-800 p-2 rounded">PHP, JavaScript</li>
                                <li className="bg-blue-800 p-2 rounded">OpenAI, LangChain</li>
                                <li className="bg-blue-800 p-2 rounded">MongoDB, MySQL</li>
                                <li className="bg-blue-800 p-2 rounded">Apollo, GraphQL</li>
                                <li className="bg-blue-800 p-2 rounded">Stripe, PayPal</li>
                            </ul>
                            <h2 className="text-xl font-bold mt-6 mb-2">Education</h2>
                            <ul className="space-y-2">
                                <li className="bg-blue-800 p-2 rounded">B.E. in Computer Science & Engineering: 68.88 (2010)yay</li>
                                <li className="bg-blue-800 p-2 rounded">Sr. Secondary: 78.67% (2004)</li>
                                <li className="bg-blue-800 p-2 rounded">High School: 74.2% (2002)</li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="p-8 w-2/3">
                        <section className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-blue-900">Objective</h2>
                            <p>To achieve a challenging position that will enable me to fully explore my talent and abilities and provide the necessary environment and opportunities for growth and development towards making a contribution to the organization’s goals.</p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-blue-700">Professional Experience</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Sr. Software Engineer - Techbit Solution Pvt. Ltd.</h3>
                                <p className="text-sm text-gray-400">Nov 2021 - Present</p>
                                <p>Leading the development of digital survey portals, Health and client CRM systems.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Web Developer - Aapna Infotech Pvt. Ltd.</h3>
                                <p className="text-sm text-gray-400">Dec 2020 - Nov 2021</p>
                                <p>Worked on React and Node.js applications for enterprise clients belongs to Ecommerce and Insurance domains.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Software Engineer - Braintechnosys Private Ltd.</h3>
                                <p className="text-sm text-gray-400">15 March 2018 - 15 Dec 2020</p>
                                <p>Worked on Php(Laravel and Cakephp), React and Node.js applications for enterprise clients belongs to Ecommerce and Advertisement domains.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">PHP Developer - Eweblabs.</h3>
                                <p className="text-sm text-gray-400">January 2016 - Feb 2018</p>
                                <p>Created website using Php(Laravel and Cakephp).</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Trainer (C, C++, php, JavaScript, MySql) -RBCEBTW.</h3>
                                <p className="text-sm text-gray-400">September 2010 to August, 2014</p>
                            </div>
                        </section>
                        {/* <section className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-blue-700">Experience Other then IT Sector</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Quant and Reasoning Teacher - Brilliant Academy, Chhatarpur (M.P.).</h3>
                                <p className="text-sm text-gray-400">January 2015 to August 2015</p>
                            </div>
                        </section> */}

                        <section className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-blue-900">Projects</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Digital Building Association Management Since Nov 2023 to Present</h3>
                                <p><b>Project Description: </b>This project is used to make the transparency between HomeOwner  Association and all building flat owner inside the building.</p>
                                <p><b>Technology Used: </b> React, Redux, Redux Thunk, Node.js, React Native, AWS Lambda, DynamoDB</p>
                                <p><b>Role: </b>Client Communication, Front end work, Distribution of work with Other Team member, Sharing the client suggestion and understanding of work with team member.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Digital Survey Application (From PWC) Since Nov 2021 to Nov 2023</h3>
                                <p><b>Technology Used: </b> React, Redux, Redux Thunk, Node.js, Expressjs, PostgresSQL</p>
                                <p><b>Role: </b>Responsible for creating reusable component, Api Writing, Client Communication.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Food Recommendation System (Belongs to Health Domain)</h3>
                                <p><b>Technology Used: </b> React, Redux, Redux Thunk, Node.js, Expressjs, Mongodb, OpenAI</p>
                                <p><b>Role: </b>Responsible for guiding frontend and backend development, Api Writing, Client Communication.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Multivendor B to B, B to C, Multilanguage Ecommerce CRM</h3>
                                <p>This CRM contails the following features:</p>
                                <ul>
                                    <li>Contains different Modules for like: E Commerce Product, Food Product and Downloadable Products</li>
                                    <li>Inventory Management</li>
                                    <li>Vendor Management</li>
                                    <li>Product Management</li>
                                    <li>Order Management</li>
                                    <li>Customer Management</li>
                                    <li>Payment Management</li>
                                    <li>We can use different languages like: English, Arabic</li>
                                </ul>
                                <h3>Technology Used: </h3>
                                <p className="text-gray-700">React, Redux, Redux-saga, Node.js, MongoDB, Apollo GraphQl, Apollo Gatway,  Microservice.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Digital Lab Report Management Portal</h3>
                                <p>Developed a portal for managing lab reports and referrals using React and Node.js.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Digital Insurance Portal</h3>
                                <p>Developed a portal for providing different types of Insurance using React, Redux, Redux-saga, Node.js, MongoDB, Apollo GraphQl, Apollo Gatway, Microservice.</p>
                            </div>
                            {/* <div className="mb-4">
                                <h3 className="text-lg font-semibold">Mental Health Portal (ootify.com)</h3>
                                <p>Implemented video chat and sharable meeting links using Twilio APIs.</p>
                            </div> */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold"> Multi Language Classified Website</h3>
                                <p><b>Technology Used: </b> Laravel, Html, css, jquery</p>
                                <p><b>Role: </b>Responsible for guiding frontend and backend development, Api Writing, Client Communication.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Meal Planner </h3>
                                <p><b>Technology Used: </b> Laravel, Html, css, jquery</p>
                                <p><b>Role: </b>Involved in maintenance and created Restful Apis.</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">J-Fireworks</h3>
                                <p><b>Project Description: </b>A multi-language e-commerce website for selling crackers online.</p>
                                <p><b>Technology Used: </b> Laravel, Html, css, jquery</p>
                                <p><b>Role: </b> Was involved in maintenance and introduced various offers like Happy Weekend, Early Bird, Special, and Top-up offers.</p>
                            </div>
                        </section>

                        {/* <section>
                        <h2 className="text-2xl font-bold mb-2 text-blue-900">Certifications</h2>
                        <p>React and Redux (Udemy)</p>
                    </section> */}
                    </main>
                </div>
            </div>
            <button onClick={() => handlePrint()}>Download</button>
        </div>
    );
};

export default Resume;
