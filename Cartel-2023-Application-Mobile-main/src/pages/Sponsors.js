import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Sponsors(props) {
    return (
        <>
            <div className={"sticky flex flex-col top-0 left-0 right-0 bg-primary rounded-b-2xl pb-4"}>
                <div className={"grid grid-flow-col bg-primary mt-3 "}>
                    <img src={"/logo_cartel_blanc.png"} alt={"cartel"} className={"ml-1 h-5 justify-self-start self-center"}/>
                    <h1 className={"font-bold text-lg text-white justify-self-center self-center my-2"}>Partenaires</h1>
                    <img src={"/logo_cartel_blanc.png"} alt={"logo"} className={"h-5 justify-self-end invisible self-center"}/>
                </div>
            </div>
            <div className={"rounded-md my-3 mx-2 bg-gray-200 shadow-lg"}>
                <div className={"flex bg-secondary h-10 justify-center items-center rounded-t-md"}>
                    <h1 className={"font-bold text-lg text-white"}>Nos réseaux sociaux</h1>
                </div>

                <div className="grid grid-rows-2 place-content-evenly grid-flow-col gap-4 m-3">
                    <a href={"https://www.facebook.com/cartel2023"} rel="noreferrer" target={"_blank"}>
                        <div className="flex bg-secondary w-40 h-8 rounded-3xl justify-center text-white font-bold items-center">Facebook</div>
                    </a>
                    <a href={"https://instagram.com/cartel_2023?igshid=YmMyMTA2M2Y"} rel="noreferrer" target={"_blank"}>
                        <div className="flex bg-secondary w-40 h-8 rounded-3xl justify-center text-white font-bold items-center">Instagram</div>
                    </a>
                    <a href={"https://www.linkedin.com/company/cartel-des-mines-al%C3%A8s-2020/"}  rel="noreferrer" target={"_blank"}>
                        <div className="flex bg-secondary w-40 h-8 rounded-3xl justify-center text-white font-bold items-center">LinkedIn</div>
                    </a>
                    <a href={"https://www.cartel-ales.fr/"} rel="noreferrer" target={"_blank"}>
                        <div className="flex bg-secondary w-40 h-8 rounded-3xl justify-center text-white font-bold items-center">Site Web</div>
                    </a>
                </div>
            </div>
            <div className={"flex flex-col"}>
                <div className={"rounded-md my-3 mx-2 bg-gray-200 shadow-lg"}>
                    <div className={"flex bg-secondary h-10 justify-center items-center rounded-t-md"}>
                        <h1 className={"font-bold text-lg text-white"}>Sponsors</h1>
                    </div>
                    <div className="grid grid-cols-2 place-content-center justify-items-center bg-white gap-4 overflow-y-scroll">
                        <img src={"/sponsors/Logo-Eurovia.png"} alt={"eurovia"} className={"h-20"}/>
                        <img src={"/sponsors/Logo-AFIGEO.jpeg"} alt={"afigeo"} className={"h-20"}/>
                        <img src={"/sponsors/Logo-Netping.png"} alt={"netping"} className={"h-20"}/>
                        <img src={"/sponsors/Logo-Incitius.png"} alt={"incitus"} className={"h-20"}/>
                        <img src={"/sponsors/Logo-Orange.png"} alt={"orange"} className={"h-20"}/>
                        <img src={"/sponsors/logo_Sopra_Steria.jpg"} alt={"sopra_steria"} className={"h-20"}/>
                        <img src={"/sponsors/logo_COMPLEXBAU-AG.jpeg"} alt={"complexbau"} className={"h-20"}/>
                        <img src={"/sponsors/Logo_WINDEV.png"} alt={"windev"} className={"h-20"}/>
                        <img src={"/sponsors/LOGO_lyfpay.jpg"} alt={"lyfpay"} className={"h-20"}/>
                        <img src={"/sponsors/logo_180ans-Horizontal-CMJN.jpg"} alt={"ema"} className={"h-20"}/>
                        <img src={"/sponsors/logo_ales_agglo.png"} alt={"aglo"} className={"h-20"}/>
                        <img src={"/sponsors/LOGO_cercle.jpg"} alt={"cercle"} className={"h-20"}/>
                        <img src={"/sponsors/logo_emamix.jpg"} alt={"emamix"} className={"h-20"}/>
                        <img src={"/sponsors/logo_tsiky.png"} alt={"tsiky"} className={"h-20"}/>
                    </div>
                </div>
            </div>
            <Navbar index={props.index} onNavbarChange={props.onNavbarChange}/>
        </>
    )
}