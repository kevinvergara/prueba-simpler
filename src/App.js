import React, { Component } from "react";
import "./index.css";
import ProductosContainer from '../src/screens/container/ProductosContainer';
import ProductoContainer from '../src/screens/container/ProductoContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/producto/:id"
                  component={ProductoContainer}
            >
            </Route>
            <Route path="/">
              <ProductosContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
