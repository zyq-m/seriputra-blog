module.exports = {
  siteMetadata: {
    siteUrl: "https://seriputra.netlify.app",
    title: "Seri Putra",
    description:
      "Laman web ini kami bangunkan bertujuan untuk memaparkan perjalanan projek e-SULAM yang telah dijalankan bagi subjek Penghayatan Etika dan Peradaban (MPU 31072). Setinggi-tinggi penghargaan diucapkan untuk pensyarah kami iaitu Prof. Dr. Abdullah Ibrahim yang telah membimbing kami dalam menyiapkan projek e-SULAM ini.",
    image: "/img-site.png",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
  ],
};
