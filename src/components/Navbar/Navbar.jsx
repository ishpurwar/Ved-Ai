import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
            >
              <img src={logo} className="w-20" alt="" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu color="#fff" fontSize={27} /> {/* Fix the property name */}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto bg-[#0C7075] text-white w-80 justify-around rounded-3xl">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug transition ease-in-out duration-300  hover:scale-110"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug transition ease-in-out duration-300  hover:scale-110"
                >
                  <span className="ml-2">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug transition ease-in-out duration-300  hover:scale-110  "
                >
                  <span className="ml-2">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
