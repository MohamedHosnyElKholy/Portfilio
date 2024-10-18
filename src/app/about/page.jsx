"use client"; // تأكد من وضعها في أعلى الملف

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
        <p className="text-gray-700 mb-2">
          Hello! I&apos;m Mohamed Hosny, a passionate Front-End Developer specializing in React and Next.js.
        </p>
        <p className="text-gray-700 mb-2">
          With a strong foundation in web development, I love building responsive and user-friendly interfaces that enhance user experiences. My goal is to create seamless web applications that not only look great but also perform efficiently.
        </p>
        <p className="text-gray-700 mb-4">
          I am always eager to learn new technologies and improve my skills. I enjoy collaborating with teams and contributing to innovative projects that make a difference.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Skills:</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          {[
            "React.js",
            "Context API",
            "Redux",
            "Redux Toolkit",
            "Tailwind CSS",
            "Styled Components",
            "NPM",
            "Bootstrap",
            "Responsive Web Design",
            "Git & GitHub",
            "Web Design",
            "REST APIs",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Next.js"
          ].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Contact Me:</h2>
        <p className="text-gray-700">
          Feel free to reach out to me on 
          <a href="https://github.com/MohamedHosnyElKholy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1"> GitHub</a> or 
          <a href="https://www.linkedin.com/in/mohamed-hosny-b6688a2b5/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1"> LinkedIn</a>.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
