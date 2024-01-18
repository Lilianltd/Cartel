import React, {useEffect, useState} from 'react'
import NavSport from "./NavSport";
import Event from "../../components/Event/Event";
import {fetchEvents} from "../../Utils/FetchUtils";
import Navbar from "../../components/Navbar/Navbar";
//const school = ["Mines Oviedo", "Mines Nancy", "Mines Paris", "Mines St-Étienne", "Mines Albi", " Mines Alès", "IMT Nord Europe","GeorgAgricola", "Emines Ben Guerir", "IMT Business School", "Telecom ParisTech", "Telecom St-Étienne", " Telecom SudParis", "Ponts ParisTech"]

export default function Sport(props) {
    const [index, setIndex] = useState(1);
    const [currentSport, setCurrentSport] = useState(localStorage.getItem('sport') == null ? "Rugby H":localStorage.getItem('sport'));
    const [currentSchool, setCurrentSchool] = useState(localStorage.getItem('school') == null ? "IMT Mines Alès":localStorage.getItem('school'));
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents(setEvents, index, currentSport, currentSchool);
    }, [index, currentSport, currentSchool]);

    return (
        <>
            <div className={"sticky flex flex-col top-0 left-0 right-0 bg-primary rounded-b-2xl pb-4"}>
                <div className={"grid grid-flow-col bg-primary mt-3 "}>
                    <img src={"/logo_cartel_blanc.png"} alt={"eurovia"} className={"ml-1 h-5 justify-self-start self-center"}/>
                    <h1 className={"font-bold text-lg text-white justify-self-center self-center my-2"}>Sport</h1>
                    <img src={"/logo_cartel_blanc.png"} alt={"logo"} className={"h-5 justify-self-end invisible self-center"}/>
                </div>
                <NavSport sports={JSON.parse(localStorage.getItem('sports'))} schools={JSON.parse(localStorage.getItem('schools'))} currentSport={currentSport}
                          currentSchool={currentSchool} onCurrentSport={setCurrentSport}
                          onCurrentSchool={setCurrentSchool} index={index} onNavbarChange={setIndex}/>
            </div>

            <div className={"flex flex-col h-full overflow-y-scroll"}>
                {events.map((event) => (
                    <Event key={events.indexOf(event)} event={event}/>
                ))}
            </div>
            <Navbar index={props.index} onNavbarChange={props.onNavbarChange}/>
        </>
)
}
