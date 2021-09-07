import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Homepage />
      </Router>
    </div>
  );
}

export default App;
