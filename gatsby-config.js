module.exports = {
    siteMetadata: {
        title: "SponsorLock",
        description:
            "Give back control!",
        author: "Ajay Ramachandran",
        icon: "https://giveup.ajay.app/LogoSponsorBlocker1024px.png",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "SponsorLock",
                short_name: "SponsorLock",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#fff",
                icon: "static/LogoSponsorBlocker1024px.png",
            },
        },
        "gatsby-plugin-sass",
    ],
};
