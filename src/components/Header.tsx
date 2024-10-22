import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Cozy Cat Cottage</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/adopt" className="hover:text-blue-200">Adopt</Link>
          <Link to="/volunteer" className="hover:text-blue-200">Volunteer</Link>
          <Link to="/donate" className="hover:text-blue-200">Donate</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4">
            <Link to="/" className="py-2 hover:text-blue-200">Home</Link>
            <Link to="/about" className="py-2 hover:text-blue-200">About</Link>
            <Link to="/adopt" className="py-2 hover:text-blue-200">Adopt</Link>
            <Link to="/volunteer" className="py-2 hover:text-blue-200">Volunteer</Link>
            <Link to="/donate" className="py-2 hover:text-blue-200">Donate</Link>
            <Link to="/contact" className="py-2 hover:text-blue-200">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;