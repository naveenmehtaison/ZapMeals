import React from "react";
import naveen from "../../Assests/PicsArt_01-04-10.56.36.jpg";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Naveen Singh Mehta
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Hi, I'm Naveen Singh Mehta, a passionate React Developer with a knack
          for building user-friendly, responsive, and dynamic web applications.
          I love creating solutions that make a difference!
        </p>
        <div className="flex flex-col items-center">
          <img
            src={naveen}
            alt="Naveen Singh Mehta"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            React Developer
          </h2>
          <p className="text-gray-600 mt-2">
            With a strong foundation in JavaScript, React, and front-end
            technologies, I specialize in crafting scalable and efficient
            applications. My goal is to keep learning, growing, and delivering
            impactful solutions.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
          <p className="text-gray-600">
            React.js, JavaScript, Redux, Tailwind CSS, Firebase, SCSS,
            Responsive Design
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
          <p className="text-gray-600">
            Feel free to reach out to me for collaboration or projects!
          </p>
          <a
            href="mailto:naveen@example.com"
            className="text-blue-500 font-medium hover:underline mt-2 block"
          >
            naveenmehta099@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
