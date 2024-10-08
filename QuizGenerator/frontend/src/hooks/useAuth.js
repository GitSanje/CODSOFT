import AuthContext from "../context/AuthProvider";

import React, { useContext } from 'react'

const useAuth = () => {

    const { auth} = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
  return useContext(AuthContext);
  
}

export default useAuth
