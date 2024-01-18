import React, {useState} from 'react'
import {subscribe, unsubscribe} from "../../subscription";

export default function ParamModal(props) {
    const [modal, setModal] = useState({ show: false});
    const [notif, setNotif] = React.useState(false);

    const handleValidateModal = () => {
        setModal({ show: false});
    };
    function follow(){
        setNotif(true)
        subscribe().then(r => console.log(r))
    }
    function unfollow(){
        setNotif(false)
        unsubscribe()
    }
    if(localStorage.getItem('hasSeenInstallPopup') == null) {
        localStorage.setItem("hasSeenInstallPopup", "true")
        setModal({ show: true});
    }
    return (
        <>
            {modal.show &&
                <div className="relative z-10" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                                <div className="bg-white py-4 px-2 sm:px-6 rounded-lg">
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                        <div className="text-center pb-4">
                                            <h3 className="text-lg font-medium leading-6 font-bold text-gray-900" id="modal-title">{"Définis tes préférences"}</h3>
                                        </div>
                                        <div>
                                            <div className={"rounded-md m-4 pb-2 bg-gray-200 shadow-lg text-center"}>
                                                <div className={"flex bg-thirdary h-10 rounded-t-md justify-center items-center"}>
                                                    <h1 className={"font-bold text-lg text-white"}>École</h1>
                                                </div>
                                                <div className="justify-center items-center text-center px-4 py-2">
                                                    Définis ton école favorite, utilisée par défaut pour les recherches.
                                                </div>
                                                <select className={"rounded-lg bg-gray-300 p-1 text-center w-60"} defaultValue={localStorage.getItem('school')} onChange={(event) => {localStorage.setItem('school',event.target.value)}} name="school" id="school-select">
                                                    {JSON.parse(localStorage.getItem('schools')).map((school) => (
                                                        <option key={JSON.parse(localStorage.getItem('schools')).indexOf(school)} value={school}>{school}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className={"rounded-md m-4 pb-2 bg-gray-200 shadow-lg text-center"}>
                                                <div className={"flex bg-thirdary h-10 rounded-t-md justify-center items-center"}>
                                                    <h1 className={"font-bold text-lg text-white"}>Sport</h1>
                                                </div>
                                                <div className="justify-center items-center text-center px-4 py-2">
                                                    Définis ton sport favori, utilisé par défaut pour les recherches.
                                                </div>
                                                <select className={"rounded-lg bg-gray-300 p-1 text-center w-60"} defaultValue={localStorage.getItem('sport')} onChange={(event) => {localStorage.setItem('sport',event.target.value)}} name="sport" id="sport-select">
                                                    {JSON.parse(localStorage.getItem('sports')).map((sport) => (
                                                        <option key={JSON.parse(localStorage.getItem('sports')).indexOf(sport)} value={sport}>{sport}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className={"rounded-md m-4 pb-2 bg-gray-200 shadow-lg text-center"}>
                                                <div className={"flex bg-thirdary h-10 rounded-t-md justify-center items-center"}>
                                                    <h1 className={"font-bold text-lg text-white"}>Notifications</h1>
                                                </div>
                                                <div className="justify-center items-center text-center px-4 py-2">
                                                    Souhaites-tu recevoir des notifications concernant des informations importantes lors de l'évènement ?
                                                </div>
                                                {(notif) ?
                                                    <button className={"rounded-lg bg-gray-300 p-1 text-center w-60"} onClick={unfollow}>{"Désactiver les notifications"}</button>
                                                    : <button className={"rounded-lg bg-gray-300 p-1 text-center w-60"} onClick={follow}>{"Activer les notifications"}</button>}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex rounded-lg bg-gray-50 px-4 py-3 justify-end sm:px-6">
                                        <button
                                            onClick={handleValidateModal}
                                            type={"submit"}
                                            className="inline-flex justify-center rounded-md border border-transparent
                                        py-2 px-4 text-sm font-medium text-gray-700 shadow-sm font-semibold focus:outline-none focus:ring-2
                                        focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-500 bg-green-500">
                                            {"Ok"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
