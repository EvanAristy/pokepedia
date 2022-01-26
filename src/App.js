import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
// components
import Nav from './components/Nav';
// pages
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
import Home from './pages/Home';
// contexts
import UserContext from './contexts/UserContext';
// css
import './App.css';



const App = () => {
  // in able for us to use our contexts we import firt then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  const [user, setUser] = useState('')
  const [pokeList, setPokeList] = useState([])

  useEffect(() => {
    fetchPokemon()

    // Dependecy array: if empty, it will call useEffect once only when the DOM component loads
  }, [])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")

      setPokeList(response.data.results)

    } catch(error) {
      console.log(error)
    }
  }

// console.log('pokelist', pokeList)

  return (
    <div className="App">
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share info to all of its children. We need the value prop inside the provider */}
      <UserContext.Provider value={user}>
        <Nav />

        {/* We need to wrap all of routes inside react router Routes Componenet */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='pokemon/list' element={<PokemonList pokeList={pokeList} itemsPerPage={8} />} />
        </Routes>
      </UserContext.Provider>
  
    </div>
  );
}

export default App;
