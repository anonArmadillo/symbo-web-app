import React, { Component } from 'react';
import './App.css';
import Browse from './components/Browse'
import Compare from './components/Compare'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*  <Nav>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Another Link</NavLink>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav> */}
          {/* <Nav tabs>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#" to="/">Browse</NavLink>
            <NavLink href="#" to="/compare">Compare</NavLink>
            <NavLink href="#" to="/productDetails">Product Details</NavLink>
          </Nav> */}
          {/* <ul>
            <li>
              <Link to="/">Browse</Link>
            </li>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
            <li>
              <Link to="/productDetails">Product Details</Link>
            </li>
          </ul> */}
          <Switch>
            <Route exact path="/" component={Browse} />
            <Route path="/compare" component={Compare} />
            <Route path="/productDetails" component={ProductDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
