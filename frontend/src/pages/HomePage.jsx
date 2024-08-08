import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome!</h1>
        <p>lorem</p>
        <Link to="/pos" className="btn btn-primary">
          Click here!
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
