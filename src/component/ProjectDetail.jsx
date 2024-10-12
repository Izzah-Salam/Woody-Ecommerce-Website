import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectDetail = () => {
  const location = useLocation();
  const { projectItem } = location.state || {}; // Retrieve projectItem from location state

  if (!projectItem) {
    return <div>No project data available</div>;
  }

  return (
    <div className="grid lg:grid-cols-2  my-20">
      <div className="px-10">
        <img
          src={projectItem.image}
          alt={projectItem.Title}
          className="rounded-md"
        />
      </div>

      <div className="lg:mr-20 m-10 lg:text-left text-center">
        <h1 className="text-4xl font-bold">{projectItem.Title}</h1>
        <p className="text-sm mt-10 ">
          {projectItem.Description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          mollitia facere voluptatem illum repudiandae eligendi maiores
          distinctio voluptas temporibus consectetur.
        </p>
        <Link to={"/"}>
          <div>
            <button className="bg-lightgreen  px-4 py-2 rounded-md mt-5">
              <FaArrowLeft />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
