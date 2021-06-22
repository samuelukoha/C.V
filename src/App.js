// import Home from './components/Home/Home';
// import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './components/Forgotpassword/ForgotPassword';
import SetupPassword from './components/SetupPassword/SetupPassword';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faEyeSlash)

function App() {
  return (
    <>
    <Router>
    <div className="App">
      
    <Navbar/>

       <Switch>
        <Route  path="/signIn" exact component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/setupPassword" component={SetupPassword} />
      </Switch>
 
             
      
    </div>
    </Router>
    </>
  );
}

export default App;
