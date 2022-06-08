import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {

    const {logout} = useLogout()


  return (
    <nav>
      <h1>My Pokemons</h1>
      <ul>
        <li className='li'><Link to="/">My List</Link></li>
        <li className='li'><Link to="/login">Login</Link></li>
        <li className='li'><Link to="/signup">Signup</Link></li>
        <li className='li' onClick={logout}>Logout</li>
      </ul>
    </nav>
  )
}
