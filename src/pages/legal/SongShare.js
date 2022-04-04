import * as React from "react"

import Layout from "../../templates/Layout"
import TinyHero from "../../components/TinyHero"

export default function legal_songshare() {
    return (
        <Layout pageTitle="SongShare Legal">
            <div className="text-white">
                <TinyHero title="SongShare Legal Notice" />
                <p className="text-xl">Software Notice</p>
                <p>By installing and enabling SongShare, you agree that any text copied on your device that matches one of the following regex statements may be sent out to third party processing software such as SongLink or SongWhip:</p>
                <ul>
                    <li>(https?://)?(music\\.|www\\.)?amazon.(com\\.br|ca|com\\.mx|com|cn|in|co\\.jp|sg|com\\.tr|ae|fr|de|it|nl|es|co\\.uk|com\\.au)/.+</li>
                    <li>((https?://)?music.apple.com/[a-zA-Z]&#123;2&#125;/(track|album|artist)/[a-zA-Z0-9-_]+/[0-9]+(/?)</li>
                    <li>(https?://)?itunes.apple.com/[a-zA-Z]&#123;2&#125;/(track|album|artist)/[a-zA-Z0-9-_]+/(id)?[0-9]+(/?)</li>
                    <li>(https?://)?(www\\.)?deezer.com/(track|album|artist)/[0-9]+(/?)</li>
                    <li>(https?://)?play.google.com(/?)(store)?/music/[a-zA-Z0-9-_]+(/?)</li>
                    <li>(https?://)?([a-zA-Z]&#123;2&#125;\\.|www\\.)?napster.com/artist/[a-zA-Z0-9-_]+/.+</li>
                    <li>(https?://)?(www\\.|m\\.)?soundcloud.com/[a-zA-Z0-9-_]+(/?)</li>
                    <li>(https?://)?(www\\.)?spinrilla.com/(songs|mixtapes)/[a-zA-Z0-9-_]+(/?</li>
                    <li>(https?://(open|play).spotify.com/(track|artist|album)/[a-zA-Z0-9]+(/playlist/[a-zA-Z0-9]+|)|spotify:(track|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))</li>
                    <li>(https?://)?listen.tidal.com/(track|album|artist)/[0-9]+(/?)</li>
                    <li>(https?://)?music.yandex.(com|ru)/(track|album|artist)/[0-9]+(/?)(track|album|artist)?([0-9]+?)(/?)</li>
                    <li>(https?://)?(www\\.|m\\.|music\\.)?youtu(be\\.com|\\.be)(\\/watch\\?([&=a-z]&#123;0,&#125;)(v=[\\d\\w]&#123;1,&#125;).+|\\/[\\d\\w]&#123;1,&#125;)</li>
                </ul>
                <p>In addition to the URL, the user's country code will be sent to the third party services as the country code is required by their API. Users that do not wish to disclose this information should remove the software from their device immediately.</p>
                <p className="text-xl">Additional Policies</p>
                <ul>
                    <li><a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1kv_l1JI0ea2LsESUI2bHwvsy6-szsAbD/view">SongLink (Odelsi) Terms of Service</a></li>
                    <li><a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1RK3f9Cq8r5825lsbi4xPqp4VcAygb8k_/view">SongLink (Odelsi) Privacy Policy</a></li>
                    <li><a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UUwxkcJvmEFaDxxLL5XU0bg4hAN83WpX/view">SongLink (Odelsi) API Terms of Service</a></li>
                    <li><a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://songwhip.com/privacy">SongWhip Privacy Policy</a></li>
                </ul>
                <p className="text-xl">Images and Branding</p>
                <p>The SongShare music note icon image was made by <a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel Perfect">Pixel Perfect</a> from <a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.</p>
                <p>The iPhone mockup shown in the banner images was created by <a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://www.ls.graphics/free/free-iphone-xr-mockup-2">LS Graphics</a>.</p>
                <p>Aditionally, the various images used in the banner are screenshots from <a className="text-sky-400 after:content-['_↗']" target="_blank" rel="noreferrer" href="https://song.link">Song.link</a>. These images contain graphics and text from the following songs by the following artists:</p>
                <ul>
                    <li>Toosie Slide by Drake</li>
                    <li>Savage by Megan Thee Stallion</li>
                    <li>death bed (coffee for your head) by Powfu, beabadoobee</li>
                    <li>Blinding Lights by The Weeknd</li>
                    <li>Roses - Imanbek Remix by SAINt JHN, Imanbek</li>
                    <li>Say So by Doja Cat</li>
                    <li>Blueberry Faygo by Lil Mosey</li>
                    <li>The Box by Roddy Ricch</li>
                </ul>
                <p className="text-xl">Software License</p>
                <p>Copyright 2020 Jeff Rescignano<br /><br />Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br /><br />The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br /><br />THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
            </div>
        </Layout>
    )
}
