import React from "react";

import { graphql } from 'gatsby'

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-coolGray-800 text-white">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          ©️ 2020-{new Date().getFullYear()} JeffResc
        </div>
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          Last Updated: {data.currentBuildDate.currentDate}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const data = useStaticQuery(graphql`
  query {
    currentBuildDate {
      currentDate
    }
  }
`);