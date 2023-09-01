import "./SuccesModal.css"

function succesModal({ closeModal }) {

    return (
        <div className="modalBackground">
            <div className="modalContainer">

                <div className="modalButton">
                <button className="closeModal" onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="modalTitle">
                    <h1>Gelukt!</h1>
                </div>

                <div className="modalBody">
                    <p>Jouw persoonlijke database is gemaakt!.</p>
                    <p>Kijk in je inbox of je een mailtje hebt gehad.</p>
                    <p>Geen mailtje gehad? Check ook eventjes de spam.</p>
                </div>

                <div className="modalFooter">
                    <button className="modalBtn" onClick={() => closeModal(false)} > Sluit</button>
                </div>
            </div>
        </div>
    )
}

export default succesModal;