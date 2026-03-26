import Logo from "../assets/img/logo.svg?react";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <header className="border-b-1 border-(--color-text-rgba) sticky top-0 w-full z-10 backdrop-blur-md">
      <div className="max-w-7xl w-full mx-auto flex justify-around items-center px-10 py-6">
        <Logo className="h-15" role="img" aria-label="Portfolio logo" />
        <nav aria-label="Main navigation" className="flex gap-6">
          <a className="hover:border-b-1 transition-all" href="#about">
            About
          </a>
          <a className="hover:border-b-1 transition-all" href="#skills">
            Skills
          </a>
          <a className="hover:border-b-1 transition-all" href="#projects">
            Projects
          </a>
          <a className="hover:border-b-1 transition-all" href="#contact">
            Contact
          </a>
        </nav>
        <DarkModeSwitch />
      </div>
    </header>
  );
}

export default Header;
