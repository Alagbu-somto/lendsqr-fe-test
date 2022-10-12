import Dashboad from "./pages/dashboard/dashboad";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboad />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
