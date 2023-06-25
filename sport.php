<!DOCTYPE html>
<html>
<?php 
   include_once("header.html")
?>
<head>
  <title>Présentation des sports</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Présentation des sports habituels</h1>

    <div class="row">
      <div class="col-md-4">
        <div class="sport">
          <img src="chemin_vers_image_sport_1.jpg" alt="Sport 1">
          <div class="overlay">
            <div class="info">
              <h2>Sport 1</h2>
              <a href="chemin_vers_reglement_sport_1.pdf" download>Télécharger le règlement</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="sport">
          <img src="chemin_vers_image_sport_2.jpg" alt="Sport 2">
          <div class="overlay">
            <div class="info">
              <h2>Sport 2</h2>
              <a href="chemin_vers_reglement_sport_2.pdf" download>Télécharger le règlement</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="sport">
          <img src="chemin_vers_image_sport_3.jpg" alt="Sport 3">
          <div class="overlay">
            <div class="info">
              <h2>Sport 3</h2>
              <a href="chemin_vers_reglement_sport_3.pdf" download>Télécharger le règlement</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1>Sports invités</h1>

    <div class="row">
      <div class="col-md-4">
        <div class="sport">
          <img src="chemin_vers_image_sport_invite_1.jpg" alt="Sport invité 1">
          <div class="overlay">
            <div class="info">
              <h2>Sport invité 1</h2>
              <a href="chemin_vers_reglement_sport_invite_1.pdf" download>Télécharger le règlement</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="sport">
          <img src="chemin_vers_image_sport_invite_2.jpg" alt="Sport invité 2">
          <div class="overlay">
            <div class="info">
              <h2>Sport invité 2</h2>
              <a href="chemin_vers_reglement_sport_invite_2.pdf" download>Télécharger le règlement</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="sport">
          <img src="chemin_vers_image_sport_invite_3.jpg" alt="Sport invité 3">
          <div class="overlay">
            <div class="info">
              <h2>Sport invité 3</h2>
              <a href="chemin_vers_reglement_sport_invite_3.pdf" download>Télécharger le règlement</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
    $(document).ready(function() {
      $('.sport').hover(function() {
        $(this).find('.overlay').toggleClass('active');
      });
    });
  </script>
</body>
<?php
include_once("footer.html");
?>
</html>