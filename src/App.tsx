import React, { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Books from './components/book';
import Characters from './components/characters';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav">
          <h1>Ice and Fire</h1>
          <div className="nav-right">
            <li className="nav-item">
              <Link to="/" className="link">Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/characters" className="link">Characters</Link>
            </li>
          </div>
        </nav>
        <div className="route">
          <Switch>
            <Route exact path="/" component={Books}/>
            <Route exact path="/characters" component={Characters}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
