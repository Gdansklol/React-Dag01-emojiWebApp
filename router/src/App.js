// cd router 
//npm install react-router-dom
// npm start

import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <li> <Link to="/page1">Sida 1</Link></li>
      <Link to="/page2">Sida 2</Link>
    </div>
  );
}

export default App;
