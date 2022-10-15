import { createContext, useState, useEffect, useContext } from "react";



const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();


  useEffect(() => {
  
    return () => {
    }
  }, [])
  

  const value = {
    user,
    setUser

  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
