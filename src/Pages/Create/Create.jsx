import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import "./Create.css"

function Create(){

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
                localStorage.setItem("applicationName", applicationName);
                window.location.href = "/";
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
    return(
        <>
            <div className="App">
                <form className={"create-form"}>
                    <h2 className={"create-h2"}>Create a new application </h2>
                    <label>
                        <input type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder={"novi-education email"}

                        />
                    </label>

                    <label>
                        <input
                            type="text"
                            value={applicationName}
                            onChange={(e) => setApplicationName(e.target.value)}
                            placeholder={"applicationName"}
                        />
                    </label>

                    <button
                        disabled={disabled}
                        className={"create-button" + (disabled ? " tooltip-button disabled" : "")}
                        type="button"
                        onClick={handleButtonClick}
                    >
                     Create
                    </button>


                    {disabled && (
                        <div className="tooltip">
                            Please enter a valid novi-education email.
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Create;