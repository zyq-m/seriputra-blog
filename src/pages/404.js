import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title="Error" />
      <main className="error">
        <title>Not found</title>
        <article className="error__wrapper">
          <h1>Pautan tidak ditemui</h1>
          <p>
            Maaf
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>
            carian anda tidak ditemui.
          </p>
          <Link to="/">Klik pautan ini.</Link>
        </article>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
