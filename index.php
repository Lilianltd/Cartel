
<!DOCTYPE html>
<html>

<body class="d-flex flex-column min-vh-100">
  
<?php
include_once("header.html")
?>


  <div class="video-container">
      <video autoplay loop muted>
          <source src="IMG_6960.mp4" type="video/mp4">
          <p>Ton navigateur ne supporte pas la lecture de vidéos HTML5.</p>
      </video>
  </div>


<div class="edition-info text-center bg-light p-4">
  <h1 class="title-event">C'est la 50e édition !</h1>
  <p class="lead">Du 21 avril au 25 avril à Nantes</p>
</div>



<div class="countdown-container">
  <div class="row g-0">
    <div class="col text-center" style="max-width:100vw;">
      <h2 class="countdown-heading">
        Début du Cartel 2023 dans ...
      </h2>
      <div id="countdown" class="countdown">
        <div class="countdown-item">
          <span class="countdown-value" id="days"></span>
          <span class="countdown-label">Jours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value" id="hours"></span>
          <span class="countdown-label">Heures</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value" id="minutes"></span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value" id="seconds"></span>
          <span class="countdown-label">Secondes</span>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="stat-container">
  <div class="stat-text">
    <h1> Le Cartel en chiffres </h1>
  </div>
  <div class=stats-container>
    <div class = stat-box>
      <h3>
        3 soirées
      </h3> 
    </div>
    <div class = stat-box>
      <h3>
        1800 participants
      </h3> 
    </div>
    <div class = stat-box>
      <h3>
        14 sports
      </h3> 
    </div>
  </div>
</div>


<?php
include_once("footer.html");
?>


<script>


  var endDate = new Date("2024-04-21T23:59:00");

  // Fonction pour mettre à jour le compte à rebours
  function updateCountdown() {
    var now = new Date();
    var timeDiff = endDate.getTime() - now.getTime();

    // Calcul des jours, heures, minutes et secondes restants
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Affichage du compte à rebours
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  // Mise à jour initiale du compte à rebours
  updateCountdown();

  // Mettre à jour le compte à rebours toutes les secondes
  setInterval(updateCountdown, 1000);
</script>

</body>
</html>