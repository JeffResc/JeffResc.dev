import React from "react";

import { Helmet } from "react-helmet"

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
    return (
        <div className="relative bg-gradient-to-r from-stone-900 to-slate-800">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.pageTitle + " | JeffResc"}</title>
                <meta name="description" content={props.pageTitle + " | JeffResc"} />
                <meta property="og:title" content={props.pageTitle + " | JeffResc"} />
                <meta property="og:image" content={'/img/Banner.png'} />
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
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
