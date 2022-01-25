import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
// components
import Nav from './components/Nav';
// pages
import Login from './pages/Login';
// contexts
import UserContext from './contexts/UserContext';
// css
import './App.css';



function App() {
  // in able for us to use our contexts we import firt then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  const [user, setUser] = useState('')

  return (
    <div className="App">
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share info to all of its children. We need the value prop inside the provider */}
      <UserContext.Provider value={user}>
        <Nav />

        {/* We need to wrap all of routes inside react router Routes Componenet */}
        <Routes>
          <Route path='login' element={<Login setUser={setUser}/>} />
        </Routes>
      </UserContext.Provider>
  
    </div>
  );
}

export default App;
