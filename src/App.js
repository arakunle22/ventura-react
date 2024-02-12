import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Apps from "./components/Apps";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
        <Routes>
          <Route path="/product" component={Product} />
          <Route path="/apps" component={Apps} />
          <Route path="/blog" component={Blog} />
          <Route path="/pricing" component={Pricing} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
