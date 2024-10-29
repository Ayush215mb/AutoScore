import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
