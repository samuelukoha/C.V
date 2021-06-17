import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
