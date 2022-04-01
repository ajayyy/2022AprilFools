import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <Seo
                title="Home"
                overwriteTitle="SponsorLock - Give back control"
            />

            <div className="title">
                <img src="/LogoSponsorBlocker1024px.png" alt="Logo" />

                <span style={{ color: "white" }}>Sponsor<b>L</b>ock</span>
            </div>

            <div className="container">
                <div className="">
                    <p>
                        After feedback <strike>($)</strike> from "users", I have
                        realized the truth of how dangerous the
                        theft of skipping advertisements truly can be.
                    </p>

                    <p>
                        Sponsor<b>Lock</b> is a browser extension that
                        gives them back your control, and makes sure that you
                        only watch what the original uploader wanted you
                        to watch.
                    </p>

                    <div className="text-center">
                        <h4 style={{margin: "0"}}>Yes, this is real</h4>

                        <a href={"https://chrome.google.com/webstore/detail/sponsorlock-give-back-con/kadbogcelhmohajhlgbpmckpaapfnlkp"}>
                            <img
                                src="/ChromeWebStore_BadgeWBorder_v2_206x58.png"
                                alt="Download for Chrome"
                            />
                        </a>

                        <a href="/sponsorlock_give_back_control-4.2.4-an+fx.xpi">
                            <img
                                src="/AMO-button_1.png"
                                alt="Download for Firefox"
                            />
                        </a>
                    </div>

                    <img src="youwouldntlookawayfromadvertising.png">
                    </img>

                    <p>
                        This is about more than watching advertisments though.
                        If you watch an advertisement, but don't <em>follow 
                        through</em> with the action they requested from you, then you are
                        literally stealing money from the advertiser's pockets.
                        They pay to see results, not for you to mentally tune
                        it out.
                    </p>

                    <img src="RTX76K2K.webp">
                    </img>

                    <p>
                        SponsorLock will monitor your activity for the next 14 days, 
                        and if you don't complete the action requested by the ad, 
                        such as buying a product or service, we will continually 
                        show you the same ad until you do. There is no reason not 
                        to comply.
                    </p>

                    <p>
                        While complying once might seem fine, that still is not
                        what advertisers truly are paying for, they want true brand awareness.
                        Our patented technology can read your brain waves and determine
                        if you are grasping the concepts, or missing their point.
                        If repeated advertisements don't work, it will then
                        keep playing permutations generated by an our AI until an advertisement
                        is found that truly changes how you think
                    </p>

                    <img src="104Reload12_-_Architect.jpg">
                    </img>

                    <p>
                        You might be saying, "hey, what if I don't want this tracking?".
                        Well, you already agreed to this you know? It's an implicit
                        contract. By watching the video, you agreed to watch the ad.
                        And by watching the ad, you agreed to follow through with 
                        what was asked. If you truly didn't want to follow through with
                        that action, why would you have clicked on that video in the
                        first place? The people have mouths to feed remember, don't expect
                        to watch these videos for free without some sacrifices.
                    </p>

                    <p className="text-center">
                        <a href="https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796">
                            Privacy Policy (Human Readable)
                        </a>
                        {", "}
                        <a href="https://gist.github.com/ajayyy/9e8100f069348e0bc062641f34d6af12">
                            Terms of Use
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
