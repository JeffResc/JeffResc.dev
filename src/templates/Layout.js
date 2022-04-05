import React from "react";

import { Helmet } from "react-helmet"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
    return (
        <div className="relative bg-gradient-to-r from-stone-900 to-slate-800 min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href={'/img/Profile.jpg'} type="image/png" />
                <script src={'/js/custom.js'}></script>
            </Helmet>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}                
                bodyAttributes={{
                    class: 'scrollbar-thin scrollbar-thumb-white h-32 overflow-y-scroll'
                }}
            />
            <GatsbySeo
                title={props.pageTitle + " | JeffResc"}
                description={props.pageDescription}
                openGraph={{
                    title: props.pageTitle + " | JeffResc",
                    description: props.description,
                    images: [
                        {
                            url: 'https://jeffresc.dev/img/Banner.png',
                            alt: 'Banner',
                        },
                    ],
                    site_name: 'JeffResc',
                }}
                twitter={{
                    handle: '@JeffRescignano',
                    site: '@JeffRescignano',
                    cardType: 'summary_large_image',
                }}
            />
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
