
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductInfo from './Components/ProductInfo'
import ProductDetails from './Components/ProductDetails'
import NavBar from './Components/NavigationsBar'

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ProductInfo} />
            <Route path="/ProductDetails" component={ProductDetails} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
