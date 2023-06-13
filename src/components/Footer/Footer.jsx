import React from "react";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="left__container">Socials</div>
        <div className="right__container">
          <div className="bottom__container">
            <a
              className="link"
              href="https://leetcode.com/oshapandey/"
              target="_blank"
            >
              <SiLeetcode className="icon" />
            </a>
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADO8MAUB_0aaoKXh07cIlQMMw8gpMV1LlwM&keywords=osha%20pandey&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b362c12a-830a-42b2-a629-842a2925621d&sid=iYh"
            >
              <BsLinkedin className="icon" />
            </a>
            <a
              className="link"
              href="https://github.com/OshaPandey"
              target="_blank"
            >
              <AiFillGithub className="icon" />
            </a>
            <a
              className="link"
              href="https://leetcode.com/oshapandey/"
              target="_blank"
            >
              <SiGmail className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
