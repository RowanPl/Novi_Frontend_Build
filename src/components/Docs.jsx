import React, {useEffect} from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swagger from "../assets/swagger.json";
import "../App.css"; // Import your custom CSS

function Docs(applicationName, updateClick) {



    useEffect(() => {
        swagger.servers[0] = {url: "api.datavortex.nl/" + applicationName.applicationName};
        console.log(swagger.servers[0].url)
        console.log(updateClick.updateClick)
    }, [applicationName.applicationName, updateClick.updateClick]);


    return (
        <SwaggerUI spec={swagger}/>
    )
}
export default Docs;
