import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import homeImage from "../assets/home-image.jpg";
import Complexsearch from "../components/Complexsearch";

const Homepage = () => {
  return (
    <HomeContainer>
      <Navbar />
      <div className="content">
        <h1>Search for any recipe of your choice!</h1>
        <Complexsearch />
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background-image: url(${homeImage});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding: 20px;
  overflow: auto;

  a {
    text-decoration: none;
    color: #fff;
  }

  .content {
    font-weight: bold;
    padding: 0 40px;

    margin: 50px auto 0;

    @media (max-width: 768px) {
      .content {
        width: 90%;
      }
    }
  }
`;

export default Homepage;
