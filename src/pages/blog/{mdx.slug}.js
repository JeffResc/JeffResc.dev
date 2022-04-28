import * as React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getSrc } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import PostHero from "../../components/PostHero"
import Layout from "../../templates/Layout"

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} pageDescription={data.mdx.frontmatter.description}>
      <Helmet>
        <link rel="canonical" href={"https://jeffresc.dev/blog/" + data.mdx.slug + "/"} />
        <script type='application/ld+json'>
          {`{
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://jeffresc.dev/blog/${data.mdx.slug}/"
            },
            "headline": "${data.mdx.frontmatter.title}",
            "image": [
              "${getSrc(data.mdx.frontmatter.featuredImage)}"
            ],
            "datePublished": "${data.mdx.frontmatter.date}",
            "dateModified": "${data.mdx.frontmatter.modified_date}",
            "author": {
              "@type": "Person",
              "name": "Jeffrey Rescignano",
              "url": "https://jeffresc.dev/"
            }
          }`}
        </script>
      </Helmet>
      <div className="mx-auto max-w-5xl m-4 sm:p-6 md:p-6 lg:p-6 xl:p-6 2xl:p-6 bg-zinc-900 bg-opacity-75 rounded-lg">
        <PostHero
          title={data.mdx.frontmatter.title}
          date={data.mdx.frontmatter.date}
          modified_date={data.mdx.frontmatter.modified_date}
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
        description
        date(formatString: "MMMM D, YYYY")
        modified_date(formatString: "MMMM D, YYYY")
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
      slug
    }
  }
`;

export default BlogPost;
