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
    
    <div className="App">
      <Router>
        <Switch>
      
          <Route path = "/detail">
            <Article />
          </Route>

          <Route path = "/">
            <ArticleListing />
          </Route>
          
          

        </Switch>
      </Router>
      <header>npm start</header>
    </div>
  );
}

export default App;
