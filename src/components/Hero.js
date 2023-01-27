import React from "react";

import { StaticImage } from "gatsby-plugin-image"

function if_subtitle(subtitle) {
  if (subtitle !== "false") {
    return (
      <p className="mt-8 text-xl text-white">
        I'm a Clarkson University graduate who studied Computer Science with minors in Mathematics and Communication.
      </p>
    )
  }
}

const Hero = (props) => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center">
        <StaticImage src="../../static/img/Profile.jpg" alt="Profile" className="object-scale-down h-56 w-56 mb-4 rounded-lg betterhover:hover:scale-110 duration-200" placeholder="blurred" loading="eager" />
        <h1 className="text-4xl font-bold leading-none sm:text-5xl text-white">
          Hi, I'm<br/>
          <span className="block w-full text-sky-600 lg:inline">Jeff Rescignano</span>
        </h1>
        {if_subtitle(props.subtitle)}
      </div>
    </section>
  );
};

export default Hero;
