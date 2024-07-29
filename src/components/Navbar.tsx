import { ReactElement } from "react";
import { Link } from ".";
import { links } from "../data";

import "./Navbar.css";

export function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </nav>
  );
}
