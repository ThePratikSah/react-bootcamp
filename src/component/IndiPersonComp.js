import React from "react";

function IndiPersonComp(props) {
  return (
    <div>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
}

export default IndiPersonComp;
