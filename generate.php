<?php

function include_back_root($n){
    //permet d'inclure des ../ qui permettent de revenir au dossier parent
    $str = '';
    for ($k = 0; $k<$n; $k++){
        $str .= '../';
    }
    return $str;
}

function generate_header($n)
{
    echo '<!DOCTYPE html>
    <html>
    <head>
       <title>Cartel 2024</title>
       <link rel="shortcut icon" href="'.include_back_root($n).'favicon.ico" type="image/x-icon">
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <link rel="stylesheet" href="'.include_back_root($n).'stylesheet.css">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.js"></script>
    </head >
    
    
    <div class="header">
       <nav class="navbar navbar-expand-sm" >
          <div class="container-fluid">
             <a class="navbar-brand" href="'.include_back_root($n).'index.php" style="padding-top: 0; padding-bottom: 0;">
                <img src="'.include_back_root($n).'Logo_Cartel_transparent.png" alt="Logo" width="100" height="71" class="d-inline-block align-top" style="margin: 10px 0;">
             </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav mx-auto">
                   <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Nos partenaires
                      </a>
                      <ul class="dropdown-menu">
                         <li><a class="dropdown-item" href="'.include_back_root($n).'partenaire/partenaires.php">Nos partenaires</a></li>
                         <li><a class="dropdown-item" href="'.include_back_root($n).'partenaire/devenir_partenaire.php">Devenir partenaire</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="'.include_back_root($n).'valeurs.php">Nos valeurs</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Découvrir
                      </a>
                      <ul class="dropdown-menu ">
                         <li><a class="dropdown-item" href="'.include_back_root($n).'decouvrir/cartel.php">Notre histoire</a></li>
                         <li><a class="dropdown-item" href="'.include_back_root($n).'decouvrir/imt_atlantique.php">IMT Atlantique</a></li>
                         <li><a class="dropdown-item" href="'.include_back_root($n).'decouvrir/sport.php">Sport</a></li>
                      </ul>
                   </li>
                </ul>
             </div>
          </div>
       </nav>
    </div>
    ';
    }

function generate_footer($n){
    ?>
    <footer class="footer mt-auto" id ="footer">
            <div class="row g-0" style="padding-top:3vh;padding-left:3vw;padding-right:3vw">
                <div class="col-md-4 rowfooter">
                    <div>
                        <div style="display:flex;align-items:center">
                            <img src="<?echo include_back_root($n)?>Logo_Cartel_transparent.png" style="width:8vh">
                            <h4 style='padding-left:2vw'>Cartel 2024</h4>
                        </div>
                        <p style="padding-top:1vh">Un evenement sportif de plus de 1800 étudiants du 21 avril au 25 avril à Nantes</p>
                    </div>
                </div>
                <div class="col-md-4 rowfooter" style='display:felx;flex-direction:column;align-items: center;justify-content: flex-start;'>
                    <h4>Contact</h4>
                    <div>
                    <svg width="2vw" height="3vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"/>
                    </svg>
                        <a href="mailto:contact@cartel2024.com">contact@cartel2024.com</a>    
                    </div>
                </div>
                <div class="col-md-4 rowfooter">
                    <ul>
                        <li class="list-inline-item" style="width: 32px;height: 32px">
                            <a href="https://www.instagram.com/cartel_IMTAtlantique2024/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-instagram" style="width: 30px;height: 30px;color: rgb(209, 87, 240);">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="list-inline-item" style="width: 32px;height: 32px">
                            <a href="">
                                <svg fill="#3b5998" height="32px" width="32px" version="1.1" id="XMLID_5_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <g id="social-facebook"> 
                                            <path id="f" d="M13,23V13h3.4l0.5-4H13V6.6c0-1.1,0.3-1.9,1.9-1.9H17V1.2c-0.4,0-1.6-0.2-3-0.2c-3,0-5,1.8-5,5.2V9H5.6v4H9v10 C9,23,13,23,13,23z">
                                            </path> 
                                        </g> 
                                    </g>
                                </svg> 
                            </a>
                        </li>
                        <li class="list-inline-item" style="width: 32px;height: 32px">
                            <a href="https://www.linkedin.com/company/cartel-imt-atlantique-2024/">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 44 44" version="1.1">
                                    <g id="Icons" stroke="none" stroke-width="1" fill="currentcolor" fill-rule="evenodd">
                                        <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                                            <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row g-0">
            <div class="col-md-12 text-center">
                <p>Copyright © 2024 | Cartel 2024</p>
            </div>
            </div>
        </div>
    </footer>

<?
}

?>

