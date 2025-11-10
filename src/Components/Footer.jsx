import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">subscribe</h6>
          <a className="link link-hover">your e-mail</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">discover</h6>
          <a className="link link-hover">main</a>
          <a className="link link-hover">new yark</a>
          <a className="link link-hover">chicago</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">faq s</a>
          <a className="link link-hover">terms and condition</a>
        </nav>
        <nav>
          <h6 className="footer-title">about</h6>
          <a className="link link-hover">contact</a>
          <a className="link link-hover">blog</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">contact us </h6>
          <a className="link link-hover">infoojufefn</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
