import { useEffect, useState } from "react";
import IndiPersonComp from "./IndiPersonComp";

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const { data } = await response.json();
      setApiData(data);
    } catch (error) {
      console.log("Some error occured");
    }
  });

  return (
    <div>
      {apiData.map(({ email, avatar, first_name }) => (
        <IndiPersonComp email={email} image={avatar} name={first_name} />
      ))}
    </div>
  );
};

export default App;
