import React from 'react';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Experience</h1>

      <div className="p-6 rounded-lg mx-auto">
        <h2 className="text-2xl font-semibold text-white">MERN Stack Developer</h2>
        <p className="text-sm font-bold">2025 - Present</p>
        <h3 className="text-lg mb-4">Encoder Bytes Pvt Limited</h3>

        <p className="mb-4">
          Developing and maintaining web applications using JavaScript, Tailwind CSS and React.js. 
          Implemented RESTful APIs.Collaborated with stakeholders to define project requirements and 
          timelines.
        </p>

        <div className="flex flex-wrap gap-2">
          {["HTML 5", "CSS", "Bootstrap", "Javascript", "React.js", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-white pt-10">Web Developer</h2>
        <p className="text-sm">Nov 2024 - Mar 2025</p>
        <h3 className="text-lg mb-4">Zgalleria</h3>

        <p className="mb-4">
            My role involves creating and maintaining a user-friendly, visually appealing website that 
            showcases products effectively. You will handle tasks like designing responsive layouts, 
            integrating inventory and pricing systems, managing online catalogs, and ensuring a smooth online 
            shopping or inquiry experience. Additionally, you may implement features such as customer reviews, 
            promotional banners, and secure contact or order forms, helping to drive engagement and support 
            sales.
        </p>

        <div className="flex flex-wrap gap-2">
          {["HTML 5", "CSS", "Bootstrap", "Javascript"].map((tech) => (
            <span
              key={tech}
              className="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        </div>
      </div>
  );
};

export default Experience;


