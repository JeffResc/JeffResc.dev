import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../templates/Layout"
import Hero from "../components/Hero"
import TinyHero from "../components/TinyHero"
import IconsDisplay from "../components/IconsDisplay"
import ProjectCard from "../components/ProjectCard"

import GitHubProjects from "../../content/github_projects.json";
const TopGitHubProjects = GitHubProjects.filter(obj => {
  return obj.private === false && obj.fork === false;
}).sort((a, b) => { return b.stargazers_count - a.stargazers_count }).slice(0,6);

export default function IndexPage() {
  return (
    <Layout pageTitle="Jeff Rescignano">
      <Hero />
      <TinyHero title="Languages" />
      <IconsDisplay>
        <StaticImage src="../images/icons/python-5.svg" alt="Python" placeholder="blurred" height={64} key="1" />
        <StaticImage src="../images/icons/nodejs-1.svg" alt="NodeJS" placeholder="blurred" height={64} key="2" />
        <StaticImage src="../images/icons/logo-javascript.svg" alt="JavaScript" placeholder="blurred" height={64} key="3" />
        <StaticImage src="../images/icons/java-14.svg" alt="Java" placeholder="blurred" height={64} key="4" />
        <StaticImage src="../images/icons/c-1.svg" alt="C" placeholder="blurred" height={64} key="5" />
        <StaticImage src="../images/icons/c.svg" alt="C++" placeholder="blurred" height={64} key="6" />
        <StaticImage src="../images/icons/mysql-6.svg" alt="MySQL" placeholder="blurred" height={64} key="7" />
        <StaticImage src="../images/icons/mongodb-icon-1.svg" alt="MongoDB" placeholder="blurred" height={64} key="8" />
      </IconsDisplay>
      <TinyHero title="Tools" />
      <IconsDisplay>
        <StaticImage src="../images/icons/docker.svg" alt="Docker" placeholder="blurred" height={64} key="9" />
        <StaticImage src="../images/icons/linux-tux.svg" alt="Linux" placeholder="blurred" height={64} key="10" />
        <StaticImage src="../images/icons/raspberry-pi.svg" alt="Raspberry Pi" placeholder="blurred" height={64} key="11" />
        <StaticImage src="../images/icons/ubuntu-4.svg" alt="Ubuntu" placeholder="blurred" height={64} key="12" />
        <StaticImage src="../images/icons/react-2.svg" alt="React" placeholder="blurred" height={64} key="13" />
        <StaticImage src="../images/icons/gatsby.svg" alt="Gatsby" placeholder="blurred" height={64} key="14" />
        <StaticImage src="../images/icons/arduino-1.svg" alt="Arduino" placeholder="blurred" height={64} key="15" />
        <StaticImage src="../images/icons/npm-square-red-1.svg" alt="NPM" placeholder="blurred" height={64} key="16" />
        <StaticImage src="../images/icons/github-icon.svg" alt="GitHub" placeholder="blurred" height={64} key="17" />
        <StaticImage src="../images/icons/git-icon.svg" alt="Git" placeholder="blurred" height={64} key="18" />
        <StaticImage src="../images/icons/visual-studio-code-1.svg" alt="Visual Studio Code" placeholder="blurred" height={64} key="19" />
        <StaticImage src="../images/icons/travis-ci-icon.svg" alt="Travis CI" placeholder="blurred" height={64} key="20" />
        </IconsDisplay>
      <TinyHero title="Top GitHub Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TopGitHubProjects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              url={project.html_url}
              stars={project.stargazers_count}
              forks={project.forks}
              archived={project.archived}
              language={project.language}
              key={project.full_name}
            />
          ))}
      </div>
    </Layout>
  )
}
