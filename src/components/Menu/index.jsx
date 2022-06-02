import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { CloseIcon, MenuIcon } from "../Icons";
import "./styles.css";

function Menu() {
  const [active, setActive] = useState(false);
  const { isLogged, userInfo } = useContext(UserContext);

  return (
    <nav className="nav">
      <div className="hamburger">
        <input type="checkbox" checked={active} onChange={() => { }} name="menu" id="menuToggle" />
        <div className="menu-icon" onClick={() => setActive(!active)}>
          {active ? (
            <CloseIcon width="35px" height="35px" />
          ) : (
            <MenuIcon width="35px" height="35px" />
          )}
        </div>
        <ul className="nav-items">
          {isLogged ? (
            <>
              <li><Link to="/">Início</Link></li>
              <li><Link to={`/user/${userInfo.id}/library`}>Biblioteca</Link></li>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/">Início</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/login">Entrar</Link></li>
              <li><Link to="/signup">Cadastrar</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Menu;
