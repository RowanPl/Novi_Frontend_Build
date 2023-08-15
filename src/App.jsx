// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import Docs from "./components/Docs.jsx";
import axios from "axios";

function App() {
    const [applicationName, setApplicationName] = useState('');
    const [email, setEmail] = useState('');
    const [updateClick, setUpdateClick] = useState(1);
    const [disabled, setDisabled] = useState(true);
    const handleButtonClick = async (e) => {
        e.preventDefault();
          try {

            const result = await axios.post('https://api.datavortex.nl/applications', {
                    name: applicationName,
                    email: email,
                }
            );
            if (result.status === 200) {
                alert("Application is aangemaakt, Let op de mail kan in de spam terecht komen. \n \n Je kan nu onder servers jouw URL vinden.")
            }
            console.log(result)
        } catch (error) {
            console.error(error);
        }

        setUpdateClick(updateClick + 1);
    };



    useEffect(() => {
        if (email.includes("@novi-education.nl")) {

            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [email]);


    return (
        <>
            <div className="App">
                <form>
                    <label>
                        New application name:
                        <input
                            type="text"
                            value={applicationName}
                            onChange={(e) => setApplicationName(e.target.value)}
                            placeholder={"applicationName"}
                        />
                    </label>
                    <label>
                        Your novi-education email:
                        <input type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                                placeholder={"email"}

                        />
                    </label>
                    <button
                        disabled={disabled}
                        className={disabled ? "tooltip-button" : ""}
                        type={"button"}
                        onClick={handleButtonClick}
                    >
                        Submit
                    </button>
                    {disabled && (
                        <div className="tooltip">
                            Please enter a valid novi-education email.
                        </div>
                    )}
                </form>
            </div>
            <Docs applicationName={applicationName} updateClick={updateClick} />
        </>
    );
}

export default App;
