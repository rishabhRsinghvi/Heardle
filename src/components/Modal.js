import React from "react"

export default function Modal(props){

    const [modalIsOpen, setModalIsOpen] = React.useState(props.isOpen)

    React.useEffect(() => {
        setModalIsOpen(props.isOpen);
    }, [props.isOpen])

    function closeModal(){
        setModalIsOpen(false)
        props.setModalIsOpenBtn(false)
    }

    var modalTitle = ""
    var modalConElement = ""

    switch(props.btnContent){
        case "about":
            modalTitle = "About"
            modalConElement = 
                <div className="modal-about">
                    <p>Each daily Heardle features a clip from a popular song. Guess in as few tries as possible, and be sure to come back every day for a new song.</p>
                </div>
            break;
        case "stats":
            modalTitle = "Stats"
            modalConElement = 
                <div>
                    <div className="modal-stats-table">
                        <div className="modal-stats-stack">
                            <p></p>
                            <div className="modal-stats-result"></div>
                            <p className="day">1°</p>
                        </div>
                        <div className="modal-stats-stack">
                            <p></p>
                            <div className="modal-stats-result"></div>
                            <p className="day">2°</p>
                        </div>
                        <div className="modal-stats-stack">
                            <p></p>
                            <div className="modal-stats-result"></div>
                            <p className="day">3°</p>
                        </div>
                        <div className="modal-stats-stack">
                            <p></p>
                            <div className="modal-stats-result"></div>
                            <p className="day">4°</p>
                        </div>
                        <div className="modal-stats-stack">
                            <p></p>
                            <div className="modal-stats-result"></div>
                            <p className="day">5°</p>
                        </div>
                        <div className="modal-stats-stack">
                            <p></p>
                            <div className="modal-stats-result"></div>
                            <p className="day">6°</p>
                        </div>
                        <div className="modal-stats-stack">
                            <p>1</p>
                            <div className="modal-stats-result wrong"></div>
                            <img src={require("../assets/wrong.png")} alt="wrong icon" width="15" height="15"/>
                        </div>
                    </div>
                    <p className="modal-stats-table-subtitle">Your score distribution</p>
                    <div className="modal-stats-footer">
                        <div className="modal-stats-div">
                            <p className="modal-stats-num">0/1</p>
                            <p className="modal-stats-title">Correct</p>
                        </div>
                        <div className="modal-stats-div">
                            <p className="modal-stats-num">0.0%</p>
                            <p className="modal-stats-title">Correct %</p>
                        </div>
                        <div className="modal-stats-div">
                            <p className="modal-stats-num">0 : 0</p>
                            <p className="modal-stats-title">Current: Max Streak</p>
                        </div>
                    </div>
                </div>
            break;
        case "how-to":
            modalTitle = "How to Play"
            modalConElement = 
                <div className="modal-how-to">
                    <div>
                        <div className="modal-how-to-line">
                            <img className="modal-how-to-icon" src={require("../assets/music-note.png")} alt="music note icon" width="35" height="35"/>
                            <p>Listen to the into, then find the correct artist & title in the list.</p>
                        </div>
                        <div className="modal-how-to-line">
                            <img className="modal-how-to-icon" src={require("../assets/volume.png")} alt="volume icon" width="35" height="35"/>
                            <p>Skipped or incorrect attempts unlock more of the into</p>
                        </div>
                        <div className="modal-how-to-line">
                            <img className="modal-how-to-icon" src={require("../assets/like.png")} alt="like icon" width="35" height="35"/>
                            <p>Answer in as few tries as possible and share your score!</p>
                        </div>
                    </div>
                    <div className="game-buttons modal-play-btn">
                        <button className="submit-btn" onClick={closeModal}>PLAY</button>
                    </div>
                </div>
            break;
        default:
            break
    }

    if (modalIsOpen){
        return (
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">{modalTitle}</p>
                    <img className="modal-close" src={require("../assets/close.png")} alt="close modal icon" width="25" height="25" onClick={closeModal} />
                </div>
                
                {modalConElement}
            </div>
        )
    }
}