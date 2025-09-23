import Logo from "../assets/img/logo.svg?react";
import DarkModeSwitch from "../shared/DarkModeSwitch";

import "../css/Header.css";

function Header() {
  return (
    <header className="header-shadow fixed w-full flex justify-around items-center px-10 py-6">
      <Logo className="h-10" />
      <nav className="flex gap-6">
        <a className="hover:border-b-1" style={{ transition: "var(--card-transition)" }} href="#about">About</a>
        <a className="hover:border-b-1" style={{ transition: "var(--card-transition)" }} href="#skills">Skills</a>
        <a className="hover:border-b-1" style={{ transition: "var(--card-transition)" }} href="#projects">Projects</a>
        <a className="hover:border-b-1" style={{ transition: "var(--card-transition)" }} href="#contact">Contact</a>
      </nav>
      <DarkModeSwitch />
    </header>
  );
}

export default Header;
