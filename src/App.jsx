import "./App.scss";

const App = () => {
  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    console.log(data);
  };

  getBeer();
  return (
    <div>
      <h1> Punk API </h1>
    </div>
  );
};

export default App;
