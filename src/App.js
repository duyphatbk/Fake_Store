import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductListing from './containers/ProducListing';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />  
          <Route path="/product/:productId" exact Component={ProductDetail} />  
          <Route>404 Not Found!</Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
