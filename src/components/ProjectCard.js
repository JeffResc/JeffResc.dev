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
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg max-w-sm bg-gradient-to-r from-cyan-900 to-indigo-900 betterhover:hover:from-pink-900 betterhover:hover:to-fuchsia-700 betterhover:hover:scale-110 betterhover:hover:z-50 duration-200 w-full h-full relative">
        <span className="text-white text-xl leading-tight font-medium mb-2 flex">{props.name} {ifArchivedIcon(props)}</span>
        <p className="text-white text-base mb-12">
          <span className="text-xs tracking-wide uppercase flex"><GoStar className="mt-0.5" /> {props.stars} stars, <GoRepoForked className="mt-0.5" /> {props.forks} forks, <GoCode className="mt-0.5" /> {props.language}</span>
          {props.description}
        </p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <button type="button" className="absolute bottom-6 left-6 inline-block px-6 py-2.5 bg-blue-400 text-black font-medium text-xs leading-tight uppercase rounded shadow-md betterhover:hover:bg-blue-600 betterhover:hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Explore</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
