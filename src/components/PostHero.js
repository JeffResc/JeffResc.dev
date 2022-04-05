import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostHero = (props) => {
  const featuredImage = getImage(props.featuredImage)
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-4 text-center md:py-8 md:px-10 lg:px-32 xl:max-w-3xl">
        <GatsbyImage image={featuredImage} alt={props.title} className="object-scale-down h-96 w-auto mb-4 rounded-lg hover:scale-105 duration-200" loading="eager" />
        <h1 className="text-4xl font-bold leading-none block w-full text-sky-600 lg:inline">
          {props.title}
        </h1>
        <span className="block w-full text-white sm:inline mt-2">{props.subtitle}</span>
      </div>
    </section>
  );
};

export default PostHero;
