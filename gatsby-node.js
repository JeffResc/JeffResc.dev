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

    /* REDIRECTS */
    const { createRedirect } = actions
    /* LEGACY BLOG URLS */
    createRedirect({ fromPath: '/blog/2020-10-10', toPath: '/blog/sonoff-d1-dimmer-running-esphome', isPermanent: true });
}
