import Projects from "./Projects";
import ProjectData from "./ProjectData";
import { useState } from "react";

const ProjectsSection = () => {
  const [projectItems, setProjectItems] = useState(ProjectData);
  //console.log(projectItems);

  return (
    <div className="my-32 md:px-16 px-10">
      <div className="grid md:grid-cols-2 md:gap-20 pb-10 ">
        <h1 className="lg:text-5xl text-3xl leading-relaxed font-semibold">
          Some of Our Well <br /> Known Projects
        </h1>
        <p className="flex items-center md:my-0 my-5 text-sm font-semibold leading-relaxed text-gray-600">
          Elevated your interiour with our curated selection of premium
          furniture and accessories
        </p>
      </div>
      <Projects projectItems={projectItems} />
    </div>
  );
};

export default ProjectsSection;
