function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl w-full mx-auto flex justify-around items-end">
        <nav aria-label="Footer navigation" className="flex flex-col">
          <h2>Contact me</h2>
          <a href="mailto:#">Email</a>
          <a href="#">Linkedin</a>
          <a href="#">GitHub</a>
        </nav>
        <p>© 2025 Jonas Stiefer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
