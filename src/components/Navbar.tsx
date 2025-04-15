import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  BriefcaseBusiness,
  LogIn,
  UserPlus,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-jobconnect-navy text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BriefcaseBusiness size={28} className="text-jobconnect-teal" />
          <span className="font-bold text-xl">JobConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/jobs"
            className="hover:text-jobconnect-teal transition-colors"
          >
            Browse Jobs
          </Link>
          <Link
            to="/companies"
            className="hover:text-jobconnect-teal transition-colors"
          >
            Companies
          </Link>
          <Link
            to="/about"
            className="hover:text-jobconnect-teal transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-jobconnect-teal transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button
              variant="outline"
              className="bg-blue-600 text-white border-blue-600 hover:bg-white hover:text-blue-600 hover:border-white transition-colors duration-300"
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>

          <Link to="/register">
            <Button className="bg-jobconnect-orange text-white border border-jobconnect-orange hover:bg-white hover:text-jobconnect-orange transition-colors duration-300">
              <UserPlus className="mr-2 h-4 w-4" /> Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-jobconnect-navy px-6 py-4 mt-2 space-y-4 border-t border-jobconnect-teal">
          <Link
            to="/jobs"
            className="block py-2 hover:text-jobconnect-teal transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Jobs
          </Link>
          <Link
            to="/companies"
            className="block py-2 hover:text-jobconnect-teal transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Companies
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-jobconnect-teal transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-jobconnect-teal transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col space-y-2 pt-2 border-t border-jobconnect-teal/30">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full text-white border-white hover:bg-white hover:text-jobconnect-navy"
              >
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-jobconnect-orange hover:bg-opacity-90">
                <UserPlus className="mr-2 h-4 w-4" /> Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
