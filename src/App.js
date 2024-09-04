
import { BrowserRouter as  Router, Route,  Switch } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';

function App() {
  return (
    <Router>
        <div className="App">
           <Navbar/>
           <div className='cont'>
            <Switch>
              <Route exact path="/">
              <Home/>
              </Route>
              <Route exact path="/Create">
              <Create/>
              </Route>
            </Switch>
           </div>
        </div>
    </Router>
  );
}

export default App;
