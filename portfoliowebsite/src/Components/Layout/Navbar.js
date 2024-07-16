import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Resume", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={` lg:p-5 top-0 fixed w-full transition duration-300 bg-gray-400 text-white ${
          scrolled
            ? "md:bg-gray-400 md:text-white"
            : "md:bg-transparent md:text-black"
        }`}
      >
        <div className="md:hidden px-7 p-5 ">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex md:items-center justify-center text-lg uppercase px-7 ${
            menuOpen ? "block" : "hidden"
          }    md:z-auto z-[-1]`}

        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0   my-7">
              <a href={link.link} className="hover:text-green-300">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

    </>
  );
};

export default Navbar;
