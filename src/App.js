import "./App.css";
import React, { useState} from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

const App = () => {
  const [color, setColor] = useState("red")
  const [link, setLinkText] = useState("")

  return(
    <Router>
    <>
    <Header bg={color} setText={(text) => setLinkText(text)}/>

    {link && <h1> {link} clicked</h1>}
    </>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/product" component={Product} />
      <Route path="/cart" component={Cart} />
      
    </Switch>
    </Router>
  );
};
export default App;