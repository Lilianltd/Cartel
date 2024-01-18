

export function fetchEvents(callback, when=null, sport=null, school=null){
    let status = ""
    switch (when) {
        case 0:
            status = "finished"
            break;
        case 1:
            status = "current"
            break;
        case 2:
            status = "futur"
            break;
        default:
            status = "finished"
    }
    let url = "https://api.cartel.emait.fr/api/events/status/" + status + "/sport/" + sport + "/school/" + school
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (response.status === 200) {
            response.json()
                .then((json) => {;
                    if(when == 0){
                        json.sort((a, b) => {
                            if (a.date > b.date) { return -1; }
                            if (b.date > a.date) { return 1; }
                            return 0;
                        })
                    }
                    else{
                        json.sort((a, b) => {
                            if (a.date < b.date) { return -1; }
                            if (b.date < a.date) { return 1; }
                            return 0;
                        })
                    }
                    callback(json)
                })
        } else {
            return Error("Error while fetching event")
        }
    })
}
