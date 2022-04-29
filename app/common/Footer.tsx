import { Link } from "@remix-run/react";
import type { FC } from "react";
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import logo from "../images/icon-black.png";
export const Footer: FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-neural text-neutral-content">
      {/* <div className="grid grid-flow-col gap-4">
        <Link to="/contract-rank">Contract rank</Link>
        <Link to="/address-rank">Addrress rank</Link>
        <Link to="/search-rank">Search rank</Link>
      </div> */}
      <div>
        <div className="h-16 w-16">
          <img src={logo} alt="on fire logo" />
        </div>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/dappsDAO">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/onfiredapp">
            <FaTwitter className="w-8 h-8" />
          </a>
          {/* <Link to="/">
            <FaTelegram className="w-8 h-8" />
          </Link> */}
          <a href="https://discord.gg/MCuXjUP3p2">
            <FaDiscord className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};
