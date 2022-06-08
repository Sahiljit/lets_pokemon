import { useState, useEffect} from 'react'

//firebase import
import {db} from '../firebase/Firebase'
import {collection, onSnapshot} from 'firebase/firestore'


export const useCollection = (collection_name) => {

    const[documents, setDocuments] = useState(null)

    useEffect(() => {

        let ref = collection(db, collection_name)

        const unsub = onSnapshot(ref, (snapshot)=> {

            setDocuments(snapshot.docs.map(doc => 
                ({...doc.data() , id: doc.id})))
            })  

        // cleanup function to unsubsrcibe from firestore when our component unmounts

        return ()=> unsub()


    }, [collection_name])


    return {documents}

}