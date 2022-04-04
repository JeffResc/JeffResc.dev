import React from "react";

import { GoCode } from "@react-icons/all-files/go/GoCode";
import { GoRepoForked } from "@react-icons/all-files/go/GoRepoForked";
import { GoStar } from "@react-icons/all-files/go/GoStar";
import { RiArchiveDrawerFill } from '@react-icons/all-files/ri/RiArchiveDrawerFill';

function ifArchivedIcon(props) {
  if (props.archived) {
      return <RiArchiveDrawerFill className="mt-1" /> ;
  }
}

const ProjectCard = (props) => {
  return (
    <div className="flex justify-center hover:scale-110 duration-200">
      <div className="block p-6 rounded-lg shadow-lg max-w-sm bg-gradient-to-r from-cyan-800 to-indigo-900 w-full h-full relative">
        <span className="text-white text-xl leading-tight font-medium mb-2 flex">{props.name} {ifArchivedIcon(props)}</span>
        <p className="text-white text-base mb-12">
          <span className="text-xs tracking-wide uppercase flex"><GoStar className="mt-0.5" /> {props.stars} stars, <GoRepoForked className="mt-0.5" /> {props.forks} forks, <GoCode className="mt-0.5" /> {props.language}</span>
          {props.description}
        </p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <button type="button" className="absolute bottom-6 left-6 inline-block px-6 py-2.5 bg-slate-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Explore</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
