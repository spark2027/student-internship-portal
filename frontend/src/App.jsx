
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InternshipList from "./components/InternshipList";
import InternshipDetails from "./components/InternshipDetails";
import ApplicationForm from "./components/ApplicationForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Student Internship Portal</Link>
      </nav>

      <Routes>
        <Route path="/" element={<InternshipList />} />
        <Route path="/internship/:id" element={<InternshipDetails />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
