import React from 'react';
import HtmlLogo from '../assets/skills/html-logo.png';
import GithubLogo from '../assets/skills/github-logo.png';
import JavascriptLogo from '../assets/skills/javascript-logo.png';
import ReactLogo from '../assets/skills/react-logo.png';
import NodeLogo from '../assets/skills/node-logo.png';
import PhpLogo from '../assets/skills/php-logo.png';
import PythonLogo from '../assets/skills/python-logo.png';
import CssLogo from '../assets/skills/css-logo.png';
const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300 ">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-red-600">Skills</p>
                    <p className="py-4">// These are technologies I've worked with</p>
                </div>
                {/* Container Icon */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HtmlLogo} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CssLogo} alt="CSS icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavascriptLogo} alt="JavaScript icon" />
                        <p className="my-4">Javascript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={PythonLogo} alt="Python icon" />
                        <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={GithubLogo} alt="Github icon" />
                        <p className="my-4">Github</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactLogo} alt="React icon" />
                        <p className="my-4">React Js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={NodeLogo} alt="Node icon" />
                        <p className="my-4">Node Js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={PhpLogo} alt="PHP icon" />
                        <p className="my-4">PHP</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
