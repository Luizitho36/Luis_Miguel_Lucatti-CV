import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="divPrincipalNav">

      <ul className="ul">
        <NavLink to="/" className="link" activeClassName="active">
          INICIO
        </NavLink>
        <NavLink to="/datos" className="link" activeClassName="active">
          MIS DATOS
        </NavLink>
        <NavLink to="/experiencias" className="link" activeClassName="active">
          MI EXPERIENCIA
        </NavLink>
        {}
        <NavLink to="/programacion" className="link" activeClassName="active">
          PROGRAMACIÓN
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/luis-miguel-lucatti-b2b677104/"
          className="link"
          activeClassName="active"
          target="_blank"
        >
          LINKED IN
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;