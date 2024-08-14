import React from 'react';
import './About.css';
import profile_img from "../../assets/profile_img.svg";
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div id="about" className="relative bg-white overflow-hidden mt-16 mx-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                    About me
                                </h2>
                                <p className="text-black">
                                    I'm Ankit Kumar, is a proficient Full Stack Developer with a robust background in Mechanical Engineering
                                    from the National Institute of Technology, Sikkim. With expertise in designing dynamic websites,
                                    database management systems, and e-commerce platforms, Ankit has demonstrated a strong capability to
                                    lead and execute complex projects efficiently. Currently, Ankit is honing his skills as a Project Intern
                                    at Dharaksha Ecosolution and guiding junior developers as a member of the Web Development Cell at NIT Sikkim.
                                    <NavLink to={"/moreAbout"} className="text-blue-800"> More...</NavLink>
                                </p>
                                
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src='./assets/myProfile/ankitVertical.JPG' alt="Profile" />
                </div>
            </div>
        </>
    );
}

export default About;
