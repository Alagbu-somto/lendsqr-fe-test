import Dashboad from "./pages/dashboard/dashboad";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="app-container">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboad />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
