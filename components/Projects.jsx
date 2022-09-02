import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../public/assets/projects/property.jpg";
import project2 from "../public/assets/projects/crypto.jpg";
import project3 from "../public/assets/projects/netflix.jpg";
import project4 from "../public/assets/projects/twitch.jpg";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            image={project1}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto Trading"
            image={project2}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix UI"
            image={project3}
            projectUrl="/netflix"
          />
          <ProjectItem title="Twitch" image={project4} projectUrl="/twich" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
