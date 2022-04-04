import * as React from "react"

import Layout from "../templates/Layout"
import TinyHero from "../components/TinyHero"
import ProjectCard from "../components/ProjectCard"

import GitHubProjects from "../../content/github_projects.json"
const AllGitHubProjects = GitHubProjects.filter(obj => {
  return obj.private === false && obj.fork === false;
}).sort((a, b) => { return b.stargazers_count - a.stargazers_count });

export default function Projects() {
  return (
    <Layout pageTitle="Projects">
      <TinyHero title="All GitHub Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {AllGitHubProjects.map((project) => (
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
