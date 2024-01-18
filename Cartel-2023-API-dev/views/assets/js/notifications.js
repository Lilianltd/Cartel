Utils.check_permissions();

function send_notification(){
    let token = Utils.get_access_token();
    let text = document.getElementById('notificationText').value,
        title = document.getElementById('notificationTitle').value,
        data = {
            'title': title,
            'body': text
        },
        url = '/notifications/send';
    if (text === '' || title === '') {
        alert("Veuillez remplir tous les champs");
        return;
    }

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json",
            "authorization": "Bearer " + token
        }),
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            document.getElementById('notificationText').value = '';
            document.getElementById('notificationTitle').value = '';
        }
        else {
            alert("Une erreur est survenue lors de l'envoi de la notification. Veuillez réessayer ultérieurement.");
        }
    }).catch(error => {
        console.log(error);
    });
}