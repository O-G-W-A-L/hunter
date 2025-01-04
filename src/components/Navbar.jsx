import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-twitter-blue p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Ogwal&apos;s Portfolio</Link>
        <div>
          <a href="#about" className="text-white mx-4 hover:text-gray-200">About</a>
          <a href="#projects" className="text-white mx-4 hover:text-gray-200">Projects</a>
          <a href="#contact" className="text-white mx-4 hover:text-gray-200">Contact</a>
          <a href="#resume" className="ml-4 text-white border border-white px-4 py-2 rounded-full hover:bg-teal-500">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
