<?php 
  include_once("../generate.php");
  generate_header(1); 
?>

<!DOCTYPE html>
<html>

<body class="d-flex flex-column min-vh-100">

<div class="container_texte">
    <div class="IMTA">
        <h1>L'histoire du Cartel en quelques mots</h1>
        <h4>Le Cartel est une compétition sportive annuelle réunissant les grandes écoles du réseau des Mines Télécom. Chaque année, il s’agit de 4 jours de compétition dans l’une des écoles participantes.
        <h4>1800 futurs ingénieurs, étudiants des diverses écoles du réseau Mines-télécom et des Mines en France et à l’international s’affrontent pour la victoire de cette compétition emblématique.</h4>
        <h4>Il y a 60 ans, les étudiants des Mines de Paris organisent le premier Gala inter-écoles. Leur but est de permettre aux étudiants des écoles du réseau des Mines de se rencontrer. Une dizaine d’années plus tard, il évolue en une compétition sportive sous le nom Cartel. Cet évènement permet aux étudiants de se retrouver autour d’une passion commune : le sport. Chaque année, l’organisation de cet évènement est confiée à une école différente. C’est l'événement sportif de l’année au sein de l’école organisatrice et des écoles invitées. Les élèves ingénieurs l’attendent avec impatience. En 2024,  ce sera les 50 ans et IMT Atlantique aura le privilège d’organiser l’événement. L’ensemble de l’équipe organisatrice a à cœur d’organiser un rendez-vous à la hauteur de sa renommée et mémorable pour ses participants.</h4>
    </div>
</div>

<style>
    .container_texte{
        padding : 5%;
    }

    .container_texte h1{
        color: #2b92d5;
        justify-content: center;
        font-weight: bold;
        font-size: xx-large;
        display: flex;
        margin-bottom: 15px;
    }

    .container_texte h4 {
        text-indent: 5%;
        text-align: justify;
        font-size: 18px;
        margin: 0;
        margin-bottom: 10px;
    }

    .rounded-img {
        border-radius: 50%;
        border: 2px solid #ccc;
    }


</style>

<?php generate_footer(1); ?>
</body>
</html>