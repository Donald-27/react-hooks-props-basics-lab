import React from "react";
import Links from "./Links"; // Importing the Links component

function About({ bio, links }) {
  return (
    <div>
      {bio && <p>{bio}</p>} {/* Conditionally render the bio */}
      {/* Pass the links prop to Links component */}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
