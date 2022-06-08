
# Lets Pokemon

This is simple CRUD application made using React and Firebase. The main objective behind building this was to update myself to Firebase 9. Refer to [Notes of firebase 9](https://github.com/sahiljit/learning_firebase/blob/main/README2.md) which I made while building this app. 

User can login to this Web App and can see their personalized list of pokemons. They can create a pokemon, increase its power and can delete a pokemon.
## Technologies Used

##### Following are the technologies used to build this app :-
    
    1. React.js
    2. React-router v6
    3. Context API
    4. Firebase 9



## Features

- CRUD operations
- Authentication/Authorization using Firebase 9
- Global state management using Context API



## Screenshots

![App Screenshot](/screenshots/screenshot-2.png)
![App Screenshot](/screenshots/screenshot-1.png)



## Run Locally

Clone the project

```bash
  git clone https://github.com/sahiljit/lets_pokemon.git
```

Go to the project directory

```bash
  cd lets_pokemon
```

Install dependencies

```bash
  npm install
```

Inside firebase folder, create config.js and add your firebase config object :-

```javascript 
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```

Run Server

```bash
  npm start
```


## Feedback

If you have any feedback, please reach out to me at [sahiljit.com](https://www.sahiljit.com)



