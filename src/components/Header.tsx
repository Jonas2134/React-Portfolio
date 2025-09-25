import Logo from "../assets/img/logo.svg?react";
import DarkModeSwitch from "../shared/DarkModeSwitch";

import "../css/Header.css";

function Header() {
  return (
    <header className="header-shadow fixed w-full flex justify-around items-center px-10 py-6 z-10">
      <Logo className="h-15" />
      <nav className="flex gap-6">
        <a className="hover:border-b-1 transition-all" href="#about">About</a>
        <a className="hover:border-b-1 transition-all" href="#skills">Skills</a>
        <a className="hover:border-b-1 transition-all" href="#projects">Projects</a>
        <a className="hover:border-b-1 transition-all" href="#contact">Contact</a>
      </nav>
      <DarkModeSwitch />
    </header>
  );
}

export default Header;
