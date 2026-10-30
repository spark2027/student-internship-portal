
import { Link } from "react-router-dom";

const internships = [
  { id: 1, title: "Web Development Intern", company: "ABC Technologies", duration: "3 Months", location: "Remote", description: "Work on React and web development projects." },
  { id: 2, title: "Python Developer Intern", company: "Tech Solutions", duration: "2 Months", location: "Chennai", description: "Work on Python programming projects." },
  { id: 3, title: "Data Analyst Intern", company: "Data Labs", duration: "3 Months", location: "Remote", description: "Work on data analysis and visualization." }
];

function InternshipList() {
  return (
    <div className="container">
      <h1>Available Internships</h1>
      <div className="cards">
        {internships.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p>Company: {item.company}</p>
            <p>Duration: {item.duration}</p>
            <p>Location: {item.location}</p>
            <Link to={`/internship/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { internships };
export default InternshipList;
