import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="created-by">Developed By ❤️ Suyash Awasthi</div>
      <div className="contact">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/suyash__awasthi/"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/suyash0508"
          target="_blank"
        > 
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/suyash-awasthi0508//"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
