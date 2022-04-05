import React from "react"

function left_or_right(index) {
    return index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row";
}

const ProjectListItem = (props) => {
    return (
        <div className={"flex flex-col overflow-hidden rounded-md shadow-sm betterhover:hover:scale-105 duration-200 " + left_or_right(props.index)}>
            {props.featuredImage}
            <div className="flex flex-col justify-center flex-1 p-6 bg-gradient-to-r from-zinc-700 to-gray-600">
                <span className="text-xs uppercase text-white">{props.top_text}</span>
                <h3 className="text-3xl font-bold text-sky-600">{props.title}</h3>
                <p className="my-6 text-white">{props.children}</p>
            </div>
        </div>
    );
};

export default ProjectListItem;