import '../css/Header.css'

function Header() {
  return (
    <header className='header'>
        <h3>Welcome to My Website</h3>
        <nav className='nav-links'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  )
}

export default Header;