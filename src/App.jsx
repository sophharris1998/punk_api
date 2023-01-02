import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./Components/Card";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeer = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?per_page=80"
    );
    const data = await response.json();

    setBeers(data);
    console.log(beers);
  };

  useEffect(() => {
    // 👇️ only runs once
    console.log("useEffect ran");
    getBeer();
  }, []);

  const beersCardJSX = beers.map((indiBeer) => {
    return (
      <Card
        name={indiBeer.name}
        image={indiBeer.image_url}
        abv={indiBeer.abv}
        first_brewed={indiBeer.first_brewed}
      />
    );
  });
  return (
    <div>
      <h1> Punk API </h1>
      {beersCardJSX}
    </div>
  );
};

export default App;
