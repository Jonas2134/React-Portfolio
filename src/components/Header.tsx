import Logo from "../assets/img/logo.svg?react";
import DarkModeSwitch from "../shared/DarkModeSwitch";

import "../css/Header.css";

function Header() {
  return (
    <header className="header flex justify-around items-center">
      <Logo className="h-10" />
      <nav className="flex gap-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <DarkModeSwitch />
    </header>
  );
}

export default Header;
