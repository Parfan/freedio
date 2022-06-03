import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { CloseIcon, MenuIcon } from "../Icons";
import "./styles.css";

function Menu() {
  const [active, setActive] = useState(false);
  const { isLogged, setIsLogged, userInfo } = useContext(UserContext);

  function closeMenu() {
    setActive(false);
  }

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
              <li><Link to="/" onClick={closeMenu}>Início</Link></li>
              <li><Link to={`/search`} onClick={closeMenu}>Buscar</Link></li>
              <li><Link to={`/user/${userInfo.id}/library`} onClick={closeMenu}>Biblioteca</Link></li>
              <li><Link to={`/user/${userInfo.id}`} onClick={closeMenu}>Perfil</Link></li>
              <li><Link to={`/user/${userInfo.id}/settings`} onClick={closeMenu}>Configurações</Link></li>
              <li><Link to="/" onClick={() => { setIsLogged(false); closeMenu() }}>Sair</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/" onClick={closeMenu}>Início</Link></li>
              <li><Link to="/login" onClick={closeMenu}>Entrar</Link></li>
              <li><Link to="/signup" onClick={closeMenu}>Cadastrar</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Menu;
