import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

function App() {
    const Mym = () => {
        const params = useParams<'id' | 's'>()
        const some = params
        console.log(some)
        return <div>MYM</div>
    }
    return (
        <div className="App">
            <h3>REACT ROUTER DOM V6</h3>
            <h2>
                <NavLink to={'/'}>main</NavLink>---
                <NavLink to={'/login'}>login</NavLink>---
                <NavLink
                    to={'/profile'}
                    // style={{color: 'cadetblue'}}
                    style={(params)=>{
                        return {color:  params.isActive ? 'red' : 'cadetblue'}
                    }}
                >profile</NavLink>---
                <NavLink to={'/profile/settings'}
                 className={(params)=>params.isActive ? 'act':'def'}
                >settings</NavLink>---
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
                    <Route path={'*'} element={<h3>not page</h3>}/>
                    <Route index element={<h3>cheked ID</h3>}/>
                    <Route path={':id/:d'} element={<h3>ID</h3>}/>
                    <Route path={'/my/set'} element={<h3>set</h3>}/>
                    <Route path={'/my/set2'} element={<h3>set2</h3>}/>
                </Route>

            </Routes>
            <a
                href={'/'}
            target={'_blank'}
                rel={'111'}
            >xxx</a>
            <div>
                <hr></hr>
                lesson 3
                <div>
                    <NavLink to={'/mym/:id/:s'}>mym</NavLink>
                </div>

                <Routes>
                    <Route path={'/mymain'} element={<div>My Main</div>}/>
                    <Route path={'/mym/:id/:s'} element={<Mym/>}/>

                </Routes>

            </div>
        </div>
    );
}

export default App;
