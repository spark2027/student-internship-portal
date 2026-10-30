
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { internships } from "./InternshipList";

function ApplicationForm() {
  const { id } = useParams();
  const internship = internships.find(item => item.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNumber: "",
    internship: internship?.title || ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!form.name.trim() || !form.email.trim() ||
        !form.rollNumber.trim() || !form.internship) {
      setError("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/applications`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setMessage("Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        rollNumber: "",
        internship: internship?.title || ""
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  if (!internship) return <h2>Internship not found</h2>;

  return (
    <div className="container">
      <h1>Internship Application Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Student Name"
          value={form.name} onChange={handleChange} required />

        <input name="email" type="email" placeholder="Email ID"
          value={form.email} onChange={handleChange} required />

        <input name="rollNumber" placeholder="Roll Number"
          value={form.rollNumber} onChange={handleChange} required />

        <input name="internship" value={form.internship} readOnly />

        <button type="submit">Submit Application</button>
      </form>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      <Link to="/">Back to Internships</Link>
    </div>
  );
}

export default ApplicationForm;
