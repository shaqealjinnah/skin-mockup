"use client";

import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="navbar">
      <nav className="navbar__container" aria-label="Main Navigation">
        <div
          className="navbar__burger"
          onClick={toggleMenu}
          aria-label="Open Menu"
          role="button"
          tabIndex={0}
        >
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
        </div>
        <ul className="navbar__links" role="menubar">
          <li>
            <Link className="navbar__link" href="/" role="menuitem">
              SHOP
            </Link>
            <Link className="navbar__link" href="/" role="menuitem"></Link>
          </li>
          <li>
            <Link className="navbar__link" href="/" role="menuitem">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="navbar__link" href="/" role="menuitem">
              OUR FARMERS
            </Link>
          </li>
          <li>
            <Link className="navbar__link" href="/" role="menuitem">
              INGREDIENTS
            </Link>
          </li>
        </ul>

        <div className="navbar__logo">
          <Link href="/" aria-label="Home">
            <svg
              className="navbar__logo-image"
              width="113"
              height="32"
              viewBox="0 0 113 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112.378 0.740143V1.69797H111.42C109.374 1.69797 108.416 2.65579 108.416 4.70205V31.2163H107.11L86.0382 5.9211V27.2544C86.0382 29.3007 86.996 30.302 89.0422 30.302H90.7837V31.2163H81.0749V30.302H81.815C83.8178 30.302 84.8191 29.3007 84.8191 27.2544V4.48436L83.6436 3.09116C82.9905 2.30749 82.1198 1.69797 81.4232 1.69797H81.1184V0.740143H90.6967L107.197 20.6367V4.70205C107.197 2.65579 106.196 1.69797 104.193 1.69797H102.365V0.740143H112.378Z"
                fill="white"
              />
              <path
                d="M77.7891 0.740143V1.69797H77.049C75.0463 1.69797 74.0449 2.65579 74.0449 4.70205V27.2544C74.0449 29.3007 75.0463 30.302 77.049 30.302H77.7891V31.2163H63.2041V30.302H63.9442C65.9905 30.302 66.9483 29.3007 66.9483 27.2544V4.70205C66.9483 2.65579 65.9905 1.69797 63.9442 1.69797H63.2041V0.740143H77.7891Z"
                fill="white"
              />
              <path
                d="M27.7365 0.740143H42.3215V1.69797H41.5813C39.5786 1.69797 38.5773 2.65579 38.5773 4.70205V16.2395L51.595 3.87484C52.0303 3.483 52.248 3.09116 52.248 2.74286C52.248 2.13334 51.6385 1.69797 50.5501 1.69797H48.8086V0.740143H59.2575V1.69797C57.0807 1.69797 55.0344 2.4381 53.9895 3.39592L45.5433 11.2762L57.4725 27.5157C58.3433 28.6912 59.3882 30.0844 60.3895 30.3891V31.2163H50.7677C49.2875 29.2136 47.5024 26.6884 45.9786 24.468L40.2317 16.2395L38.5773 17.7633V27.2544C38.5773 29.3007 39.5786 30.302 41.5813 30.302H42.7569V31.2163H27.7365V30.302H28.4766C30.5228 30.302 31.4807 29.3007 31.4807 27.2544V4.70205C31.4807 2.65579 30.5228 1.69797 28.4766 1.69797H27.7365V0.740143Z"
                fill="white"
              />
              <path
                d="M20.7449 10.2748C19.4388 4.6585 15.9122 1.30612 11.2537 1.30612C8.24966 1.30612 5.63742 2.69932 5.63742 6.18231C5.63742 10.1878 9.25102 11.2762 11.9068 12.0599L14.998 12.9741C18.2633 13.932 23.6184 15.5429 23.6184 22.2912C23.6184 28.6041 18.9163 32 12.8646 32C8.59796 32 6.81293 30.302 4.11361 30.302C3.50408 30.302 2.89456 30.3891 1.63197 30.6503L0.5 19.9837L1.58844 19.8095C3.41701 26.732 7.55306 30.6939 12.734 30.6939C16.3041 30.6939 18.6986 28.7782 18.6986 25.6C18.6986 21.8558 15.4333 20.7673 13.1694 20.0272L9.42517 18.8082C5.63741 17.5891 0.543537 15.6299 0.543537 9.18639C0.543537 2.52517 5.98571 0 11.0796 0C14.2143 0 15.8687 0.957821 18.2197 0.957821C19.0905 0.957821 19.7435 0.82721 20.7449 0.47891L21.7898 10.1007L20.7449 10.2748Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <ul className="navbar__links">
          <li>
            <Link className="navbar__link" href="/" role="menuitem">
              ACCOUNT
            </Link>
          </li>
          <li>
            <Link className="navbar__link" href="/" role="menuitem">
              CART(0)
            </Link>
          </li>
        </ul>

        <div
          className={`navbar__backdrop ${
            openMenu ? "navbar__backdrop--visible" : ""
          } `}
        >
          <button className="navbar__close" onClick={toggleMenu} aria-label="Close Menu">
            &times;
          </button>
          <ul className="navbar__menu-links" role="menu">
            <li>
              <Link className="navbar__menu-link" href="/" onClick={toggleMenu} role="menuitem">
                SHOP
              </Link>
            </li>
            <li>
              <Link className="navbar__menu-link" href="/" onClick={toggleMenu} role="menuitem">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="navbar__menu-link" href="/" onClick={toggleMenu} role="menuitem">
                OUR FARMERS
              </Link>
            </li>
            <li>
              <Link className="navbar__menu-link" href="/" onClick={toggleMenu} role="menuitem">
                INGREDIENTS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
