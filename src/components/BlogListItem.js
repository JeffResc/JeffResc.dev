import React from "react"

import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function left_or_right(index) {
    return index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row";
}

const BlogListItem = (props) => {
    return (
        <div className={"flex flex-col overflow-hidden rounded-md shadow-sm hover:scale-105 duration-200 " + left_or_right(props.index)}>
            <GatsbyImage image={getImage(props.featuredImage)} alt={props.title} className="h-80 bg-slate-700 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gradient-to-r from-zinc-700 to-gray-600">
                <Link to={props.url}>
                    <span className="text-xs uppercase text-white">{props.top_text}</span>
                    <h3 className="text-3xl font-bold text-sky-600">{props.title}</h3>
                    <p className="my-6 text-white">{props.description}</p>
                    <p className="self-start text-white">Read More »</p>
                </Link>
            </div>
        </div>
    );
};

export default BlogListItem;