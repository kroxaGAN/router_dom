import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h3>REACT ROUTER DOM V6</h3>
            <h2>
                <NavLink to={'/'}>main</NavLink>---
                <NavLink to={'/login'}>login</NavLink>---
                <NavLink to={'/profile'}>profile</NavLink>---
                <NavLink to={'/profile/settings'}>settings</NavLink>---
                {/*<NavLink to={'/profile/set'}>set</NavLink>*/}
                <NavLink to={'/my'}>my</NavLink>---
                <NavLink to={'/my/set'}>mySet</NavLink>----
                <NavLink to={'/my/set2'}>mySet2</NavLink>
            </h2>
            <Routes>
                <Route path={'/*'} element={<h1>404 Page not found</h1>}/>
                <Route path={'/'} element={<h1>main</h1>}/>
                <Route path={'/login'} element={<h1>login</h1>}/>
                <Route path={'/profile/*'} element={(
                            <h1>
                                profile
                                <Routes>
                                <Route path={'/settings'} element={<h3>settings</h3>}/>

                                </Routes>
                            </h1>
                    )}
                />
                <Route path={'/my'} element={(
                    <h4>
                        my
                        <Outlet/>
                    </h4>
                )}>
                    <Route path={'/my/set'} element={<h3>set</h3>}/>
                    <Route path={'/my/set2'} element={<h3>set2</h3>}/>
                </Route>


            </Routes>
        </div>
    );
}

export default App;
