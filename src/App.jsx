import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./Components/Card";
import NavBar from "./Container/Nav/Nav";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [abvCheckBox, setAbvCheckBox] = useState(false);
  const [classicRangeCheckBox, setClassicRangeCheckBox] = useState(false);
  const [phCheckBox, setPhCheckBox] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // only runs once
    console.log("useEffect ran");
    getBeer();
  }, []);

  const getBeer = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?per_page=80"
    );
    const data = await response.json();

    setBeers(data);
    console.log(beers);
  };

  const getSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const getAbvCheckedBox = (event) => {
    setAbvCheckBox(event.target.checked);
    console.log(abvCheckBox);
  };

  const getClassicRangeCheckedBox = (event) => {
    setClassicRangeCheckBox(event.target.checked);
    console.log(classicRangeCheckBox);
  };

  const getPhCheckedBox = (event) => {
    setPhCheckBox(event.target.checked);
    console.log(phCheckBox);
  };

  const filterBeers = () => {
    let filteredArray = beers.filter((beer) => {
      if (beer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return beer;
      }
    });

    filteredArray = filteredArray.filter((beer) => {
      if (abvCheckBox == false || (abvCheckBox == true && beer.abv > 6.0)) {
        return beer;
      }
    });

    filteredArray = filteredArray.filter((beer) => {
      let slicedDate = beer.first_brewed.slice(3);
      let yearInt = parseInt(slicedDate);
      if (
        classicRangeCheckBox == false ||
        (classicRangeCheckBox == true && yearInt < 2010)
      ) {
        return beer;
      }
    });

    filteredArray = filteredArray.filter((beer) => {
      if (phCheckBox == false || (phCheckBox == true && beer.ph < 4.0)) {
        return beer;
      }
    });

    return filteredArray;
  };

  const getSearchBarValue = () => {
    console.log(document.getElementById("searchBar").value);
  };
  const beersCardJSX = filterBeers().map((indiBeer) => {
    return (
      <Card
        key={indiBeer.name}
        name={indiBeer.name}
        image={indiBeer.image_url}
        abv={indiBeer.abv}
        first_brewed={indiBeer.first_brewed}
        ph={indiBeer.ph}
      />
    );
  });

  //getSearchBarValue();
  return (
    <div className="page-container">
      <div className="navBar-container">
        <NavBar
          getSearchTerm={getSearchTerm}
          getAbvCheckedBox={getAbvCheckedBox}
          getClassicRangeCheckedBox={getClassicRangeCheckedBox}
          getPhCheckedBox={getPhCheckedBox}
        />
      </div>
      <div className="beer-container">{beersCardJSX}</div>
    </div>
  );
};

export default App;
