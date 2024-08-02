import React from "react";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer class="section footer">
      <PageLinks
        parentClass="footer-links"
        itemClass="footer-link"
      />
      <SocialLinks
        parentClass="footer-icons"
        itemClass="footer-icon"
      />
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
c;
