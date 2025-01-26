import{BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import Home from "./Components/Home";
import CoinDetails from "./Components/CoinDetails";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
