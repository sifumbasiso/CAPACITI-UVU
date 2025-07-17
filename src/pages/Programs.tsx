import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Programs = () => {
  const navigate = useNavigate();
  
  const programs = [
    {
      title: "Software Development",
      description: "Learn to build web and mobile applications using modern technologies and best practices.",
      duration: "12 months",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["JavaScript", "React", "Node.js", "Python", "Database Management"],
      originalLink: "https://uvuafrica.com/capaciti/software-development/"
    },
    {
      title: "Data Analytics",
      description: "Master data analysis techniques and tools to drive business decisions.",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis", "Machine Learning"],
      originalLink: "https://uvuafrica.com/capaciti/data-analytics/"
    },
    {
      title: "Digital Marketing",
      description: "Develop comprehensive digital marketing strategies and campaigns.",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["SEO", "Social Media Marketing", "Content Strategy", "Analytics", "PPC"],
      originalLink: "https://uvuafrica.com/capaciti/digital-marketing/"
    },
    {
      title: "Cloud Computing",
      description: "Learn cloud technologies and infrastructure management.",
      duration: "9 months",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["AWS", "Azure", "DevOps", "Security", "Infrastructure as Code"],
      originalLink: "https://uvuafrica.com/capaciti/cloud-computing/"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#001F3F] mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600">
            Transform your career with our industry-aligned programs
          </p>
          <p className="text-lg text-[#FF6B6B] mt-2">
            All programs include a R7,500 monthly stipend
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#001F3F]">{program.title}</h2>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="mb-4">
                  <span className="text-[#FF6B6B] font-semibold">Duration: </span>
                  {program.duration}
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-[#001F3F]">Key Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-[#001F3F]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-[#FF6B6B] text-white px-6 py-2 rounded-lg hover:bg-[#FF5252] transition-colors duration-200"
                  >
                    Apply Now
                  </button>
                  <a 
                    href={program.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#001F3F] text-white px-6 py-2 rounded-lg hover:bg-[#003366] transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;