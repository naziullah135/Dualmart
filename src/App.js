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
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={ProductDetails} />
      </Switch>
      <Footer />
      </Provider>
    </Router>
  );
}

export default App;
