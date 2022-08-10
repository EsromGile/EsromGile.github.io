import { Outlet, NavLink } from "react-router-dom";
import Popup from "../components/PopUp";
import 'font-awesome/css/font-awesome.min.css';

const Layout = () => {

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
            <NavLink to="/resume" className={({isActive}) => (isActive ? "link-active resume": "")}>Resume</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet/>

      <div id="footer">
        <div id="contact">Contact Me: </div>
        <ul class="footer-list">
          <li><a href="mailto:elimorse15@gmail.com"><i class="fa fa-solid fa-envelope"></i></a></li>
          <li><a href="https://linkedin.com/in/eli-morse-743335228"><i class="fa fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/EsromGile"><i class="fa fa-brands fa-github"></i></a></li>
			  </ul>
        <Popup></Popup>
      </div>
    </>
  )
};

export default Layout;