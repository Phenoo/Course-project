import { createContext, useState, useEffect, useContext } from "react";
import Loading from "../components/Loading";



const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeLoader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }
  useEffect(() => {
  
    return () => {
    }
  }, [])

  if(loading) {
    return <Loading />
  }
  

  const value = {
    user,
    setUser,
    closeLoader,
    loading,
    setLoading
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
