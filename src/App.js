import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
//import an object of "settngs"

import './App.css'; //generic import
import Article from "./containers/Article";
import ArticleListing from "./containers/ArticleListing";



function App() {
  return (
      <Router>
        <Switch>
      
          <Route path = "/article/:id">
            <Article />
          </Route>

          <Route path = "/">
            <ArticleListing />
          </Route>
          
        </Switch>
      </Router>
  );
}

export default App;
