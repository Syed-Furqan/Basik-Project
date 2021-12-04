import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import './App.css';
import Country from './Country';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Sidebar/>
            <Main/>
          </Route>
          <Route exact path="/:country">
            <Sidebar/>
            <Country/>
          </Route>
          <Route path="*">
            <h1>Sorry Page not Found.</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;