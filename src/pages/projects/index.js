import * as React from "react"

import { graphql } from 'gatsby'

import Layout from "../../templates/Layout"
import TinyHero from "../../components/TinyHero"
import ProjectCard from "../../components/ProjectCard"
import BlogList from "../../components/BlogList"
import BlogListItem from "../../components/BlogListItem"

export default function Projects({ data }) {
  return (
    <Layout pageTitle="Projects">
      <TinyHero title="Featured Projects" />
      <BlogList>
      {data.projects.edges.map((project) => (
        <BlogListItem
          index={project.node.id}
          title={project.node.frontmatter.title}
          top_text="Hurmmm"
          description={project.node.frontmatter.description}
          url={`/projects/${project.node.slug}`}
          featuredImage={project.node.frontmatter.featuredImage}
          key={project.node.id}
        />
      ))}
      </BlogList>
      <TinyHero title="Academic Projects" />
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
    projects: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fields: {source: {eq: "projects"}}}
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData (
                  width: 1080
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`