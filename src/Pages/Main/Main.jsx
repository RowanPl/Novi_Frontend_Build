// eslint-disable-next-line no-unused-vars
import React from 'react';
import Docs from "../../components/Docs.jsx";
import "./Main.css"

function Main() {

    return (
        <>
            <section className="hero-section-container">
                <section className="text-section-container">
                    <h1>NOVI Educational Backend</h1>
                    <h4>Deze backend is gebouwd door en voor NOVI en mag alleen worden gebruikt voor
                        opleidingsdoeleinden.
                        Bij
                        het volgen van de leerlijn Frontend is het noodzakelijk dat er gebruik gemaakt wordt van een
                        backend
                        voor gebruikersbeheer. Hiervoor maak je éénmalig een eigen omgeving aan binnen de NOVI backend
                        via <a href="https://novi.datavortex.nl/Create">dit</a> formulier.</h4>
                    <p>Deze backend ondersteunt het registreren, inloggen en het aanpassen van gebruikers. Ook kan je
                        één
                        veld met
                        aanvullende informatie opslaan, zoals een array met bekeken films of gelikte recepten. Het is
                        niet
                        mogelijk
                        om daarnaast nog meer losse informatie op te slaan. Tenslotte wordt het uploaden en downloaden
                        van
                        de
                        volgende bestandstypes ondersteund:</p>
                    <ul>
                        <li>JPG/JPEG</li>
                        <li>PNG</li>
                        <li>GIF</li>
                        <li>PDF</li>
                    </ul>
                    <p><i><strong>Let op:</strong> de database met gebruikers wordt iedere drie maanden geleegd.</i></p>
                    <h2>Eigen omgeving opzetten</h2>
                    <p>Je zet eenmalig een eigen omgeving op binnen de backendserver door je aan te melden via dit
                        formulier. Kies hiervoor een naam die beschrijvend is en aansluit bij de naam van jouw frontend
                        applicatie. Vervolgens bevestig je het aanmaken van de omgeving via de bevestigingsmail die
                        wordt
                        verzonden naar jouw @novi-education e-mailadres.</p>
                    <h2>Endpoints aanspreken</h2>
                    <p>Alle endpoints zijn beschikbaar op de volgende
                        basis-URI: <code>https://api.datavortex.nl/&#123;applicationName&#125;</code>.
                        Hierbij vervang je <code>&#123;applicationName&#125;</code>In de documentatie vind je terug hoe
                        je
                        ieder afzonderlijk endpoint kunt aanspreken. Sommige endpoints verwachten extra informatie, denk
                        bijvoorbeeld aan het meesturen van gegevens in de request-body, of het meesturen van een token
                        in de
                        request-header bij een beveiligd endpoint. Het is ook mogelijk om voorbeeldresponses te bekijken
                        -
                        druk hiervoor wel eerst even op de <em>'Authorize'</em>-knop aan het begin van iedere sessie.
                    </p>
                </section>
                <Docs/>
            </section>
        </>
    );
}

export default Main;
