import React from 'react'
import {MapIcon, PhoneIcon, Cog6ToothIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {IonIcon} from "@ionic/react";
import {americanFootballOutline} from "ionicons/icons";
import "./Navbar.css";
export default function Navbar(props) {
    return (
        <div className="sticky bottom-0 right-0 left-0 flex flex-row justify-around items-center min-h-fit pt-3 pb-6 bg-primary rounded-t-2xl">
            <div className={"flex flex-col justify-center items-center"}>
                <UserGroupIcon className={'h-6 w-6 navitem' + (props.index === 0 ? " active text-white " : " text-grey")}  onClick={() => props.onNavbarChange(0)}/>
            </div>
            <div className={"flex flex-col justify-center items-center"}>
                <PhoneIcon className={'h-6 w-6 navitem' + (props.index === 1 ? " active text-white " : " text-grey")} onClick={() => props.onNavbarChange(1)}/>
            </div>
            <div className={"flex flex-col justify-center items-center"}>
                <IonIcon icon={americanFootballOutline} className={'h-6 w-6 navitem' + (props.index === 2 ? " active text-white " : " text-grey")}  onClick={() => props.onNavbarChange(2)}/>
            </div>
            <div className={"flex flex-col justify-center items-center"}>
                <MapIcon className={'h-6 w-6 navitem' + (props.index === 3 ? " active text-white " : " text-grey")} onClick={() => props.onNavbarChange(3)}/>
            </div>
            <div className={"flex flex-col justify-center items-center "}>
                <Cog6ToothIcon className={'h-6 w-6 navitem' + (props.index === 4 ? " active text-white " : " text-grey")} onClick={() => props.onNavbarChange(4)}/>
            </div>


        </div>
    )
}
