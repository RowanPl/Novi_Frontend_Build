import React, {useEffect, useState} from 'react';
import Docs from "./components/Docs.jsx";

function App() {
    const [applicationName, setApplicationName] = useState('');
    const [email, setEmail] = useState('');
    const [updateClick, setUpdateClick] = useState(1);
    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log(updateClick)
        // You can modify the URL format as needed
        setUpdateClick(updateClick + 1);
    };


    return (
        <>
            <div className="App">
                <form onSubmit={() => handleButtonClick()}>
                    <label>
                        New application Name:
                        <input
                            type="text"
                            value={applicationName}
                            onChange={(e) => setApplicationName(e.target.value)}
                            placeholder={"applicationName"}
                        />
                        <input type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                                placeholder={"email"}

                        />
                    </label>
                    <button type="submit" >Submit</button>
                </form>
            </div>
            <Docs applicationName={applicationName} updateClick={updateClick} />
        </>
    );
}

export default App;
