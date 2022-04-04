import * as React from "react"

import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

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
        <BlogListItem
            index="0"
            title="Test"
            top_text="Hello"
            description="Hi hi hi"
            url={`/blog/1`}
            featuredImage={
              <StaticImage src="../images/hero_profile.jpg" alt="Hi" placeholder="blurred" className="h-80 bg-slate-700 aspect-video" />
            }
            key="0"
        />
      </BlogList>
      <TinyHero title="Academic Projects" />
      <TinyHero title="All GitHub Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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