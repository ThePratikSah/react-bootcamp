import { useEffect } from "react";
import IndiPersonComp from "./IndiPersonComp";

const App = () => {
  useEffect(async () => {
    const data = await fetch("https://reqres.in/api/users");
    const jsonData = await data.json();
    console.log(jsonData);
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
