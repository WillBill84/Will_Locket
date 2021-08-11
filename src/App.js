import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import './assets/css/App.css';
import Navbar from "./components/navbar/Navbar";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import { AnimatePresence } from "framer-motion";
import AnimatedCursor from './components/cursor/cursor';


class App extends Component {

  render() {
    return (
      <>
      <AnimatedCursor />
      <Router>
        <Navbar />
        <AnimatePresence>
          <Switch>
            {/*  deploy to pages with a redirect... */}
           {/*  <Route path={process.env.PUBLIC_URL + '/'} component={Home}></Route> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </AnimatePresence>
      </Router>
      </>
    );
  }

}

export default App;