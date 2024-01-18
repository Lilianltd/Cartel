import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Contacts(props) {

    return (
        <>
            <div className={"sticky flex flex-col top-0 left-0 right-0 bg-primary rounded-b-2xl pb-4"}>
                <div className={"grid grid-flow-col bg-primary mt-3 "}>
                    <img src={"/logo_cartel_blanc.png"} alt={"eurovia"} className={"ml-1 h-5 justify-self-start self-center"}/>
                    <h1 className={"font-bold text-lg select-none text-white justify-self-center self-center my-2"}>Contacts</h1>
                    <img src={"/logo_cartel_blanc.png"} alt={"logo"} className={"h-5 justify-self-end invisible self-center"}/>
                </div>
            </div>
                <div className={"flex flex-col justify-center mt-2"}>
                    <div className={"rounded-md m-3 bg-gray-200 shadow-lg"}>
                        <div className={"flex bg-secondary h-10 justify-center items-center rounded-t-md"}>
                            <h1 className={"font-bold text-lg text-white"}>Sécurité / VSS</h1>
                        </div>
                        <div className={"grid grid-flow-row grid-cols-3"}>
                            <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Permanence VSS</p>
                            <p className={"text-md mt-1 pr-4"}>0624935331</p>
                            <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Responsable sécurité</p>
                            <p className={"text-md mt-1 pr-4"}>0625122739</p>
                        </div>
                    </div>
                    <div className={"rounded-md m-3 bg-gray-200 shadow-lg"}>
                        <div className={"flex bg-secondary h-10 justify-center items-center rounded-t-md"}>
                            <h1 className={"font-bold text-lg text-white"}>Horaires des navettes</h1>
                        </div>
                        <div className={"my-2"}>
                            <a href={"https://drive.google.com/drive/folders/1Dhb5CriHLLStkpv-8ecCeBrte0Ex64lf?usp=sharing"} rel="noreferrer" target={"_blank"}>
                                <p className={"text-blue underline"}>Tableau</p>
                            </a>

                        </div>
                    </div>
                    <div className={"rounded-md m-3 bg-gray-200 shadow-lg"}>
                        <div className={"flex bg-secondary h-10 justify-center items-center rounded-t-md"}>
                            <h1 className={"font-bold text-lg text-white"}>Objets trouvés</h1>
                        </div>
                        <div className={"my-2"}>
                            <a href={"https://forms.gle/N36UHvrqv4FZShXE9"} rel="noreferrer" target={"_blank"}>
                                <p className={"text-blue underline"} >Formulaire</p>
                            </a>

                        </div>
                    </div>

                    <div className={"rounded-md m-3 bg-gray-200 shadow-lg"}>
                        <div className={"flex bg-secondary h-10 justify-center items-center rounded-t-md"}>
                            <h1 className={"font-bold text-lg text-white"}>Sports</h1>
                        </div>
                        <div className={""}>
                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <h2 className={"text-sm font-bold"}>Règlement Général</h2>
                                <a className={"text-blue underline"} href="/rules/Règlement-général_Cartel-Alès-2023.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                            </div>
                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Rugby</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20Rugby.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>H: Guillaume Faucher</p>
                                    <p className={"text-md mt-1 pr-4"}>0669511926</p>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>F: Amandine Barreaud</p>
                                    <p className={"text-md mt-1 pr-4"}>0771809221</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Basket</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20Basket.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>H : Brian Vieira </p>
                                    <p className={"text-md mt-1 pr-4"}>0666126814</p>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>F : Aliénor de Bayser</p>
                                    <p className={"text-md mt-1 pr-4"}>0781271867</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Football</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20football.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>H : Noah Perry</p>
                                    <p className={"text-md mt-1 pr-4"}>0782278479</p>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>F : Laurène Caramelle</p>
                                    <p className={"text-md mt-1 pr-4"}>0652277273</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Volley</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20Volley.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>H : Baptiste Millien</p>
                                    <p className={"text-md mt-1 pr-4"}>0627745223</p>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>F : Fanny Roberto</p>
                                    <p className={"text-md mt-1 pr-4"}>0601772807</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Handball</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20Hand.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>H : Bastien Saffré</p>
                                    <p className={"text-md mt-1 pr-4"}>0781739506</p>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>F : Clémence Bihan</p>
                                    <p className={"text-md mt-1 pr-4"}>0789532856</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Escalade</h2>
                                    <a className={"text-blue underline"} href="/rules/Reglement%20escalade.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Paul Daran</p>
                                    <p className={"text-md mt-1 pr-4"}>0648837903</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Natation</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement Natation.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Siméo Brea</p>
                                    <p className={"text-md mt-1 pr-4"}>0763226606</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Pétanque</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement Pétanque.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Matthieu Chounet</p>
                                    <p className={"text-md mt-1 pr-4"}>0682320759</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Pompom</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20Pompom.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Mathilde Zurita</p>
                                    <p className={"text-md mt-1 pr-4"}>0640993574</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Tennis</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20Tennis%20.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Sixtine Gaillegue</p>
                                    <p className={"text-md mt-1 pr-4"}>0615632443</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Tennis de table</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20tennis%20de%20table.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Nathan Derre</p>
                                    <p className={"text-md mt-1 pr-4"}>0652816456</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Athlétisme</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement%20athlétisme.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Guilhem Cerdan</p>
                                    <p className={"text-md mt-1 pr-4"}>0766864497</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Badminton</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement Badminton.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Jérémy Pfeiffer</p>
                                    <p className={"text-md mt-1 pr-4"}>0695935346</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Cross</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement cross.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Tom Herrou</p>
                                    <p className={"text-md mt-1 pr-4"}>0651320198</p>
                                </div>
                            </div>

                            <div className={"my-2 mx-3 rounded-md bg-gray-300"}>
                                <div className={"grid grid-flow-col grid-row-1 auto-cols-fr"}>
                                    <h2 className={"text-sm font-bold mt-1"}>Spike</h2>
                                    <a className={"text-blue underline"} href="/rules/Règlement Spike.pdf" rel="noreferrer" target={"_blank"}>Règlement</a>
                                </div>
                                <div className={"grid grid-flow-row grid-cols-3"}>
                                    <p className={"text-md mt-1 col-span-2 text-start pl-4"}>Théo Gaudin</p>
                                    <p className={"text-md mt-1 pr-4"}>0781722700</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Navbar index={props.index} onNavbarChange={props.onNavbarChange}/>
        </>
    )
}
