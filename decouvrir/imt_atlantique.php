<?php 
  include_once("../generate.php");
  generate_header(1); 
?>

<!DOCTYPE html>
<html>

<body class="d-flex flex-column min-vh-100">

<div class="container_texte">
    <div class="IMTA">
        <h1>IMT Atlantique en quelques mots</h1>
        <h4>L'Institut Mines Télécom (IMT), leader de l'enseignement supérieur, est le premier groupe d'écoles d'ingénieurs et de management de France. Près de 13 600 étudiants sont répartis dans ses 8 grandes écoles : les Mines de Saint-Étienne, IMT Mines Albi-Carmaux, IMT Nord Europe, IMT Atlantique, Télécom ParisTech, Télécom SudParis, IMT Business School, et enfin IMT Mines Alès; ainsi que dans ses écoles partenaires : Mines ParisTech, Mines Nancy… Son excellence dans la recherche et l'innovation fait sa renommée nationale et internationale.</h4>
        <div style="display:flex; justify-content:center">
            <img src="IMT.jpg" style="max-width:50vw" label="IMT">
        </div>
        <h4>IMT Atlantique en fait partie. Créée le 1er janvier 2017, IMT Atlantique est issue de la fusion de l'École nationale supérieure des Mines de Nantes et de Télécom Bretagne. L'école s'étend sur trois campus situés à Brest, Nantes et Rennes. IMT Atlantique propose un diplôme d'ingénieur généraliste unique, pour lequel elle recrute des étudiants issus des classes préparatoires aux grandes écoles au travers du Concours Commun Mines-Ponts, mais aussi des élèves issus des Admissions Sur Titres (FAC, IUT,..).</h4>
        <h4>Forte de son excellence dans certains domaines, IMT Atlantique s'inscrit aujourd'hui dans la transition énergétique, environnementale et numérique.</h4>
        <div style="display:flex; justify-content:center">
            <img src="IMTA.jpg" style="max-width:50vw" label="IMT Atlantique">
        </div>
        <div class="mot_directeur">
        <h1>Le mot du directeur</h1>   
        <h4>    Au printemps 2024, IMT Atlantique accueillera sur son site de Nantes, le Cartel. Ce tournoi sportif étudiant annuel voit s'affronter pendant trois jours dans une quinzaine de disciplines les élèves des écoles des Mines françaises et internationales. Chaque édition est entièrement organisée par les étudiants de l'école accueillante. En 2024 ce sont donc les élèves ingénieurs et scientifiques d'IMT Atlantique qui porteront le Cartel, programmeront les épreuves, piloteront la logistique, gèreront le budget de l'évènement, s'assureront de son bon déroulement.</h4>
        <h4>L'école apporte tout son soutien à ses étudiants qui s'engagent bénévolement pour la réalisation de ce projet ambitieux. Il a bien évidemment des vertus pédagogiques puisque nos étudiants devront conduire en autonomie un projet complexe aux enjeux multiples, financiers, logistiques ou de communication. L'école sera là pour les accompagner, les conseiller et les aider à réaliser leurs objectifs.</h4>
        <h4>Avec le Cartel, nos étudiants portent également les valeurs du sport : l'équité, le travail d'équipe, l'égalité, la discipline, l'inclusion, la persévérance et le respect… Autant de compétences humaines et comportementales, que nous souhaitons développer chez nos étudiants et qui leur seront utiles et nécessaires dans leur future vie professionnelle.</h4>
        <h4>Je tiens d'ores et déjà à féliciter les associations étudiantes qui ont commencé à s'investir avec détermination dans ce beau projet.</h4>
        <h4>Avec tout mon soutien et mes meilleurs vœux de réussite.</h4>
        <div class="Lerouge" style= "display:flex; flex-direction:row;justify-content:center; padding-top:25px">
            <img src="Lerouge.png" alt="Christophe LEROUGE" class="rounded-img" style="max-width:50%;">
            <div style="    display: flex;padding-left: 10%;align-items: center;flex-direction: column;justify-content: center;">
            <h5>Christophe Lerouge </h5>  
            <h6>Directeur d'IMT Atlantique</h6> 
            </div>

        </div>
    </div>

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