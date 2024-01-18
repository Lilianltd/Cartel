import React, {useEffect, useState} from 'react';
import './App.css';
import PageManager from "./components/PageManager/PageManager";
import ParamModal from "./components/Modal/ParamModal";




function App() {
    const [index, setIndex] = useState(localStorage.getItem('sports') == null ? 0:2);
    const [modal, setModal] = useState({ show: false});


    const fetchSchools = () => {
        fetch("https://api.cartel.emait.fr/api/schools", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.status === 200) {
                response.json()
                    .then((json) => {
                        let schools = [];
                        json.forEach((school) => {
                            schools.push(school.name);
                        })
                        localStorage.setItem('schools', JSON.stringify(schools))
                        fetchPlaces()
                    })
            } else {
                return Error("Error while fetching schools")
            }
        })
    }

    const fetchPlaces = () => {
        fetch("https://api.cartel.emait.fr/api/places", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.status === 200) {
                response.json()
                    .then((json) => {
                        localStorage.setItem('places', JSON.stringify(json))
                        if (localStorage.getItem('sport') == null) {
                            localStorage.setItem('sport', "Rugby H")
                        }
                        if (localStorage.getItem('school') == null) {
                            localStorage.setItem('school', "IMT Mines Alès")
                        }
                        setModal({ show: true});
                    })
            } else {
                return Error("Error while fetching places")
            }
        })
    }
    useEffect(() => {
        localStorage.setItem('sports', JSON.stringify(["Athletisme","Badminton", "Basket H", "Basket F", "Cross", "Escalade", "Foot H", "Foot F", "Handball H", "Handball F", "Natation", "Pétanque", "Spike", "Rugby H", "Rugby F", "Tennis de Table", "Tennis", "Volley H", "Volley F"]))
        fetchSchools()
    }, []);

    return (
        <div className="App h-screen">
            <PageManager index={index} onNavbarChange={setIndex}/>
            {modal.show && <ParamModal/>}
        </div>
    );
}

export default App;
