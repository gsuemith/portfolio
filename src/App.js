import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header'

import Home from './routes/Home'
import About from './routes/About'
import Portfolio from './routes/Portfolio'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
