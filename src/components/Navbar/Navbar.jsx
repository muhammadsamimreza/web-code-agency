import React from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Link to='/' className="flex gap-2 items-center">
                <img src="./logo.png" alt="" />
                <span className="text-xl font-bold text-[#697077]">WebCode</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>

              <li>
                <details>
                  <summary>Categories</summary>
                  <ul className="p-2">
                    <li>
                      <NavLink>Web Design</NavLink>
                    </li>
                    <li>
                      <NavLink>App Development</NavLink>
                    </li>
                    <li>
                      <NavLink>UI/UX Designer</NavLink>
                    </li>
                    <li>
                      <NavLink>Digital Marketing</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
