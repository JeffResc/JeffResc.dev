import React from "react";

import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <StaticImage src="../images/hero_profile.jpg" alt="Profile" className="object-scale-down h-56 w-56 mb-4 rounded-lg hover:scale-110 duration-200" placeholder="blurred" loading="eager" />
        <h1 className="text-4xl font-bold leading-none sm:text-5xl text-white">
          Hi, I'm<br/>
          <span className="block w-full text-sky-600 lg:inline">Jeff Rescignano</span>
        </h1>
        <p className="mt-8 mb-12 text-lg text-white">
          I'm a junior at Clarkson University studying Computer Science.
        </p>
      </div>
    </section>
  );
};

export default Hero;