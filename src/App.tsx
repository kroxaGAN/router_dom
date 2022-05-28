import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <h3>REACT ROUTER DOM V6</h3>
        <h2>
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>
        </h2>
        <Routes>
            <Route path={'/*'} element={<h1>404 Page not found</h1>}/>
            <Route path={'/'} element={<h1>main</h1>}/>
            <Route path={'/login/*'} element={<h1>login</h1>}/>
            <Route path={'/profile'} element={<h1>profile</h1>}/>
            <Route path={'/profile/settings'} element={<h1>settings</h1>}/>
        </Routes>
    </div>
  );
}

export default App;
