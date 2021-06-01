import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
function App (){
return(
    <div>
    <Jumbotron></Jumbotron>
    <Footer></Footer>
    </div>
);
}

export default App;