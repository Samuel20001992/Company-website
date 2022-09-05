import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing_Page from './componenets/LandingPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing_Page/>}/>
      </Routes>
    </div>
  );
}

export default App;
