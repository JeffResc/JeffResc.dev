import * as React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PostHero from "../../components/PostHero";
import Layout from "../../templates/Layout";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="mx-auto max-w-5xl m-4 p-16 bg-zinc-900 bg-opacity-75 rounded-lg">
        <PostHero
          title={data.mdx.frontmatter.title}
          subtitle={data.mdx.frontmatter.date}
          featuredImage={data.mdx.frontmatter.featuredImage}
        />
        <div className="text-white">
          <MDXRenderer localImages={data.mdx.frontmatter.embeddedImagesLocal}>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 2160
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
