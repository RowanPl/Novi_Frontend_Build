import axios from "axios";
import {Controller, useForm} from "react-hook-form";
import React from "react"; // Import React
import "./Create.css";
import SuccesModal from "../../components/Modal/SuccesModal/SuccesModal.jsx";

function Create() {
    const {handleSubmit, control, register, formState: {errors}} = useForm(); // Destructure control
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [error, setError] = React.useState(null);

    const onSubmit = async (data) => {
        const {applicationName, email} = data;

        try {
            const result = await axios.post('https://api.datavortex.nl/applications', {
                name: applicationName.toLowerCase(),
                email: email,
            });

            if (result.status === 200) {
                setIsOpen(true);
                localStorage.setItem("applicationName", applicationName.toLowerCase());
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="App">


            {modalIsOpen && (
                <SuccesModal closeModal={setIsOpen}/>
            )}


            <form className={"create-form"} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={"create-h2"}>Create a new application</h2>


                <Controller
                    name="applicationName"
                    control={control}
                    render={({field}) => (
                        <>
                            <input
                                type="text"
                                {...field}
                                placeholder={"application name"}
                                className={`inputfield ${errors.applicationName ? 'red-border' : ''}`}
                            />
                            {errors.applicationName &&
                                <p className="error-message">{errors.applicationName.message}</p>}
                        </>
                    )}
                    rules={{
                        required: "This field is required",
                        pattern: {
                            value: /^[a-zA-Z]+$/,
                            message: "Please enter a valid application without any special characters or spaces",
                        },
                        minLength: {
                        value: 3,
                        message: "Application name must be at least 3 characters long",
                    },
                    }}
                />

                <Controller
                    name="email"
                    control={control}
                    render={({field}) => (
                        <>
                            <input
                                type="email"
                                {...field}
                                placeholder={"novi-education email"}
                                className={`inputfield ${errors.email ? 'red-border' : ''}`}
                            />
                            {errors.email && <p className="error-message">{errors.email.message}</p>}
                        </>
                    )}
                    rules={{
                        required: "This field is required",
                        pattern: {
                            value: /^[\w-.]+@novi-education\.nl$/,
                            message: "Please enter a valid novi-education.nl email",
                        },
                    }}
                />
                {error && <p className="error-message">{error.response.data.toString()}</p>}
                <button
                    className={"create-button" + (errors.email ? " tooltip-button disabled" : "")}
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    );
}

export default Create;
