import React from 'react'

export default function NavSport(props) {
    return (
        <>
            <div className=" px-1 flex flex-row justify-around items-center h-22 bg-primary py-2">
                <div className={"py-2 rounded-md w-32" + (props.index === 0 ? " bg-white" : " bg-primary")} onClick={() => props.onNavbarChange(0)}>
                    <p className={"font-bold text-center text-sm" + (props.index === 0 ? " text-secondary" : " text-white")}>Terminés</p>
                </div>
                <div className={"py-2 rounded-md w-32 items-center" + (props.index === 1 ? " bg-white" : " bg-primary")} onClick={() => props.onNavbarChange(1)}>
                    <p className={"font-bold text-center text-sm" + (props.index === 1 ? " text-secondary" : " text-white")}>En cours</p>
                </div>
                <div className={"py-2 rounded-md w-32" + (props.index === 2 ? " bg-white" : " bg-primary")} onClick={() => props.onNavbarChange(2)}>
                    <p className={"font-bold text-center text-sm" + (props.index === 2 ? " text-secondary" : " text-white")}>A venir</p>
                </div>
            </div>

            <div className={"flex flex-row justify-around mt-2 bg-primary"}>

                <div className={"flex flex-col bg-primary p-1 w-50 rounded-md"}>
                    <label className={"font-bold mb-1 text-white"} htmlFor="sport-select">Sport</label>
                    <select className={"rounded-lg text-center py-0.5 w-40"} defaultValue={props.currentSport} onChange={(event) => {props.onCurrentSport(event.target.value)}} name="sport" id="sport-select">
                        {props.currentSchool === "all" ? '' :<option  value='all'>Tous</option>}
                        {props.sports.map((sport) => (
                            <option key={props.sports.indexOf(sport)} value={sport}>{sport}</option>
                        ))}

                    </select>
                </div>

                <div className={"flex flex-col bg-primary p-1 w-50 rounded-md"}>
                    <label className={"font-bold mb-1 text-white"} htmlFor="school-select">Ecole</label>
                    <select className={"rounded-lg text-center py-0.5 w-40"} defaultValue={props.currentSchool} onChange={(event) => {props.onCurrentSchool(event.target.value)}}  name="school" id="school-select">
                        {props.currentSport === "all" ? '' :<option value='all'>Toutes</option>}
                        {props.schools.map((school) => (
                            <option key={props.schools.indexOf(school)} value={school}>{school}</option>
                        ))}
                    </select>
                </div>
            </div>

        </>

    )
}
