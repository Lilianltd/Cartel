Utils.extract_access_token();
show_auth_info();

function show_auth_info(){
    if(localStorage.getItem("token") === null) return;
    let expiration_date = new Date(localStorage.getItem("expiration_date")),
        email = localStorage.getItem("email"), str = "",
        p = document.getElementById("auth_info");

    if (email) str += "Authentifié en tant que " + email + ". ";
    if (expiration_date) str += "Votre session expire le " + expiration_date.toLocaleString();
    p.innerHTML = str;
    p.style.display = "block";
    document.getElementById("logout_btn").style.display = "block";
}


function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration_date");
    localStorage.removeItem("groups");
    localStorage.removeItem("email");
    document.getElementById("auth_info").innerHTML = "";
    document.getElementById("auth_info").style.display = "none";
    document.getElementById("logout_btn").style.display = "none";
}
