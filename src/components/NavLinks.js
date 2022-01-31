import React from "react";
import { Link } from "gatsby";

const NavLinks = () => {

  return (
    <>
      <li>
        <Link to="/" activeClassName="active">
          utama
        </Link>
      </li>
      <li>
        <Link 
          to="/blog/" 
          activeClassName="active"
          partiallyActive={true}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link to="/plans/" activeClassName="active">
          Perancangan
        </Link>
      </li>
      <li>
        <Link to="/about/" activeClassName="active">
          Info
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
