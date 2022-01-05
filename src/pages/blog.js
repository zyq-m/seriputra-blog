import React from "react";

import NavBlog from "../components/NavBlog";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Blog = () => {
  return (
    <Layout>
      <Seo title="Blog" description="This is main blog page" />
      <div className="blog-container">
        <div className="blog-box">
          <article className="blog">
            <h1 className="blog__title">Mukaddimah</h1>
            <div>
              <p>
                Alhamdulillah syukur kepada Allah SWT kerana projek e-SULAM kami
                telah berjaya dilaksanakan dengan jaya. Setinggi-tinggi
                penghargaan diberikan kepada Prof. Madya Dr. Abdullah Ibrahim
                kerana telah memberi bimbingan dalam menyiapkan projek ini.
                Beliau merupakan pensyarah di UniSZA yang mengajar kami dalam
                kursus Penghayatan Etika dan Peradaban (MPU 31072).
              </p>
            </div>
          </article>
          <NavBlog />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
