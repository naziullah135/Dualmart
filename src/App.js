import './App.css';
import {Provider} from "react-redux";
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;
