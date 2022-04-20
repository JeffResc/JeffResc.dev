import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostHero = (props) => {
  function displayModifiedDate(date, modified_date) {
    if (typeof props.modified_date != 'undefined' && props.date !== props.modified_date) {
      return <span className="block w-full text-white text-sm sm:inline mt-2">Last modified {props.modified_date}</span>
    }
  }

  const featuredImage = getImage(props.featuredImage)
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-4 text-center md:py-8 md:px-10 lg:px-32 xl:max-w-3xl">
        <GatsbyImage image={featuredImage} alt={props.title} className="object-scale-down h-96 w-auto mb-4 rounded-lg betterhover:hover:scale-105 duration-200" loading="eager" />
        <h1 className="text-4xl font-bold leading-none block w-full text-sky-600 lg:inline">
          {props.title}
        </h1>
        <span className="block w-full text-white sm:inline mt-2">{props.date}</span>
        {displayModifiedDate(props.date, props.modified_date)}
      </div>
    </section>
  );
};

export default PostHero;
