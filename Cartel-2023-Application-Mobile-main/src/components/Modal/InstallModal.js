import React, {useState} from 'react'
import {useAddToHomescreenPrompt} from "../../Utils/AddToHomeScreen";


export default function InstallModal(props) {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isAppInstalled, setIsAppInstalled] = useState(true);
    const [modal, setModal] = useState({ show: false});
    const [modalParameter, setModalParameter] = useState({});

    const handleCancelModal = () => {
        setModal({ show: false});
        setIsAppInstalled(true);
    };
    const handleValidateModal = () => {
        setModal({ show: false});
        setIsAppInstalled(true);
    };

    React.useEffect(() => {
        while(document.readyState === "complete") {
            //wait for the page to load
        }
        isPWAInstalled();
    }, [isAppInstalled]);

    const isPWAInstalled =  () => {
        let isInstalled = localStorage.getItem("hasSeenInstallPopup") === "true";
        if (!isInstalled) {
            console.log("userAgent", props.userAgent);
            if (props.userAgent.indexOf("Firefox") !== -1) {
                setModalParameter({
                    text: "Installe l'application en cliquant sur ⋮ → Installer",
                    button: "Ok",
                    onClick: handleCancelModal
                });
                setModal({show: true});
                localStorage.setItem("hasSeenInstallPopup", "true");
            } else if (props.userAgent.indexOf("Chrome") !== -1) {
                window.addEventListener("beforeinstallprompt", async e => {
                    setModalParameter({
                        text: "Installe l'application en cliquant sur ⋮ → Installer",
                        button: "Ok",
                        onClick: promptToInstall
                    });
                    setModal({show: true});
                    setIsAppInstalled(false);
                });
            } else if (props.userAgent.indexOf("Safari") !== -1) {
                setModalParameter({
                    text: "Installe l'application en cliquant sur sur le menu de partage de Safari et sélectionnez 'Ajouter à l'écran d'accueil'",
                    button: "Ok",
                    onClick: handleCancelModal
                });
                localStorage.setItem("hasSeenInstallPopup", "true");
                setModal({show: true});
            } else {
                setModalParameter({
                    text: "Installe l'application en utilisant les fonctionnalités de ton navigateur",
                    button: "Ok",
                    onClick: handleCancelModal
                });
                localStorage.setItem("hasSeenInstallPopup", "true");
                setModal({show: true});
            }
        }
    };

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
                                            <h3 className="text-lg font-medium leading-6 font-bold text-gray-900" id="modal-title">{"Installer l'application"}</h3>
                                        </div>
                                        <div>
                                            {modalParameter.text}
                                        </div>
                                    </div>
                                    <div className="flex rounded-lg bg-gray-50 px-4 py-3 justify-end sm:px-6">
                                        <button
                                            onClick={modalParameter.onClick}
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
