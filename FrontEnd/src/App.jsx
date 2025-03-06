import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import BasicExample from './components/Navbar';
import About from './pages/About';
import Evaluate from './pages/Evaluate';
import Report from "./pages/Report";

function App() {
  return (
    <Router>
      <BasicExample />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/evaluate" element={<Evaluate />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
