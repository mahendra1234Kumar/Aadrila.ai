
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Images/Group 46.png';
function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path;
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ];
  return (
    <header className="bg-gray-50 relative z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="AADRILA Technologies" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">AADRILA</span>
              <span className="text-sm font-medium text-gray-900">
                TECHNOLOGIES
              </span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium ${isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/demo"
            className="hidden lg:inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
          >
            Get a Demo
          </Link>

          {/* Hamburger (Mobile + iPad) */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
          </button>
        </div>

        {/* Mobile / iPad Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block font-medium ${isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-700'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/demo"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-blue-600 text-white py-2 rounded-full font-medium"
            >
              Get a Demo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Header;
