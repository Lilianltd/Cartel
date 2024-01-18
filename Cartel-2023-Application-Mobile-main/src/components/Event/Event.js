import React from 'react'
import { format } from 'date-fns'


export default function Event(props) {
    const sortAsc = (arr, field) => {
        return arr.sort((a, b) => {
            if (a[field] > b[field]) { return 1; }
            if (b[field] > a[field]) { return -1; }
            return 0;
        })
    }
    props.event.scores = sortAsc(props.event.scores, 'value')

    const down = (e) =>{
        e.target.parentElement.querySelector(".nested").classList.toggle("active-nested");
        e.target.parentElement.querySelector(".nested").classList.toggle("inactive-nested");
        e.target.classList.toggle("rounded-b-lg");
        e.target.parentElement.querySelector(".nested").classList.remove("dsp-none");
        e.target.classList.toggle("caret-down");
    }
    let localDate = new Date(props.event.date);
    let timezoneOffset = localDate.getTimezoneOffset() * 60 * 1000;
    const adjustedDate = new Date(localDate.getTime() + timezoneOffset);

    return (
        <>
            <div className={"flex flex-col rounded-lg m-2"}>
                <div className={"flex flex-col bg-gray-300 rounded-t-lg"}>
                    <div className={"grid grid-flow-col px-3"}>
                        <div className={"flex justify-self-start"}>
                            {props.event.name}
                        </div>
                        <div className={"justify-self-end"}>
                            {format(adjustedDate, "dd/MM/yyyy H:mm")}
                        </div>
                    </div>
                    <div className={"grid grid-flow-col px-3"}>
                        <div className={"flex justify-self-start text-start"}>
                            {props.event.place.name}
                        </div>
                        <div className={"justify-self-end"}>
                            {props.event.sport}
                        </div>
                    </div>
                </div>
                <div>
                    {props.event.teams.length === 0 ? <div className={"bg-gray-400 rounded-b-lg"}>Participants à définir</div> : props.event.teams.length <= 2 ?
                        <div className={"grid grid-flow-col px-2 py-1 bg-gray-400 rounded-b-lg auto-cols-fr"}>
                            <div className={"flex inline-flex col-span-2 items-center"}>
                                {props.event.teams[0].school.name}
                            </div>
                            <div className={"flex justify-self-center items-center"}>
                                {props.event.scores[0].teamId === props.event.teams[0].id ?
                                    props.event.scores[0].value + " : " + props.event.scores[1].value
                                : props.event.scores[1].value + " : " + props.event.scores[0].value}
                            </div>
                            <div className={"flex inline-flex col-span-2 justify-self-end items-center"}>
                                {props.event.teams[1].school.name}
                            </div>
                        </div>
                        : <><div className={"caret bg-gray-400 rounded-b-lg"}  onClick={e => {down(e)}}>{props.event.teams.length + " écoles"}</div>
                            <div className={"nested dsp-none inactive-nested bg-gray-400 rounded-b-lg shadow-xl"}>
                                <div className={"classement grid grid-flow-row px-3 py-1"}>
                                        <div className={"grid grid-flow-col font-bold px-3"}>
                                            <div className={"justify-self-start"}>
                                                {"École"}
                                            </div>
                                            <div className={"justify-self-end"}>
                                                {"Classement"}
                                            </div>
                                        </div>
                                    {props.event.scores.map((score) => (
                                        props.event.teams.map((team) => (
                                                score.teamId === team.id ?
                                                    <div key={team.id} className={"grid grid-flow-col px-3"}>
                                                        <div className={"justify-self-start"}>
                                                            {team.school.name}
                                                        </div>
                                                        <div className={"justify-self-end"}>
                                                            {score.value}
                                                        </div>
                                                    </div> : ''
                                            ))
                                    ))}
                                </div>
                        </div>
                        </>
                    }
                </div>
            </div>

        </>

    )
}
