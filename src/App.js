import "./App.css";
import Nav from "./components/navbar/navbar.jsx";
import Banner from "./components/banner/banner.jsx";
import ListCard from "./components/card/listCard.jsx";
import Card from "./components/card/card.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <ListCard/>
      <Card/>
    </div>
  );
}

export default App;
