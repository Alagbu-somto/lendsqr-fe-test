import Dashboad from "./pages/dashboard/dashboad";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  type Inputs = {
    email: string;
    password: string;
  };
  const loggedInUser: any = localStorage.getItem("isLoggingin");
  const isLoggingin: Inputs = JSON.parse(loggedInUser);
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={isLoggingin ? <Dashboad /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
