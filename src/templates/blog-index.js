import * as React from "react"

import { graphql } from 'gatsby'

import Layout from "../templates/Layout"
import TinyHero from "../components/TinyHero"
import BlogList from "../components/BlogList"
import BlogListItem from "../components/BlogListItem"
import Pager from "../components/Pager"

const BlogPage = ({ data, pageContext }) => {
    return (
        <Layout pageTitle="Blog">
            <TinyHero title="Blog" />
            <BlogList>
                {
                    data.allMdx.edges.map((node, index) => (
                        <BlogListItem
                            index={index}
                            title={node.node.frontmatter.title}
                            top_text={node.node.frontmatter.date}
                            description={(node.node.frontmatter.description.length > 512) ? (
                                node.node.frontmatter.description.substring(0, 512) + "..."
                            ) : (
                                node.node.frontmatter.description
                            )}
                            url={`/blog/${node.node.slug}`}
                            featuredImage={node.node.frontmatter.featuredImage}
                            key={node.node.id}
                        />
                    ))
                }
            </BlogList>
            <Pager pageContext={pageContext} />
        </Layout>
    )
}

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            skip: $skip
            limit: $limit
            filter: {fields: {source: {eq: "blog"}}}
        ) {
            edges {
                node {
                    id
                    slug
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
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

export default BlogPage