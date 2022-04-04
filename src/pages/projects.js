import * as React from "react"

import { graphql } from 'gatsby'

import Layout from "../templates/Layout"
import TinyHero from "../components/TinyHero"
import ProjectCard from "../components/ProjectCard"

export default function Projects({ data }) {
  return (
    <Layout pageTitle="Projects">
      <TinyHero title="All GitHub Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.allInternalRepos.edges.map((project) => (
            <ProjectCard
              name={project.node.name}
              description={project.node.description}
              url={project.node.html_url}
              stars={project.node.stargazers_count}
              forks={project.node.forks}
              archived={project.node.archived}
              language={project.node.language}
              key={project.node.full_name}
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