import { useState } from 'react'

//firebase imports
import { db } from '../firebase/Firebase'
import { collection,addDoc } from 'firebase/firestore'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Form() {
  
  const [newPokemon, setNewPokemon] = useState('')
  const [newPower, setNewPower] = useState(0)

  const {user} = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setNewPokemon('')
    setNewPower('')
    
    const ref = collection(db, 'pokemon')
    await addDoc(ref, {
      name : newPokemon,
      power  : parseInt(newPower),
      uid : user.uid
    })

  }

  return (
    <form onSubmit={handleSubmit} className = "form">
      <label>
        <span>Add a new pokemon name</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewPokemon(e.target.value)}
          value={newPokemon}
        />
      </label>
      <label>
        <span>Add Pokemon Power {`(0-100)`}</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewPower(e.target.value)}
          value={newPower}
        />
      </label>
      <button className = "add-btn">Add</button>
    </form>
  )
}
