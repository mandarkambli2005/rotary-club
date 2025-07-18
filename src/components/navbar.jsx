import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {showBanner && (
        <div className="bg-[#00A8D6] text-white flex justify-between items-center px-6 py-3 text-sm">
          <p>
            This website uses cookies. By continuing you are agreeing to our{" "}
            <Link to="/privacy-policy" className="font-bold underline">
              privacy policy
            </Link>
            .
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="ml-4 font-bold hover:opacity-80 flex items-center gap-1"
          >
            CLOSE <span className="text-lg">×</span>
          </button>
        </div>
      )}

      <header className="bg-white shadow-md z-50 sticky top-0">
        <nav className="flex justify-between items-center px-4 py-3 border-b">
          <Link to="/" className="flex items-center h-[60px] px-0">
  <img
    src="/images/Rcpp.png"
    alt="Rotary Pune Logo"
    className="h-18 ml-0 object-contain "
  />
</Link>


          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div className="hidden md:flex gap-10 text-sm">
            <a href="#" className="hover:text-blue-600">
              MY ROTARY
            </a>
            <a href="#" className="hover:text-blue-600">
              CLUB FINDER
            </a>
          </div>

          <div className="hidden md:flex gap-2">
            <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">
              JOIN
            </button>
            <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">
              DONATE
            </button>
          </div>
        </nav>

        <div
          className={`${
            menuOpen ? "flex flex-col" : "hidden"
          } md:flex md:flex-row justify-center gap-6 bg-white text-sm py-4 px-4 md:px-0`}
        >
          <Link
            to="/"
            className="relative group text-sm text-gray-800 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/about-us"
            className="relative group text-sm text-gray-800 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            About Rotary
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/get-involved"
            className="relative group text-sm text-gray-800 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Get Involved
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/events"
            className="relative group text-sm text-gray-800 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Our Events
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/gallery"
            className="relative group text-sm text-gray-800 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="flex md:hidden flex-col gap-2 mt-4">
            <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">
              JOIN
            </button>
            <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">
              DONATE
            </button>
            <a href="#" className="hover:text-blue-600 text-sm">
              MY ROTARY
            </a>
            <a href="#" className="hover:text-blue-600 text-sm">
              CLUB FINDER
            </a>
          </div>
        </div>
      </header>
    </>
  );
}