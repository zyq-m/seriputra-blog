import React from "react";
import { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const NavBlog = () => {
  const [isOpen, setOpen] = useState(false);

  const data = useStaticQuery(graphql`
    {
      allBlog: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___index }
      ) {
        blogPosts: nodes {
          id
          blog: fields {
            path: slug
          }
          content: frontmatter {
            title
          }
        }
      }
    }
  `);
  const {
    allBlog: { blogPosts },
  } = data;

  return (
    <nav className={`navblog ${isOpen ? "open" : "collapse"}`}>
      <ul className="navblog__nav">
        <li>
          <h2 className="navblog__title">Kandungan</h2>
        </li>
        <li className="navblog__link">
          <Link to="/blog/" activeClassName="active">
            Mukaddimah
          </Link>
        </li>
        {blogPosts.map(blogPost => {
          const {
            id,
            blog: { path },
            content: { title },
          } = blogPost;

          return (
            <li key={id} className="navblog__link">
              <Link to={`/blog${path}`} activeClassName="active">
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="navblog__btn" onClick={() => setOpen(!isOpen)}>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBlog;
