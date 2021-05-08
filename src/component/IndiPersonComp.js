import React from "react";
import "./../styles/App.css";

function IndiPersonComp({ name, email, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p className="para">{email}</p>
    </div>
  );
}

export default IndiPersonComp;
