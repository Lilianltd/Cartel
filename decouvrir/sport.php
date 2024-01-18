<?php 
  include_once("../generate.php");
  generate_header(1); 
?>

<!DOCTYPE html>
<html>

<body class="d-flex flex-column min-vh-100">

  <style>

    .card {
      border:none;
      transition: transform 1s;
      border-radius: 25px;
      overflow: hidden;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      transform-style: preserve-3d;
      transition: transform 1s;
      z-index: 3;
    }

    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
    }

    .card-front {
      transform: rotateY(0deg);
      background-color: #fff;
    }

    .card-back {
      transform: rotateY(180deg);
      background-color: #000;
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      transition: opacity 1s;
    }

    .card:hover img {
      opacity: 0.5;
    }

    .card:hover .overlay-link {
      opacity: 1;
    }

    .card.clicked .card-inner {
      transform: rotateY(180deg);
    }

    .card .overlay-link {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 10px 20px;
      text-decoration: none;
      opacity: 0;
      transition: opacity 1s;
    }

    .card-back p {
      padding-left: 10%;
      padding-top: 10%;
    }
  </style>
</head>
<body>
  <div>Sports courants</div>
  <div class="container mt-4">
    <div class="row">
      <?php
      $sport = ["football","Basket-ball",'Handball','Rugby',"Volley-ball","Badminton","Cross",'Escalade','Relais_athle','Relais_natation','Tennis','Tennis_table','Pompom'];
      $description =[""];
      for ($i = 1; $i <= 13; $i++) {
        
      ?>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="sport_image/<?php echo $sport[$i]?>.jpg" alt="Sport Image">
                <a class="overlay-link">Plus de détails</a>
              </div>
              <div class="card-back" style="color:white">
                <p><?php echo $description[$i]?></p>
                <p><?php echo $description[$i]?></p>
              </div>
            </div>
          </div>
        </div>
      <?php
      }
      ?>
    </div>
  </div>

  <div>Sports invités</div>
  <div class="container mt-4">
    <div class="row">
      <?php
      $sport = ["petanque","ultimate",'echecs','arc'];
      $description =[""];
      for ($i = 1; $i <= 4; $i++) {
        
      ?>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="sport_image/<?php echo $sport[$i]?>.jpg" alt="Sport Image">
                <a class="overlay-link">Plus de détails</a>
              </div>
              <div class="card-back" style="color:white">
                <p><?php echo $description[$i]?></p>
                <p><?php echo $description[$i]?></p>
              </div>
            </div>
          </div>
        </div>
      <?php
      }
      ?>
    </div>
  </div>

  <div>Concours annexe</div>
  <div class="container mt-4">
    <div class="row">
      <?php
      $sport = ["dj","rap",'rock','innovation','ecartel','ambiance',"fairplay"];
      $description =[""];
      for ($i = 1; $i <= 6; $i++) {
        
      ?>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="sport_image/<?php echo $sport[$i]?>.jpg" alt="Sport Image">
                <a class="overlay-link">Plus de détails</a>
              </div>
              <div class="card-back" style="color:white">
                <p><?php echo $description[$i]?></p>
                <p><?php echo $description[$i]?></p>
              </div>
            </div>
          </div>
        </div>
      <?php
      }
      ?>
    </div>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", function(event) {
      var cards = document.querySelectorAll(".card");

      cards.forEach(function(card) {
        var overlayLink = card.querySelector(".overlay-link");

        card.addEventListener("mouseover", function() {
          overlayLink.style.opacity = "1";
        });

        card.addEventListener("mouseout", function() {
          overlayLink.style.opacity = "0";
        });

        overlayLink.addEventListener("click", function(event) {
          event.preventDefault();
          card.classList.toggle("clicked");
        });
      });
    });
  </script>

<?php generate_footer(1); ?>
</body>
</html>
