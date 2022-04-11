import React from "react";

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { useStaticQuery, graphql } from 'gatsby'

dayjs.extend(relativeTime);

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const buildDate = dayjs(data.currentBuildDate.currentDate);

  return (
    <footer className="px-4 py-8 bg-coolGray-800 text-white">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          ©️ 2020-{buildDate.year()} JeffResc
        </div>
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <span title={buildDate.toString()}>Last built {buildDate.fromNow()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
