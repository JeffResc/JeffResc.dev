const resolve = require('path').resolve;

module.exports = {
    siteMetadata: {
        title: 'Jeff Rescignano',
        siteUrl: 'https://jeffresc.dev/'
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-next-seo',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`, `avif`],
                    placeholder: `blurred`,
                    quality: 90,
                    backgroundColor: `transparent`,
                },
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`
            },
            __key: 'images'
        },
        `gatsby-remark-images`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1080,
                        },
                    },
                    {
                        resolve: `gatsby-remark-table-of-contents`,
                        options: {
                            exclude: "Table of Contents",
                            tight: false,
                            ordered: false,
                            fromHeading: 1,
                            toHeading: 6,
                            className: "table-of-contents"
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            icon: `<svg aria-hidden="true" focusable="false" height="24" version="1.1" viewBox="0 0 24 24" width="24"><path style="fill: white;" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
                            elements: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: true,
                            noInlineHighlight: false,
                            languageExtensions: [{
                                language: "superscript",
                                extend: "javascript",
                                definition: {
                                    superscript_types: /(SuperType)/,
                                },
                                insertBefore: {
                                    function: {
                                        superscript_keywords: /(superif|superelse)/,
                                    },
                                },
                            }, ],
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                    {
                        resolve: `gatsby-remark-classes`,
                        options: {
                            classMap: {
                                "heading[depth=1]": "text-4xl mt-2",
                                "heading[depth=2]": "text-3xl mt-2",
                                "heading[depth=3]": "text-2xl mt-2",
                                "heading[depth=4]": "text-xl mt-2",
                                "heading[depth=5]": "text-lg mt-2",
                                "heading[depth=6]": "text-sm mt-2",
                                "paragraph": "text-base",
                                "link": "text-sky-400 after:content-['_↗']",
                            }
                        }
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
            __key: 'blog'
        },
        {
            resolve: 'gatsby-plugin-matomo',
            options: {
                siteId: 1,
                matomoUrl: 'https://analytics.jeffresc.dev/',
                siteUrl: 'https://jeffresc.dev/',
            }
        },
        {
            resolve: "gatsby-source-apiserver",
            options: {
                typePrefix: "internal__",
                url: `https://api.github.com/users/JeffResc/repos?type=all&per_page=100&sort=updated&direction=desc`,
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "token " + process.env.GITHUB_TOKEN
                },
                name: `repos`,
                allowCache: true,
                maxCacheDurationSeconds: 60 * 60 * 24,
                verboseOutput: false,
            }
        },
        {
            resolve: 'gatsby-plugin-git-clone',
            options: {
                repository: 'https://github.com/JeffResc/OneTracker-API',
                branch: 'docs',
                path: resolve(__dirname, './static/OneTracker-API')
            }
        },
        {
            resolve: 'gatsby-plugin-git-clone',
            options: {
                repository: 'https://github.com/JeffResc/Unmanic-API',
                branch: 'docs',
                path: resolve(__dirname, './static/Unmanic-API')
            }
        },
        {
            resolve: 'gatsby-source-build-date',
            options: {
                // Generate ISO8601 date.
                // See: https://stackoverflow.com/a/58633686/55808
                locales: 'en-US',
                options: {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                    timeZoneName: 'short',
                },
            },
        },
        'gatsby-plugin-meta-redirect'
    ]
};