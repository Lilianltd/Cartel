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
  <div class="container mt-4">
    <div class="row">
      <?php
      for ($i = 1; $i <= 10; $i++) {
      ?>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="sport_image/test_sport.jpg" alt="Sport Image">
                <a href="#" class="overlay-link">More Details</a>
              </div>
              <div class="card-back" style="color:white">
                <p>Additional details or information</p>
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
