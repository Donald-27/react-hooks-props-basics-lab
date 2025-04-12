import React from "react";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Assuming the user data is stored in a separate file

function App() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      {/* Add a nav element with some links */}
      <nav>
        <ul>
          <li id="home">Home</li>
          <li id="about">About</li>
        </ul>
      </nav>
      {/* Pass props to Home and About */}
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
