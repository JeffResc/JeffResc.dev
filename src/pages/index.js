import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../templates/Layout"
import Hero from "../components/Hero"
import TinyHero from "../components/TinyHero"
import IconsDisplay from "../components/IconsDisplay"
import ProjectCard from "../components/ProjectCard"

export default function IndexPage({ data }) {
  return (
    <Layout pageTitle="Jeff Rescignano" pageDescription="Hi, I'm Jeff Rescignano. I'm a Cloud, Infrastructure and DevSecOps Engineer. This is my development portfolio and blog!">
      <Helmet>
        <link rel="canonical" href="https://jeffresc.dev/" />
        <script type='application/ld+json'>
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "givenName": "Jeffrey",
            "familyName": "Rescignano",
            "nationality": "American",
            "description": "Cloud, Infrastructure, DevSecOps Enginner",
            "jobTitle": "Student",
            "url": "https://jeffresc.dev/",
            "image": "https://jeffresc.dev/img/Profile.jpg",
            "birthPlace": {
              "address": {
                "addressRegion": "NY",
                "addressCountry": "United States"
              }
            },
            "homeLocation": {
              "address": {
                "addressCountry": "United States"
              }
            },
            "knowsAbout": ["Computer Science", "Advanced Programming Concepts", "Algorithms and Data Structures", "Computer Organization", "Computer and Network Security", "Database Systems", "Embedded Systems", "Human-Computer Interaction", "Programming Languages", "Software Design & Development", "Linear Algebra"]
          }`}
        </script>
      </Helmet>
      <Hero subtitle="true" />
      <TinyHero title="Languages" />
      <IconsDisplay>
        <span title="Python">
          <StaticImage src="../images/icons/python-5.svg" alt="Python" placeholder="blurred" height={64} key="1" />
        </span>
        <span title="NodeJS">
          <StaticImage src="../images/icons/nodejs-1.svg" alt="NodeJS" placeholder="blurred" height={64} key="2" />
        </span>
        <span title="JavaScript">
          <StaticImage src="../images/icons/logo-javascript.svg" alt="JavaScript" placeholder="blurred" height={64} key="3" />
        </span>
        <span title="Java">
          <StaticImage src="../images/icons/java-14.svg" alt="Java" placeholder="blurred" height={64} key="4" />
        </span>
        <span title="C">
          <StaticImage src="../images/icons/c-1.svg" alt="C" placeholder="blurred" height={64} key="5" />
        </span>
        <span title="C++">
          <StaticImage src="../images/icons/c.svg" alt="C++" placeholder="blurred" height={64} key="6" />
        </span>
      </IconsDisplay>
      <TinyHero title="Tools" />
      <IconsDisplay>
        <span title="Docker">
          <StaticImage src="../images/icons/Moby-logo.webp" alt="Docker" placeholder="blurred" height={64} key="7" />
        </span>
        <span title="Linux">
          <StaticImage src="../images/icons/linux-tux.svg" alt="Linux" placeholder="blurred" height={64} key="8" />
        </span>
        <span title="Raspberry Pi">
          <StaticImage src="../images/icons/raspberry-pi.svg" alt="Raspberry Pi" placeholder="blurred" height={64} key="9" />
        </span>
        <span title="Ubuntu">
          <StaticImage src="../images/icons/ubuntu-4.svg" alt="Ubuntu" placeholder="blurred" height={64} key="10" />
        </span>
        <span title="GitHub">
          <StaticImage src="../images/icons/github-icon.svg" alt="GitHub" placeholder="blurred" height={64} key="11" />
        </span>
        <span title="Git">
          <StaticImage src="../images/icons/git-icon.svg" alt="Git" placeholder="blurred" height={64} key="12" />
        </span>
        <span title="React">
          <StaticImage src="../images/icons/react-2.svg" alt="React" placeholder="blurred" height={64} key="13" />
        </span>
        <span title="Gatsby">
          <StaticImage src="../images/icons/gatsby.svg" alt="Gatsby" placeholder="blurred" height={64} key="14" />
        </span>
        <span title="Tailwind CSS">
          <StaticImage src="../images/icons/tailwindcss-icon.svg" alt="Tailwind CSS" placeholder="blurred" height={64} key="15" />
        </span>
        <span title="Arduino">
          <StaticImage src="../images/icons/arduino-1.svg" alt="Arduino" placeholder="blurred" height={64} key="16" />
        </span>
        <span title="NPM">
          <StaticImage src="../images/icons/npm-square-red-1.svg" alt="NPM" placeholder="blurred" height={64} key="17" />
        </span>
        <span title="Visual Studio Code">
          <StaticImage src="../images/icons/visual-studio-code-1.svg" alt="Visual Studio Code" placeholder="blurred" height={64} key="18" />
        </span>
        <span title="Travis CI">
          <StaticImage src="../images/icons/travis-ci-icon.svg" alt="Travis CI" placeholder="blurred" height={64} key="19" />
        </span>
        <span title="MySQL">
          <StaticImage src="../images/icons/mysql-6.svg" alt="MySQL" placeholder="blurred" height={64} key="20" />
        </span>
        <span title="MongoDB">
          <StaticImage src="../images/icons/mongodb-icon-1.svg" alt="MongoDB" placeholder="blurred" height={64} key="21" />
        </span>
        <span title="LaTeX">
          <StaticImage src="../images/icons/latex.png" alt="LaTeX" placeholder="blurred" height={64} key="22" />
        </span>
      </IconsDisplay>
      <TinyHero title="Top GitHub Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.allInternalRepos.edges.map((project) => (
            <ProjectCard
              name={project.node.name}
              description={project.node.description}
              url={project.node.html_url}
              stars={project.node.stargazers_count}
              forks={project.node.forks}
              archived={project.node.archived}
              language={project.node.language}
              key={project.node.id}
            />
          ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allInternalRepos(
      filter: {id: {ne: "dummy"}, private: {eq: false}, fork: {eq: false}},
      sort: {order: DESC, fields: stargazers_count}
      limit: 6
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
