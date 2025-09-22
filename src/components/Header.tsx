import '../css/Header.css'

function Header() {
  return (
    <header className='header flex justify-between'>
        <h3>Welcome to My Website</h3>
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