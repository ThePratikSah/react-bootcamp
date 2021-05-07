import { useEffect } from "react";
import IndiPersonComp from "./IndiPersonComp";

const App = () => {
  useEffect(async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    console.log(data);
  });

  return (
    <div>
      <IndiPersonComp
        email="pratiksah@hotmail.com"
        image="https://reqres.in/img/faces/9-image.jpg"
        name="Pratik"
      />
    </div>
  );
};

export default App;
