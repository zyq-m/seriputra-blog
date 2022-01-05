import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <Layout theme={"dark"}>
      <Seo title="Utama" />
      <section className="hero flex flex-fd-c flex-jc-c">
        <div className="hero__img"></div>
        <div className="hero__text">
          <h1>Institusi raja lambang perpaduan</h1>
          <p>
            Kami merupakan pelajar Universiti Sultan Zainal Abidin (UnisZA)
            menjalankan projek e-SULAM bagi subjek Penghayatan Etika dan
            Peradaban.
          </p>
          <Link to="/about" className="cta-btn">
            Ketahui lebih lanjut
          </Link>
        </div>
      </section>
    </Layout>
  );
}
