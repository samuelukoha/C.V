import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
