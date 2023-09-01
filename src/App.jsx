// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import Main from "./Pages/Main/Main.jsx";
import {Route, Routes} from "react-router-dom";
import Create from "./Pages/Create/Create.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" Component={Main}/>
                <Route path="/Create" Component={Create}/>
            </Routes>
            <footer>
                Heb je vragen? Stuur <span className="footerText">Rowan</span> dan een berichtje op <span className="footerText">Teams</span>, hij helpt je graag verder!
            </footer>
        </>
    );
}

export default App;
