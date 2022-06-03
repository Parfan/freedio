import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

function UserProvider(props) {
  const [isLogged, setIsLogged] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    Object.keys(userInfo).length > 0 ? setIsLogged(true) : setIsLogged(false);
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, userInfo, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
