import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bgImage from "../assets/bg-image.jpg";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Login failed");
      })
      .then(() => {
        setUsername("");
        setPassword("");
        navigate("/home");
      })
      .catch((err) => {
        console.error("Login failed");
      });
  };

  const closeModal = () => navigate("/");

  return (
    <StyledContainer>
      <div className="container">
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-image: url(${bgImage});
  opacity: 0.8;
  color: #eee;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding: 20px;

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #111;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
  }

  .modal-content h2 {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  .modal-content form label {
    display: block;
    margin-bottom: 10px;
  }

  .modal-content form input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 20px;
    border: 1px solid #222;
    border-radius: 4px;
    background-color: #444;
    transition: 0.3s;

    &:hover {
      border: 1px solid #fff;
    }
  }

  .modal-content form button {
    width: 100%;
    padding: 10px;
    background-color: #1e3abf;
    color: #eee;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      border: 1px solid #fff;
    }
  }
`;

export default Loginpage;
