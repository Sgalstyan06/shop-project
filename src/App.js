import logo from "./logo.svg";
import "./App.css";
import { Menu, Segment } from "semantic-ui-react";
import Header from "./component/header/Header";

import Home from "./component/home/Home";

import Footer from "./component/footer/Footer";
import Slides from "./component/slide/Slider";

function App() {
  
  return (
    <div className="App">
      <div>       
        <Header/>
        <Slides/>
        <Home/>
        <Footer/>
        
      </div>
    </div>
  );
}

export default App;
