import React, {useEffect} from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swagger from "../assets/swagger.json";
import "../App.css"; // Import your custom CSS

function Docs(applicationName, updateClick) {



    useEffect(() => {
        swagger.servers[1] = {url: "https://api.datavortex.nl/" + applicationName.applicationName};
        console.log(swagger.servers[1].url)
        console.log(updateClick.updateClick)
    }, [applicationName.applicationName, updateClick.updateClick]);

    SwaggerUI.tryItOutEnabled = false;

    return (
        <SwaggerUI spec={swagger}/>
    )
}
export default Docs;
