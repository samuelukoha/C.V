
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/Forgotpassword/ForgotPassword";
import SetupPassword from "./components/SetupPassword/SetupPassword";



function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/forgotPassword" exact component={ForgotPassword} />
            <Route path="/setupPassword" exact component={SetupPassword} />
          </Switch>
        </>
      </Router>
    </div>
    </Router>
    </>
  );
}

export default App;
