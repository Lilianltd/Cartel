<?php
include_once('../generate.php');
generate_header(1);
?>

<!DOCTYPE html>
<html>
<head>
   <title>Cartel 2024</title>
</head>

<body class="d-flex flex-column min-vh-100">

<style>
.container {

    padding: 30px;
    margin-top: 50px;
}



.bubble h2 {
    color: white;
}
.bubble {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 30px;
    background-color: #2b92d5;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.bubble:hover {
    background-color: #0056b3; /* Darker color on hover */
}
.info-bubble {
    list-style: none;
    padding: 0;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease;
}
.bubble:hover .info-bubble {
    max-height: 500px; /* Set the desired maximum height */
    opacity: 1;
}
.info-bubble li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 20px;
}
.info-bubble li::before {
    content: "\2022";
    color: #007bff;
    font-size: 20px;
    position: absolute;
    left: 0;
}
/* Ensure the h2 content is always visible */
.bubble h2 {
    opacity: 1;
    max-height: 100%;
    transition: opacity 0.5s ease, max-height 0.5s ease;
}
</style>

<div class="container">
    <h1>Nos Valeurs</h1>

    <div class="mt-4 bubble">
        <h2>Respect et Sens des Responsabilités</h2>
        <ul class="info-bubble">
            <li>Prix du fair-play pour récompenser la délégation qui aura eu le meilleur esprit sportif</li>
            <li>Sensibilisation au handisport à travers des stands et animations</li>
            <li>45 organisateurs impliqués et prêts à endosser des responsabilités</li>
        </ul>
    </div>

    <div class="mt-4 bubble">
        <h2>Ecologie</h2>
        <ul class="info-bubble">
            <li>Objectif de labellisation “Développement durable, le sport s’engage”</li>
            <li>Eco-conception des goodies et fabrication locale et éco-responsable des trophées</li>
            <li>Gestion et tri des déchets pour limiter notre empreinte carbone</li>
        </ul>
    </div>

    <div class="mt-4 bubble">
        <h2>Innovation</h2>
        <ul class="info-bubble">
            <li>Challenge innovation sport durable pour promouvoir les start-up des étudiants</li>
            <li>Développement de notre application pour faciliter le suivi de la compétition</li>
        </ul>
    </div>

    <div class="mt-4 bubble">
        <h2>Engagement</h2>
        <ul class="info-bubble">
            <li>Challenge flamme Eco-lympique en lien avec les JO 2024</li>
            <li>Concours des hymnes des délégations pour valoriser l’art et la créativité</li>
            <li>150 bénévoles engagés pleinement pendant le Cartel</li>
        </ul>
    </div>
</div>


<div class="contact-info">
    <h2>La Team Cartel</h2>
    <div class="contact-block">
        <p>Envie de nous soutenir ou d'en savoir plus ? N'hésitez pas à contacter notre Team Cartel et nos responsables partenariats ou à consulter la plaquette entreprise.</p>
        <p>Email : <a href="mailto:partenariat@cartel2024.com">partenariat@cartel2024.com</a></p>
        <p>Consultez notre <a href="Cartel_2024_IMT_ATLANTIQUE_PlaquetteEntreprise.pdf" target="_blank">plaquette entreprise</a> pour plus d'informations.</p>
    </div>

    <div class="row" style="padding:3vw; max-width:100vw;">
        <div class="col-md-6" style="padding-top:4vh">
            <div class="contact-person">
            <div class="row g-0">
                <div class="col-sm-4">
                <img src="path/to/photo1.jpg" alt="Louis BLANCHARD" class="rounded-img">
                </div>
                <div class="col-sm-8">
                <h3>Louis BLANCHARD</h3>
                <p>Cycle ingénieur généraliste 2ème année à Nantes</p>
                <p>Responsable partenariats Cartel 2024</p>
                <p>Email: <a href="mailto:louis.blanchard@cartel2024.com">louis.blanchard@cartel2024.com</a></p>
                </div>
            </div>
            </div>
        </div>

        <div class="col-md-6" style="padding-top:4vh">
            <div class="contact-person person2">
            <div class="row g-0">
                <div class="col-sm-4">
                <img src="path/to/photo2.jpg" alt="Myriam YEROU" class="rounded-img">
                </div>
                <div class="col-sm-8">
                <h3>Myriam YEROU</h3>
                <p>Cycle ingénieur généraliste 2ème année à Brest</p>
                <p>Responsable partenariats Cartel 2024</p>
                <p>Email: <a href="mailto:myriam.yerou@cartel2024.com">myriam.yerou@cartel2024.com</a></p>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>



<style>
    .rounded-img {
        border-radius: 50%;
        border: 2px solid #ccc;
    }
</style>


</body>
</html>

<?php
generate_footer(1)
?>
