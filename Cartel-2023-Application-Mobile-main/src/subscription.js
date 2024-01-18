const publicVapidKey = "BEpPngxYrTTmBaSuf1EKGzqT-w-9ehHFl_uLzZzshxOCPKt76YqjiVAxJ8Nuam58oBsZj1BD6Yj7qG0i87sVcJ4";


function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

//check if the serveice worker can work in the current browser
/*
if('serviceWorker' in navigator){
    send().catch(err => console.error(err));
}
*/

async function subscribe(){
    //register service worker
/*    const register = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/'
    });*/
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
                }).then((subscription) => {
                    //Send push notification
                    console.log("TRY Subscription ",JSON.stringify(subscription))
                    fetch("https://api.cartel.emait.fr/subscription/subscribe", {
                        method: "POST",
                        body: JSON.stringify(subscription),
                        headers: {
                            "content-type": "application/json"
                        }
                    });
                    console.log("NOTIFICATION Subcribe")
                    localStorage.setItem("Notification", "true")
                });

            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}

function unsubscribe(){
    // unregister webpush subscription
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.pushManager.getSubscription().then(function (subscription) {
                if (subscription) {
                    localStorage.setItem("Notification", "false")
                    console.log("NOTIFICATION Unsubscribe")
                    fetch("https://api.cartel.emait.fr/subscription/unsubscribe", {
                        method: "POST",
                        body: JSON.stringify({endpoint: subscription.endpoint}),
                        headers: {
                            "content-type": "application/json"
                        }
                    });

                }
            });
        });
    }
}
export {subscribe, unsubscribe}