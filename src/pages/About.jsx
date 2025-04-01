import React, { useState } from "react";
import { FaCode, FaDatabase, FaCogs, FaNetworkWired, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    id: "programming",
    icon: <FaCode className="text-teal-500 text-3xl" />,
    title: "Programming",
    description: [
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Laravel",
      ".NET"
    ]
  },
  {
    id: "databases",
    icon: <FaDatabase className="text-yellow-500 text-3xl" />,
    title: "Databases",
    description: [
      "MySQL",
      "SQL Server",
      "PL/SQL",
      "NoSQL",
      "UML",
      "MCD",
      "MLD",
      "MERISE"
    ]
  },
  {
    id: "software-design",
    icon: <FaCogs className="text-orange-500 text-3xl" />,
    title: "Software Design",
    description: [
      "OOP",
      "UML",
      "System Architecture",
      "Design Patterns"
    ]
  },
  {
    id: "networking",
    icon: <FaNetworkWired className="text-purple-500 text-3xl" />,
    title: "Networking",
    description: [
      "Linux",
      "Unix Shell",
      "TCP/IP",
      "Routing",
      "Firewalls",
      "Security"
    ]
  },
  {
    id: "backend",
    icon: <FaServer className="text-blue-500 text-3xl" />,
    title: "Backend Development",
    description: [
      "Node.js",
      "Express",
      "Laravel",
      ".NET Core",
      "RESTful APIs"
    ]
  }
];

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-10">
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h1>
      <p className="text-gray-400 mb-12 text-lg">Explore my technical skills and expertise.</p>

      <div className="w-full max-w-4xl grid grid-cols-2 gap-8">
        {/* Skills List on the Left */}
        <div className="space-y-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className={`flex items-center p-6 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition duration-300 ${
                selectedSkill.id === skill.id ? "bg-teal-600 text-white" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="mr-4">{skill.icon}</div>
              <h2 className="text-xl font-semibold">{skill.title}</h2>
            </motion.div>
          ))}
        </div>

        {/* Skill Details on the Right */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <motion.h2
            className="text-3xl font-extrabold text-teal-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedSkill.title}
          </motion.h2>
          <motion.ul
            className="text-gray-300 text-lg space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedSkill.description.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
