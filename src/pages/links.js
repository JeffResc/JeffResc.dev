import * as React from "react"

import Layout from "../templates/Layout"
import Hero from "../components/Hero"
import LinkURL from "../components/LinkURL"

export default function Links() {
    return (
        <Layout pageTitle="Links">
            <Hero subtitle="false" />
            <div className="container mx-auto items-center max-w-2xl px-8">
                <LinkURL name="Development & Portfolio Website" url="https://jeffresc.dev/" />
                <LinkURL name="Twitter" url="https://twitter.com/JeffRescignano" />
                <LinkURL name="Instagram" url="https://instagram.com/JeffResc" />
                <LinkURL name="Photography Instagram" url="https://instagram.com/jeff.cant.photo" />
                <LinkURL name="Snapchat" url="https://snapchat.com/add/JeffResc" />
                <LinkURL name="Facebook" url="https://www.facebook.com/jeffrey.rescignano.1" />
            </div>
        </Layout>
    )
}
