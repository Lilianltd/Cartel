import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {subscribe,unsubscribe} from "../subscription";


export default function Params(props) {
    const [notif, setNotif] = React.useState(localStorage.getItem("Notification") === "true")


    function follow(){
        setNotif(true)
        subscribe().then(r => console.log(r))
    }
    function unfollow(){
        setNotif(false)
        unsubscribe()
    }

    return (
        <>
            <div className={"sticky flex flex-col top-0 left-0 right-0 bg-primary rounded-b-2xl pb-4"}>
                <div className={"grid grid-flow-col bg-primary mt-3 "}>
                    <img src={"/logo_cartel_blanc.png"} alt={"eurovia"} className={"ml-1 h-5 justify-self-start self-center"}/>
                    <h1 className={"font-bold text-lg text-white justify-self-center self-center my-2"}>Paramètres</h1>
                    <img src={"/logo_cartel_blanc.png"} alt={"logo"} className={"h-5 justify-self-end invisible self-center"}/>
                </div>
            </div>
            <div className={"flex flex-col h-full overflow-y-scroll"}>
                <div className={"rounded-md m-4 pb-2 bg-gray-200 shadow-lg"}>
                    <div className={"flex bg-secondary h-10 rounded-t-md justify-center items-center"}>
                        <h1 className={"font-bold text-lg text-white"}>École</h1>
                    </div>
                    <div className="justify-items-center px-4 py-2">
                        Définis ton école favorite, utilisée par défaut pour les recherches.
                    </div>
                    <select className={"rounded-lg bg-gray-300 p-1 text-center w-60"} defaultValue={localStorage.getItem('school')} onChange={(event) => {localStorage.setItem('school',event.target.value)}} name="school" id="school-select">
                        {JSON.parse(localStorage.getItem('schools')).map((school) => (
                            <option key={JSON.parse(localStorage.getItem('schools')).indexOf(school)} value={school}>{school}</option>
                        ))}
                    </select>
                </div>

                <div className={"rounded-md m-4 pb-2 bg-gray-200 shadow-lg"}>
                    <div className={"flex bg-secondary h-10 rounded-t-md justify-center items-center"}>
                        <h1 className={"font-bold text-lg text-white"}>Sport</h1>
                    </div>
                    <div className="justify-items-center px-4 py-2">
                        Définis ton sport favori, utilisé par défaut pour les recherches.
                    </div>
                    <select className={"rounded-lg bg-gray-300 p-1 text-center w-60"} defaultValue={localStorage.getItem('sport')} onChange={(event) => {localStorage.setItem('sport',event.target.value)}} name="sport" id="sport-select">
                        {JSON.parse(localStorage.getItem('sports')).map((sport) => (
                            <option key={JSON.parse(localStorage.getItem('sports')).indexOf(sport)} value={sport}>{sport}</option>
                        ))}
                    </select>
                </div>

                <div className={"rounded-md m-4 pb-2 bg-gray-200 shadow-lg"}>
                    <div className={"flex bg-secondary h-10 rounded-t-md justify-center items-center"}>
                        <h1 className={"font-bold text-lg text-white"}>Notification</h1>
                    </div>
                    <div className="justify-items-center px-4 py-2">
                        Définis de quel façon tu souhaites être notifié des actualités.
                    </div>
                    {(notif) ?
                        <button className={"rounded-lg bg-gray-300 p-1 text-center w-60"} onClick={unfollow}>{"Désactiver les notifications"}</button>
                        : <button className={"rounded-lg bg-gray-300 p-1 text-center w-60"} onClick={follow}>{"Activer les notifications"}</button>}

                </div>
            </div>
            <Navbar index={props.index} onNavbarChange={props.onNavbarChange}/>
        </>

    )
}