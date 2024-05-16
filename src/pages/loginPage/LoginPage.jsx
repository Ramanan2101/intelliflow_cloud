import React, { useState } from "react";
import "./LoginPage.css";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import logo from "../../assets/logo.png";
import questionMark from "./assets/question.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    const descriptionRegex = /^[a-zA-Z0-9\s]+$/;
    if (!name.match(nameRegex) || !description.match(descriptionRegex)) {
      toast.error("Error creating project. Please provide valid inputs", {
        position: "bottom-right",
        autoClose: "2000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    setTimeout(() => {
      toast.success("Project created successfully.", {
        position: "bottom-right",
        autoClose: "2000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }, 1000);
  };

  return (
    <>
      <div className="loginPage-container">
        <div className="loginPage-sidemenu">
          <div className="loginPage-sidemenu-logo">
            {/* <img src={logo} alt="" className="loginPage-sidemenu-logo-img" /> */}
          </div>
          <div className="loginPage-sidemenu-helpandProfile">
            <img
              src={questionMark}
              alt="questionMark"
              className="loginPage-sidemenu-helpimg"
            />
            <div className="loginPage-sidemenu-profile"></div>
          </div>
        </div>
        <div className="loginPage-contents">
          <div className="loginPage-card">
            <form className="custom-form" onSubmit={handleCreate}>
              <div className="form-texts">
                <h1 className="form-texts-heading">
                  Welcome to Intelli Flow Cloud
                </h1>
                <p className="form-texts-para">
                  Start by naming your project - each account may contain
                  multiple projects. You can use projects to organize your Tasks
                  and Workflows.
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button type="submit" className="create-button">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;