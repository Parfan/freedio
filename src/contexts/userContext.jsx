import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

function UserProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    if (!isLogged) {
      Object.keys(userInfo).length > 0 ? setIsLogged(true) : setIsLogged(false);
    }
  }, [userInfo]);

  useEffect(() => {
    if (isLogged) {
      axios.get(`http://localhost:6789/usuario?cpf=${userInfo.id}`)
        .then(resp => {
          const info = { ...resp.data, id: resp.data.CPF };
          delete info["CPF"];
          // delete info["senha"];
          setUserInfo(info)
        }).catch(err => console.error(err));
    } else {
      setUserInfo({});
    }
  }, [isLogged]);

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, userInfo, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
