export default function Footer() {
  return (
    <footer className="text-center p-5 bg-[#f8f8f8] w-full font-['Open_Sans']">
      <div className="footer-links">
        <a
          href="/"
          className="text-gray-600 text-sm mx-4 hover:underline block sm:inline"
        >
          Home
        </a>
        <a
          href="/about-us"
          className="text-gray-600 text-sm mx-4 hover:underline block sm:inline"
        >
          About Rotary
        </a>
        <a
          href="/get-involved"
          className="text-gray-600 text-sm mx-4 hover:underline block sm:inline"
        >
          Get Involved
        </a>
        <a
          href="/events"
          className="text-gray-600 text-sm mx-4 hover:underline block sm:inline"
        >
          Events
        </a>
        <a
          href="/gallery"
          className="text-gray-600 text-sm mx-4 hover:underline block sm:inline"
        >
          Gallery
        </a>
      </div>
      <div className="footer-links mt-4">
        <a href="#" className="text-gray-600 font-bold text-sm hover:underline">
          Contact Us
        </a>
      </div>
      <div className="social-icons mt-4 flex justify-center gap-6 text-xl text-gray-600">
        <a
          href="https://www.facebook.com/rcp.professionals/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook hover:text-black"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCZcGYtZ_y4KGhYyNhOJADhw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-youtube hover:text-black"></i>
        </a>
        <a
          href="https://www.instagram.com/rcp.professionals/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram hover:text-black"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/rcpprofessionals/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin hover:text-black"></i>
        </a>
      </div>
      <div className="copyright text-gray-600 text-xs mt-4">
        © 2025 Rotary Club of Pune Professionals. All rights reserved.{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
      </div>
    </footer>
  );
}
