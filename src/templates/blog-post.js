import React from "react";
import { graphql } from "gatsby";

import NavBlog from "../components/NavBlog";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date },
    },
  },
}) => {
  return (
    <Layout>
      <Seo title={title} description="This is blog post page" />
      <div className="blog-container">
        <div className="blog-box">
          <article className="blog">
            <h1 className="blog__title">{title}</h1>
            <p className="blog__date">{date}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
          <NavBlog />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default BlogPost;
