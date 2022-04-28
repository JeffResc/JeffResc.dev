const path = require('path')

const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async({ graphql, actions }) => {
    /* BLOG PAGINATION */
    const { createPage } = actions
    const blogIndex = path.resolve(`./src/templates/blog-index.js`)
    const result = await graphql(
        `
        {
            allMdx(
                sort: {fields: [frontmatter___date], order: DESC}
            ) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }          
        `
    )
    paginate({
        createPage,
        items: result.data.allMdx.edges,
        itemsPerPage: 10,
        pathPrefix: '/blog',
        component: blogIndex
    });
    /* END BLOG PAGINATION */
}