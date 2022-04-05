import React from "react";

const LinkURL = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button type="button" className="my-2 px-8 py-3 w-full font-semibold rounded bg-zinc-900 betterhover:hover:bg-stone-900 duration-200 text-white">{props.name}</button>
    </a>
  )
}

export default LinkURL;