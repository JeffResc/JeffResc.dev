import React from "react";

const TinyHero = (props) => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-4 text-center md:py-48 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold leading-none block w-full text-sky-600 lg:inline">
          {props.title}
        </h1>
      </div>
    </section>
  );
};

export default TinyHero;
