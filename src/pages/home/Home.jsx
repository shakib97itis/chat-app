import React from "react";
import { auth } from "../../firebase";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>Welcome to Chat App</h1>
        <p>
          {auth.currentUser
            ? `Welcome ${auth.currentUser.email}`
            : "You are not logged in"}{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
