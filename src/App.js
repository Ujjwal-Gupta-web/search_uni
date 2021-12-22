import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Country from './components/Country';
import UniDetails from './components/UniDetails';
import Home from './components/Home';


function App() {
  return (<>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/:country" element={<Country />} />
      </Routes>
      <Routes>
        <Route exact path="/:country/:university" element={<UniDetails />} />
      </Routes>
    </Router>

  </>
  );
}

export default App;