# LearningFirebase

### Following are the code snippets for Firebase 9

---

#### Subscribing to Firestore/ Real-time data ==> Look at useCollection.js / inside hooks
```javascript
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
```


---
READ
```javascript
  const {documents : pokemons} = useCollection('pokemon')
```
==> here we are basically using useCollection hook and setting a real-time subscription

---
CREATE

```javascript
import { db } from '../firebase/Firebase'
import { collection,addDoc } from 'firebase/firestore'

  const [newPokemon, setNewPokemon] = useState('')
  const [newPower, setNewPower] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const ref = collection(db, 'pokemon')
    await addDoc(ref, {
      name : newPokemon,
      power  : parseInt(newPower)
    })

  }
```
---
DELETE

```javascript
import {db} from '../firebase/Firebase'
import {doc, deleteDoc} from "firebase/firestore"

  const handleDelete = async (id) => {
    
    const ref = doc(db, 'pokemon', id)
    // 3rd argument is the id of the document which we wanna refer to

    await deleteDoc(ref)
  }

```
---
UPDATE
```javascript
import {db} from '../firebase/Firebase'
import {doc, updateDoc} from "firebase/firestore"

  const handleUpdate = async(id, power) => {

        //here we pass database, collection and id of the document which we wanna update
        const pokemonDoc = doc(db, "pokemon", id)
        const newFields = {power: power+1}
    
        await updateDoc(pokemonDoc, newFields)    

  }
```
---

## FIREBASE AUTHENTICATION

SIGNING UP USERS / Here we basically create useSignup hook

```javascript
import { auth } from "../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {

    const[error, setError] = useState(null)

    const signup = (email, password) =>{
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log('user signed up:', res.user)
        })
        .catch((err) => {
            setError(error)
        })

    }

    return {error, signup}
}
```
==> now code inside our Signup form is as follows :-

```javascript
import { useSignup } from '../hooks/useSignup'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
  }

```
---
LOGGING USERS OUT

==> For this functionality also, we create useLogout hook as:- 

```javascript
import {auth} from '../firebase/Firebase'
import {signOut} from 'firebase/auth'

export const useLogout = () =>{

    const logout = () => {
        signOut(auth)
        .then(() => {
            console.log('user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return {logout}
}
```
And to logout user, call logout function of this hook

---

LOGGING IN 

Similar to Signing In, for logging In, we will create useLogin Hook. 
Code is similar, so look at useLogin.js inside hooks folder.

And code inside our logn-in form will look as follows:-

```javascript
import { useLogin } from '../hooks/useLogin'

  const {error, login} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
```

---
