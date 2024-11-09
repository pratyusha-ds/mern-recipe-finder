import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import bgImage from "../assets/bg-image.jpg";
import Cookies from "js-cookie";

const Landingpage = () => {
  const token = Cookies.get("token");
  return (
    <LandingContainer>
      <Navbar />

      <div className="content">
        <h2>Welcome!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Ex, debitis magni quo nisi, aliquam, totam eligendi assumenda dolore.{" "}
          <br /> Ducimus deleniti nobis voluptates ullam ipsa magnam maiores!
        </p>

        {!token && <Link to="/register">Register</Link>}
      </div>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  background-image: url(${bgImage});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding: 20px;

  @media (max-width: 768px) {
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  .content {
    margin-top: 100px;
    padding: 0 40px;
    max-width: 700px;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 0 20px;
    }
  }

  .content h2 {
    font-size: 50px;
    color: #fff;
  }

  .content p {
    margin: 20px 0;
    line-height: 25px;
    color: #ffffff;
  }

  .content a {
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

export default Landingpage;
