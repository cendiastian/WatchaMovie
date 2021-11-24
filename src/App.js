import "./App.css";
import Nav from "./components/navbar/navbar.jsx";
import Banner from "./components/banner/banner.jsx";
import ListCard from "./components/card/listCard.jsx";
// import Card from "./components/card/card.jsx";
import Footer from "./components/footer/footer.jsx";
import Pricing from "./components/pricing/pricing.jsx";

function App() {


  return (
    <div className="App">
      <Nav />
      <Banner />
      <ListCard/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
