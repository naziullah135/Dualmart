import './App.css';
import {Provider} from "react-redux";
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" exact component={ProductDetails} />
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;
