
import { useParams, Link } from "react-router-dom";
import { internships } from "./InternshipList";

function InternshipDetails() {
  const { id } = useParams();
  const internship = internships.find(item => item.id === Number(id));

  if (!internship) return <h2>Internship not found</h2>;

  return (
    <div className="container">
      <h1>{internship.title}</h1>
      <p>Company: {internship.company}</p>
      <p>Duration: {internship.duration}</p>
      <p>Location: {internship.location}</p>
      <p>{internship.description}</p>
      <Link to={`/apply/${internship.id}`}>Apply Now</Link>
      <br /><br />
      <Link to="/">Back to Internships</Link>
    </div>
  );
}

export default InternshipDetails;
