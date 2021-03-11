import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (

    // ROUTING
    
    <div className="App">
      <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about/:id">
          <LeagueDetail></LeagueDetail>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
