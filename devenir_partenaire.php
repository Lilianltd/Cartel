<!DOCTYPE html>
<link rel="stylesheet" href="stylesheet.css">

<?php 
   include_once("header.html")
?>

<html>
<head>
  <title>Nos offres</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="devenir-partenaire-container">
        <h1>Nos offres</h1>
        <h2>Les différentes options</h2>
        <div class="row">
            <div class="col-md-6">
            <ul class="list-group">
                <li class="list-group-item">
                <img src="images/facebook.png" alt="Facebook logo" class="rounded-circle float-start me-2">
                <strong>Publicité sur nos réseaux</strong> ou notre site Internet
                </li>
                <li class="list-group-item">
                <img src="images/house.png" alt="House logo" class="rounded-circle float-start me-2">
                <strong>Votre stand</strong> sur notre Village Partenaires, au cœur de l'animation du Cartel
                </li>
                <li class="list-group-item">
                <img src="images/logo.png" alt="Logo logo" class="rounded-circle float-start me-2">
                <strong>Votre logo</strong> sur nos affiches et l'ensemble des supports de communication
                </li>
            </ul>
            </div>
            <div class="col-md-6">
            <ul class="list-group">
                <li class="list-group-item">
                <img src="images/t-shirt.png" alt="T-shirt logo" class="rounded-circle float-start me-2">
                <img src="images/water-bottle.png" alt="Water bottle logo" class="rounded-circle float-start me-2">
                <strong>Votre logo</strong> sur le t-shirt des participants ou les goodies de la compétition
                </li>
                <li class="list-group-item">
                <img src="images/tag.png" alt="Tag logo" class="rounded-circle float-start me-2">
                <strong>Naming</strong> d'un sport, d'une cérémonie ou d'une compétiton
                </li>
            </ul>
            </div>
        </div>
        <hr>
            <div class="contact-info">
        <h2>La Team Cartel</h2>

        <div class="contact-block">
        <p>Envie de nous soutenir ou d'en savoir plus ? N'hésitez pas à contacter notre Team Cartel et nos responsables partenariats ou à consulter la plaquette entreprise.</p>
        <p>Email : <a href="mailto:partenariat@cartel2024.com">partenariat@cartel2024.com</a></p>
        <p>Consultez notre <a href="Cartel_2024_IMT_ATLANTIQUE_PlaquetteEntreprise.pdf" target="_blank">plaquette entreprise</a> pour plus d'informations.</p>
        </div>


        <div class="contact-person">
            <h3>Louis BLANCHARD</h3>
            <p>Cycle ingénieur généraliste 2ème année à Nantes</p>
            <p>Responsable partenariats Cartel 2024</p>
            <p>Email : <a href="mailto:louis.blanchard@cartel2024.com">louis.blanchard@cartel2024.com</a></p>
            <p>Téléphone : 07.81.07.60.02</p>
        </div>

        <div class="contact-person">
            <h3>Myriam YEROU</h3>
            <p>Cycle ingénieur généraliste 2ème année à Brest</p>
            <p>Responsable partenariats Cartel 2024</p>
            <p>Email : <a href="mailto:myriam.yerou@cartel2024.com">myriam.yerou@cartel2024.com</a></p>
            <p>Téléphone : 07.81.86.05.04</p>
        </div>

        <p>L'association CARTEL 2024</p>
    </div>
</div>



<style>

.contact-person {
  flex-basis: calc(50% - 10px);
}

@media screen and (max-width: 768px) {
  .contact-person {
    flex-basis: 100%;
  }
}


</style>

</body>
</html>


<?php
   include_once("footer.html")
?>