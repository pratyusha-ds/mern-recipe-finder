import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import styled from "styled-components";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = Cookies.get("token");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <div className="logo">
        <Link to="/">MyRecipes</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      {token ? (
        <div className="button">
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div className="button">
          <Link to="/login">Login</Link>
        </div>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  @media (max-width: 700px) {
    .menu-icon {
      display: block;
    }

    ul {
      flex-direction: column;
      position: absolute;
      top: 80px;
      right: 0;
      background-color: rgba(41, 31, 54, 0.9);
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: height 0.3s ease;
      visibility: hidden;
    }

    ul.active {
      visibility: visible;
      height: 420px;
    }

    li {
      margin: 20px 0;
      text-align: center;
    }
  }
  @media (min-width: 700px) {
    .menu-icon {
      visibility: hidden;
    }
  }
  background-color: rgba(41, 31, 54, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0;

  .logo {
    font-size: 40px;

    @media (max-width: 1400px) {
      font-size: 30px;
    }
  }

  ul {
    display: flex;
    gap: 40px;
    list-style: none;
    font-size: 20px;
  }

  ul li a {
    color: #fff;
    transition: 0.3s;

    &:hover {
      color: #d4cfe2;
    }
  }

  .button a {
    font-weight: bold;
    color: #000;
    background: #fff;
    padding: 7px 20px;
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
      color: #fff;
      background: #000;
      border: 3px solid #fff;
    }
  }
`;

export default Navbar;
