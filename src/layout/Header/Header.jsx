import ViewHeader from "../../img/header.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
        <NavLink to="/" className="Header">
          <img className="Header" src={ViewHeader}></img>
        </NavLink>
    </>
  )
}

export default Header;