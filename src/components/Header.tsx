import Logo from '../assets/img/logo.svg?react'

import '../css/Header.css'

function Header() {
  return (
    <header className='header flex justify-between'>
        <Logo className='h-10' />
        <nav className='nav-links'>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  )
}

export default Header;