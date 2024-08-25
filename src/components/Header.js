import React from "react"
import Modal from "./Modal"

export default function Header(){

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [btnContent, setBtnContent] = React.useState("")

    function deezerIconClick(){
        window.open("https://www.deezer.com", "_blank")
    }

    function infoIconClick(){
        setModalIsOpen(true)
        setBtnContent("about")
    }

    function statsIconClick(){
        setModalIsOpen(true)
        setBtnContent("stats")
    }

    function helpIconClick(){
        setModalIsOpen(true)
        setBtnContent("how-to")
    }

    return (
        <div className="header">

            <Modal
                isOpen={modalIsOpen}
                setModalIsOpenBtn={setModalIsOpen}
                btnContent={btnContent}
            >
            </Modal>

            <img src={require("../assets/deezer.png")} alt="deezer icon" width="25" height="25" onClick={deezerIconClick} />
            <img src={require("../assets/info.png")} alt="info icon" width="25" height="25" onClick={infoIconClick} />
            <h2 className="header-title">Heardle</h2>
            <img src={require("../assets/stats.png")} alt="stats icon" width="25" height="25" onClick={statsIconClick} />
            <img src={require("../assets/help.png")} alt="help icon" width="25" height="25" onClick={helpIconClick} />
        </div>
    )
}