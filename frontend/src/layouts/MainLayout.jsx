/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              DevPOS
            </Link>
          </div>
        </nav>{" "}
      </header>
      <main>
        <div className="container mt-3">{children}</div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default MainLayout;
