<?php
include_once('../generate.php');
generate_header(1);
?>

<!DOCTYPE html>
<html>

<body class="d-flex flex-column min-vh-100">
<head>
   <title>Partenaires</title>
</head>

<div class="container mt-5">
    <h1 class="text-center mb-4">Nos Partenaires</h1>

    <!-- Section Partenaire 1 -->
    <div class="card mb-3">
        <div class="card-body">
            <a href="https://metropole.nantes.fr/" target="_blank">
                <img src="logo-nantes.png" alt="Logo Nantes" class="img-fluid">
            </a>
        </div>
    </div>

    <!-- Section Partenaire 2 -->
    <div class="card mb-3">
        <div class="card-body">
            <a href="https://www.site-de-lentreprise2.com" target="_blank">
                <img src="chemin/vers/logo2.png" alt="Logo Entreprise 2" class="img-fluid">
            </a>
        </div>
    </div>

    <!-- Ajoutez d'autres sections de partenaires au besoin -->

</div>


</body>
</html>

<?php
generate_footer(1);
?>

</body>
</html>