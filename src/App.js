import './App.css';
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ViewCart from './Components/ViewCart';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/product-list' component={ProductList}></Route>
          <Route exact path='/cart' component={ViewCart}></Route>
          <Route exact path='/checkout' component={Checkout}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
