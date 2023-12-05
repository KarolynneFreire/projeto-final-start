import { createContext, useContext, useMemo, useState, useEffect } from "react";


const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);


  const isLoggedIn = useMemo(() => user !== null, [user]);


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
 
  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
 
const useUser = () => useContext(UserContext);


export { UserProvider, useUser };


export default UserContext;



