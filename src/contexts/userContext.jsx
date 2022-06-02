import { createContext, useState } from "react";

export const UserContext = createContext(null);

function UserProvider(props) {
  const [isLogged, setIsLogged] = useState(true);
  const [userInfo, setUserInfo] = useState({
    id: 1234,
    name: "Fulano",
  })

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, userInfo }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
