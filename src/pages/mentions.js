import * as React from "react"

import { Helmet } from "react-helmet"

import Layout from "../templates/Layout"
import TinyHero from "../components/TinyHero"

export default function MediaMentions({ data }) {
  return (
    <Layout pageTitle="Media Mentions" pageDescription="Notable mentions in the media.">
      <Helmet>
        <link rel="canonical" href="https://jeffresc.dev/mentions/" />
      </Helmet>
      <TinyHero title="Media Mentions" />
      <ul>
        <li><a href="https://www.idownloadblog.com/2019/03/20/meteoroid/" class="text-sky-400 after:content-['_↗']">iDownloadBlog: <i>Meteoroid automatically sets your wallpaper from various NASA image sources</i> by Anthony Bouchard (March 19, 2019)</a></li>
        <li><a href="https://www.idownloadblog.com/2020/05/27/songshare/" class="text-sky-400 after:content-['_↗']">iDownloadBlog: <i>SongShare generates multi-platform links for music sharing</i> by Anthony Bouchard (May 26, 2020)</a></li>
      </ul>
    </Layout>
  )
}
