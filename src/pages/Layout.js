import { Outlet, NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const Layout = () => {

  return (
    <div className="view">
      <nav>
        <ul id="navigation">
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? "link-active home": "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({isActive}) => (isActive ? "link-active resume": "")}>Resume</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive}) => (isActive ? "link-active projects": "")}>Projects</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet/>

      <div id="footer">
        <p id="contact">Contact Me: </p>
        <ul class="footer-list">
          <li><a href="mailto:elimorse15@gmail.com"><i class="fa fa-solid fa-envelope"></i></a></li>
          <li><a href="https://linkedin.com/in/eli-morse-743335228"><i class="fa fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/EsromGile"><i class="fa fa-brands fa-github"></i></a></li>
			  </ul>
      </div>
    </div>
  )
};

export default Layout;