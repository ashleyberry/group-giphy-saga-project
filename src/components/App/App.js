import React, { Component } from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        {/* Navigation! */}
        <nav>
          <main>
            <ul>
              <li>
                <Link to='/'>Search</Link>
              </li>
              <li>
                <Link to='/favorites'>Favorites</Link>
              </li>
            </ul>
          </main>
        </nav>
        <div>
          <h1>Giphy Search!</h1>
          <Route path='/' exact>
            <Search />
          </Route>
          <Route path='/favorites' exact>
            <Favorites />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
