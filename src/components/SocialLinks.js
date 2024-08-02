import React from "react";
import { socialLinks } from "../Data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <SocialLink
            key={link.id}
            {...link}
            itemClass="nav-icon"
          />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
