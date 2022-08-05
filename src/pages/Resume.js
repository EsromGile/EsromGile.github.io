import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <>
            <h1>Resume</h1>
            <Link to="/files/something.txt" target="_blank" download>Download</Link>
        </>
    )
};
  
export default Resume;