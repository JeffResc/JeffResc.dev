import * as React from "react"

import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../templates/Layout"
import TinyHero from "../components/TinyHero"
import ProjectCard from "../components/ProjectCard"
import BlogList from "../components/BlogList"
import ProjectListItem from "../components/ProjectListItem"

export default function Projects({ data }) {
  return (
    <Layout pageTitle="Projects">
      <TinyHero title="Featured Projects" />
      <BlogList>
        <ProjectListItem
          index="0"
          title="JeffResc.dev"
          top_text="April 2022"
          featuredImage={
            <StaticImage src="../images/jeffresc.dev-site-preview.png" alt="JeffResc.dev Site Preview" className="h-80 bg-slate-700 aspect-video" />
          }
          key="0"
        >
          <span><a href="https://jeffresc.dev/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">JeffResc.dev</a> is my personal portfolio site built using <a href="https://www.gatsbyjs.com/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">Gatsby</a>, <a href="https://reactjs.org/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">React</a>, and <a href="https://tailwindcss.com/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>. It is automatically deployed to <a href="https://pages.github.com/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">GitHub Pages</a> using <a href="https://github.com/features/actions" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">GitHub Actions</a>.</span>
          <br />
          <div className="my-2 flex flex-wrap gap-2">
            <StaticImage src="../images/icons/gatsby.svg" alt="Gatsby" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/react-2.svg" alt="React" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/tailwindcss-icon.svg" alt="Tailwind CSS" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/github-icon.svg" alt="GitHub" placeholder="blurred" height={32} />
          </div>
          <br />
          <a href="https://github.com/JeffResc/jeffresc.github.io" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-sky-600 betterhover:hover:bg-blue-600 font-medium text-xs uppercase px-6 py-2.5 rounded shadow-md">Explore on GitHub</button>
          </a>
        </ProjectListItem>
        <ProjectListItem
          index="1"
          title="SimpleSignage"
          top_text="June 2020 - January 2022"
          featuredImage={
            <StaticImage src="https://raw.githubusercontent.com/JeffResc/SimpleSignage/master/demo.png" alt="SimpleSignage Demo" className="h-80 bg-slate-700 aspect-video" />
          }
          key="0"
        >
          <span>A simple signage display program built for the <a href="https://www.raspberrypi.com/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">Raspberry Pi</a>. Features a password-protected web interface, and a simple interface for controlling the display. Upload media assets through the web interface, and display them on the display. Live preview of the display is available through the web interface. Set active display hours, and the display will automatically turn off at the end of the day.</span>
          <br />
          <div className="my-2 flex flex-wrap gap-2">
            <StaticImage src="../images/icons/nodejs-1.svg" alt="NodeJS" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/logo-javascript.svg" alt="JavaScript" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/Moby-logo.webp" alt="Docker" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/raspberry-pi.svg" alt="Raspberry Pi" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/linux-tux.svg" alt="Linux" placeholder="blurred" height={32} />
          </div>
          <br />
          <a href="https://github.com/JeffResc/SimpleSignage" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-sky-600 betterhover:hover:bg-blue-600 font-medium text-xs uppercase px-6 py-2.5 rounded shadow-md">Explore on GitHub</button>
          </a>
        </ProjectListItem>
        <ProjectListItem
          index="2"
          title="DelTrack"
          top_text="November 2021 - December 2021"
          featuredImage={
            <StaticImage src="https://raw.githubusercontent.com/JeffResc/DelTrack/main/.demo-images/home.png" alt="DelTrack Demo" className="h-80 bg-slate-700 aspect-video" />
          }
          key="1"
        >
          <span>DelTrack is an all-in-one delivery tracking solution supporting 24 couriers (USPS, UPS, FedEx, DHL, etc.) and counting! Notifications can be setup for an email when a package has an exception or has not had a new tracking event in 24 hours. Track unlimited packages from a centralized location, store package information in a database for easy reference at a later date, locally authenticate users, and use a live scanner using a camera or image upload to easily add deliveries from tracking label barcodes.</span>
          <br />
          <div className="my-2 flex flex-wrap gap-2">
            <StaticImage src="../images/icons/nodejs-1.svg" alt="NodeJS" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/logo-javascript.svg" alt="JavaScript" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/mongodb-icon-1.svg" alt="MongoDB" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/Moby-logo.webp" alt="Docker" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/linux-tux.svg" alt="Linux" placeholder="blurred" height={32} />
          </div>
          <br />
          <a href="https://github.com/JeffResc/DelTrack" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-sky-600 betterhover:hover:bg-blue-600 font-medium text-xs uppercase px-6 py-2.5 rounded shadow-md">Explore on GitHub</button>
          </a>
        </ProjectListItem>
      </BlogList>
      <TinyHero title="Academic Projects" />
      <BlogList>
        <ProjectListItem
          index="3"
          title="Recipe Buddy"
          top_text="Fall 2021"
          featuredImage={
            <StaticImage src="https://raw.githubusercontent.com/CertifiedDataBoys/Recipe-Buddy/main/.demo-images/screencapture-localhost-5000-2021-12-15-22_21_02.png" alt="RecipeBuddy Demo" className="h-80 bg-slate-700 aspect-video" />
          }
          key="2"
        >
          <span>Built using Python and <a href="https://flask.palletsprojects.com/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">Flask</a>, Recipe Buddy is a multi-functional tool for organizing recipes, pantry items, and dietary restrictions. Recipe Buddy offers extensive user management features such as authentication, recipe viewing with multi-media, and various other feautres. Course project for CS 350 at Clarkson University.</span>
          <br />
          <div className="my-2 flex flex-wrap gap-2">
            <StaticImage src="../images/icons/python-5.svg" alt="Python" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/flask.png" alt="Flask" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/Moby-logo.webp" alt="Docker" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/mysql-6.svg" alt="MySQL" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/latex.png" alt="LaTeX" placeholder="blurred" height={32} />
          </div>
          <br />
          <a href="https://github.com/CertifiedDataBoys/Recipe-Buddy" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-sky-600 betterhover:hover:bg-blue-600 font-medium text-xs uppercase px-6 py-2.5 rounded shadow-md mx-2">Explore on GitHub</button>
          </a>
          <a href="https://raw.githubusercontent.com/CertifiedDataBoys/Requirements-Document/build/Requirements_Document.pdf" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-sky-600 betterhover:hover:bg-blue-600 font-medium text-xs uppercase px-6 py-2.5 rounded shadow-md mx-2">Software Requirements Specification Document</button>
          </a>
        </ProjectListItem>
        <ProjectListItem
          index="4"
          title="CFSocial"
          top_text="November 21, 2021"
          featuredImage={
            <StaticImage src="https://github.com/JeffResc/CFSocial-Frontend/raw/main/.demo-images/screencapture-cfsocial-jeffresc-dev-2022-04-04-22_48_55.png" alt="CFSocial Demo" className="h-80 bg-slate-700 aspect-video" />
          }
          key="3"
        >
          <span>Built using <a href="https://workers.cloudflare.com/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">Cloudflare Workers</a>, <a href="https://cfsocial.jeffresc.dev/" className="text-sky-400 after:content-['_↗']" target="_blank" rel="noopener noreferrer">CFSocial</a> is a social media website featuring user authentication, posting (with multi-media), editing posts, reactions (like, heart, celebrate, laugh), upvote/downvote, and commenting.</span>
          <br />
          <div className="my-2 flex flex-wrap gap-2">
            <StaticImage src="../images/icons/cloudflare-workers.svg" alt="Cloudflare Workers" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/JQuery-Logo.svg" alt="jQuery" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/logo-javascript.svg" alt="JavaScript" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/HTML5_Logo.svg" alt="HTML5" placeholder="blurred" height={32} />
            <StaticImage src="../images/icons/CSS3_logo_and_wordmark.svg" alt="CSS3" placeholder="blurred" height={32} />
          </div>
          <br />
          <a href="https://github.com/JeffResc/CFSocial-Frontend" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-sky-600 betterhover:hover:bg-blue-600 font-medium text-xs uppercase px-6 py-2.5 rounded shadow-md mx-2">Explore on GitHub</button>
          </a>
          <a href="https://cfsocial.jeffresc.dev/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-sky-600 betterhover:hover:bg-blue-600 font-medium text-xs uppercase px-6 py-2.5 rounded shadow-md mx-2">CFSocial Demo</button>
          </a>
        </ProjectListItem>
      </BlogList>
      <TinyHero title="All GitHub Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.repos.edges.map((repo) => (
            <ProjectCard
              name={repo.node.name}
              description={repo.node.description}
              url={repo.node.html_url}
              stars={repo.node.stargazers_count}
              forks={repo.node.forks}
              archived={repo.node.archived}
              language={repo.node.language}
              key={repo.node.id}
            />
          ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    repos: allInternalRepos(
      filter: {id: {ne: "dummy"}, private: {eq: false}, fork: {eq: false}},
      sort: {order: DESC, fields: stargazers_count}
    ) {
      edges {
        node {
          id
          forks
          description
          name
          stargazers_count
          language
          html_url
        }
      }
    }
  }
`