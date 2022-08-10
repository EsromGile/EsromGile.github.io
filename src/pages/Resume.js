import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <>
            <h1>To-Do</h1>
            <Link to="/files/something.txt" target="_blank" download>Test Download Link</Link>
        </>
    )
};
  
export default Resume;