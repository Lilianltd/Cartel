import React from 'react'
import Sport from '../../pages/Sport/Sport';
import Contact from '../../pages/Contacts';
import Sponsors from '../../pages/Sponsors';
import Map from '../../pages/Map';
import Params from '../../pages/Params';

export default function PageManager(props) {
    switch (props.index) {
        case 0:
            return (<div className={"flex flex-col h-full"}><Sponsors index={props.index} onNavbarChange={props.onNavbarChange}/></div>)
        case 1:
            return (<div className={"flex flex-col h-full"}><Contact index={props.index} onNavbarChange={props.onNavbarChange}/></div>)
        case 2:
            return (<div className={"flex flex-col h-full"}><Sport index={props.index} onNavbarChange={props.onNavbarChange}/></div>)
        case 3:
            return (<div className={"flex flex-col h-full"}><Map index={props.index} onNavbarChange={props.onNavbarChange}/></div>)
        case 4:
            return (<div className={"flex flex-col h-full"}><Params index={props.index} onNavbarChange={props.onNavbarChange}/></div>)
        default:
            return (<div className={"flex flex-col h-full"}><Sport index={props.index} onNavbarChange={props.onNavbarChange}/></div>)

    }
}
