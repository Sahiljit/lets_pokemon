import { useState } from 'react'
import List from '../components/List'
import { useCollection } from '../hooks/useCollection'
import Form from '../components/Form'


export default function Home() {
  
  const {documents : pokemons} = useCollection('pokemon')

  return (
    <div >
      {pokemons && <List pokemons={pokemons} />}
      <Form />
    </div>
  );
}
