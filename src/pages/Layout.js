import { Outlet, NavLink, Link } from "react-router-dom";
import Popup from "../components/PopUp";
import { saveAs } from "file-saver";
import 'font-awesome/css/font-awesome.min.css';

const Layout = () => {

  const saveFile = () => {
    saveAs(
      "/files/something.txt",
      "resume.txt"
    );
  }

  return (
    <>
      <nav>
        <ul id="navigation">
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? "link-active home": "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive}) => (isActive ? "link-active projects": "")}>Projects</NavLink>
          </li>
          <li>
            {/* <NavLink to="/resume" className={({isActive}) => (isActive ? "link-active resume": "")}>Resume</NavLink> */}
            <a className="resume"
                onClick={() => {
                if (window.confirm("Download Eli's resumé?")) {
                  saveFile();
                }}}>
              Resumé
            </a>
          </li>
        </ul>
      </nav>

      <Outlet/>
      
      <div id="footer">
        <div id="contact">Contact Me: </div>
        <div class="footer-list">
          <a href="mailto:elimorse15@gmail.com"><i class="fa fa-solid fa-envelope"></i></a>
          <a href="https://linkedin.com/in/eli-morse-743335228"><i class="fa fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/EsromGile"><i class="fa fa-brands fa-github"></i></a>
			  </div>
        <Popup></Popup>
      </div>
    </>
  )
};

export default Layout;