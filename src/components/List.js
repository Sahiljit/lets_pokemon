import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

import {db} from '../firebase/Firebase'
import {doc, deleteDoc, updateDoc} from "firebase/firestore"

export default function List({ pokemons }) {

  const handleDelete = async (id) => {
    
    const ref = doc(db, 'pokemon', id)
    // 3rd argument is the id of the document which we wanna refer to

    await deleteDoc(ref)
  }

  const handleUpdate = async(id, power) => {

        //here we pass database, collection and id of the document which we wanna update
        const pokemonDoc = doc(db, "pokemon", id)
        const newFields = {power: power+1}
    
        await updateDoc(pokemonDoc, newFields)    

  }

  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon =>(
        <div key ={pokemon.id} className ="li pokemon-name">
          <div className="name">
          {pokemon.name}
          </div>
          <div className="power">
          {pokemon.power}
          </div>
          
        
          <button className = 'btn' onClick={()=> handleUpdate(pokemon.id, pokemon.power)}>Increase Power</button>
          <div  className='icon-button'>
          <IconButton
           aria-label="delete"
           color="primary"
           
           
           onClick={() => handleDelete(pokemon.id)}
          >
            <DeleteIcon className="delete-icon" />
           </IconButton>
          </div>          
        </div>
      ))}
    </div>
  )
} 