
import './App.css';

import Header from './components/Header'
import Home from './routes/Home'
import SkillSet from './components/SkillSet'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <SkillSet />
    </div>
  );
}

export default App;
