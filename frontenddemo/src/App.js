import "./App.css";
import Navbar from "./Layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewEmployee from "./Employees/NewEmployee";
import EditEmployee from "./Employees/EditEmployee";
import ViewEmployee from "./Employees/ViewEmployee";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/newemployee/" element={<NewEmployee />} />
            <Route exact path="EditEmployee/:id" element={<EditEmployee />} />
            <Route exact path="ViewEmployee/:id" element={<ViewEmployee />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
