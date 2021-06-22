// import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import { SliderData } from './components/Home/SliderData';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Home slides={SliderData}/>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
