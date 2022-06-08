import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'

function App() {

  const {user, authIsReady} = useAuthContext()

  return (   
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element ={
              <>
              {user ? <Home/>
              : <h2>Please Login First</h2>}
              </>
              }/>
            <Route path = "/signup" element ={
              <>
              {!user ? <Signup/>
              :<h2>You are already Logged In</h2>}
              </>
              }/>
            <Route path = "/login" element ={
              <>
              {!user ? <Login/>
              :<h2>You are already Logged In</h2>}
              </>
            }/>
            
          </Routes>
        </BrowserRouter>
      )}
      </div> 
  );
}

export default App
