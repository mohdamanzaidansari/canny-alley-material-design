import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="wapper">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
