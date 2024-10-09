import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./NavBar/Nav"; // Adjust the path
import Home from "./Home/Home";
import TopList from "./TopLists";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Default route to Home */}
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TopLists/*" element={<TopList />} /> 
      </Routes>
    </Router>
  );
}

export default App;
