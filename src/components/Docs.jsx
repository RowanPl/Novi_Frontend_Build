// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swagger from "../assets/swagger.json";
import "../App.css"; // Import your custom CSS

function Docs() {

    const [applicationName, setApplicationName] = useState( localStorage.getItem("applicationName"));

    if (applicationName === null) {
        setApplicationName("")
    }


    useEffect(() => {
        swagger.servers[1] = {url: "https://api.datavortex.nl/" + applicationName};

    }, [applicationName]);


    return (
        <SwaggerUI spec={swagger}/>
    )
}
export default Docs;
