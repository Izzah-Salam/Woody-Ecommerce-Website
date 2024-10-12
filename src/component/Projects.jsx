import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ projectItems }) => {
  const navigate = useNavigate();

  const handleClick = (projectItem) => {
    // Pass the current projectItem to the ProjectDetail page
    navigate("/projectData", { state: { projectItem } });
  };

  return (
    <div>
      {projectItems.map((projectItem) => (
        <div
          key={projectItem.id} // Ensure each projectItem has a unique 'id'
          className="border-b border-t border-black py-5 flex lg:flex-row flex-col justify-between items-center"
        >
          <div className="lg:text-left text-center">
            <h1 className="text-3xl font-semibold">{projectItem.Title}</h1>
            <p className="text-sm text-gray-600 font-semibold my-3">
              {projectItem.Description}
            </p>
          </div>
          <div className="lg:my-0 my-10">
            <button
              onClick={() => handleClick(projectItem)} // Pass the current project item
              className="bg-transparent border-2 border-lime-800 text-lime-800 py-2 md:px-4 px-2 text-sm rounded-md"
            >
              View Project
            </button>
          </div>
          <img
            src={projectItem.image} // Ensure image is properly passed
            alt={projectItem.Title} // Use the correct title
            className="lg:w-60 lg:h-20 rounded-2xl mx-4"
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
