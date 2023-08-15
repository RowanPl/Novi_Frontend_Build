import './RequestCard.css';

function RequestCard(requestColor, request, url, URL_Description, parameters, requestBody, required, requiredParameters) {

    return (
        <div className="request-card">
            <div className="request-card-header">

            <p id={request}>{request}</p>
                <p>/{url}</p>
                <p>{URL_Description}</p>
            </div>
            <div className="request-card-param">
            <p> {parameters} </p>
                <p>{requiredParameters}</p>
            </div>
            <div className={"request-card-body"}>
                <p>Request body</p>
                <p>{required}</p>
            </div>
            <div className="request-card-value">
            <p> Example value</p>
                {`{`}
                <p>{requestBody}</p>
                {`}`}
            </div>
            <div className={"header-card-response" }>

                <p> response </p>
                <div className="container">
                <div>
                <p>code</p>
                <p>201</p>
                </div>
                <div>
                    <p>description:</p>
                    <p>user created!</p>
                </div>
                </div>
            </div>


            </div>
)
}

export default RequestCard;