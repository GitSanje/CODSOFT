import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classNames from 'classnames';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash );
  const { hash } = useLocation();

  console.log(hash);

  let Links = [
    { name: "HOME", link: "#home" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Education", link: "#resume" },
    { name: "ABOUT", link: "#about" },
    { name: "CONTACT", link: "#contact" },
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
    // window.addEventListener('hashchange', () => setActiveHash(window.location.hash ));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      //window.removeEventListener('hashchange', () => setActiveHash(window.location.hash ));
    };
  }, []);

  useEffect(() => {
    const options = {
      // root :null,
      // rootMargin:"0px",
      threshold: 0.1,
    };
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);

        window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // const observer = new IntersectionObserver(callbackFunction, options)
  //   observer.observe(elementToObserve)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
     <nav
      className={classNames(
        'md:p-5 top-0 fixed w-full transition duration-300 z-50 ',
        {
          'bg-white md:bg-white md:text-gray-600': scrolled,
          'bg-white md:bg-transparent': !scrolled
        }
      )}
    >

        <div className="md:hidden px-7  p-4 text-gray-500">
          <button onClick={toggleMenu} className="focus:outline-none ">
            {menuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        <ul
          className={`md:flex md:items-center justify-center text-lg uppercase px-7 ${
            menuOpen ? "block" : "hidden"
          }    md:z-auto z-[-1]`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className={`text-lg  md:ml-8 md:my-0 my-7  ${
                scrolled ? "md:text-gray-600" : "md:text-white"
              } `}
            >
              <HashLink
                to={link.link}
                smooth
                className={`transition-colors duration-300 ${
                  activeHash === link.link ? "text-lime-500" : ""
                } hover:text-lime-500 cursor-pointer`}
              >
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
