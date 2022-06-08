import { createContext, useReducer, useEffect } from 'react'
import { auth } from '../firebase/Firebase'
import {authReducer} from './Reducers'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    authIsReady: false
  })

  useEffect(() => {

    // the following code helps us to know whether the user is logged in currently or not
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}