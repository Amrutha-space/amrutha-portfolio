export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-[#0f1117]/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-white">AMRUTHA's PORTFOLIO </h1>
          <ul className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#resume" className="hover:text-white">Resume</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  