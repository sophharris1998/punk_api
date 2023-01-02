import { useState } from "react";
import "./App.scss";
import Card from "./Components/Card";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    console.log(data);
  };

  getBeer();
  return (
    <div>
      <h1> Punk API </h1>

      <Card />
    </div>
  );
};

export default App;
