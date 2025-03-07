import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home"
import Details from "../src/Components/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
