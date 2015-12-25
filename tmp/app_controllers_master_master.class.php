<?php
namespace Ladmin\Controllers;

use Phoenix\Web\UI\TControl;

class Master extends TControl
{
    
       
    <!-- Navbar
    ================================================== -->
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="javascript:logout()">Phoenix</a>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
                <li><a id="home">Accueil</a></li>

                <!--[if lte IE 8 ]>
                <!--li><a href="javascript:attachView('ventesPrivees.html', '#core')">Ventes Privées</a></li-->
                <!--li><a href="javascript:attachView('ventesGroupees.html', '#core')">Ventes Groupées</a></li-->
                <!--li><a href="javascript:attachView('vehicleBase.html', '#core')">Base des véhicules</a></li-->
                <![endif]-->                

                <!--[if gte IE 9]>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Administration<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li class="nav-header">Gestion&nbsp;des&nbsp;sites</li>
                    <li><a href="javascript:attachView('ventesPrivees.html', '#core')">Ventes Privées</a></li>
                    <li><a href="javascript:attachView('ventesGroupees.html', '#core')">Ventes Groupées</a></li>
                    <li class="divider"></li>
                    <li class="nav-header">Gestion&nbsp;des&nbsp;véhicules</li>
                    <li><a href="javascript:attachView('vehicleBase.html', '#core')">Base des véhicules</a></li>
                    <li class="divider"></li>
                    <li class="nav-header">Outils</li>
                    <li><a href="javascript:attachView('passwordGenerator.html', '#core')">Générateur de mot de passe</a></li>
                  </ul>
                </li>
                <![endif]-->                
                <!--[if !IE]><!-->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Administration<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li class="dropdown-header">Outils</li>
                    <li><a id="passwd">Générateur de mot de passe</a></li>
                    <li><a id="sample">Exemple de multi-accordéon</a></li>
                    <!--li><a href="javascript:publishVehicles()">Publier les véhicules</a></li-->
                  </ul>
                </li>
                <!--<![endif]-->
            </ul>
            <form class="navbar-form navbar-right">
              <div class="form-group">
                <input placeholder="Email" class="form-control" type="text" readonly="readonly">
              </div>
              <button type="submit" class="btn btn-danger">Déconnexion</button>
            </form>
          </div>
        </div>
    </div>
    

<!-- Subhead
================================================== -->
<header class="jumbotron subhead">
    <?php /*
        <div id="myCarousel" class="carousel slide">
        <div class="carousel-inner">
          <div class="item active">
            <img src="images/transparent-header-bg.png" alt="">
            <div class="carousel-caption">
              <h4>Clients à rappeler</h4>
              <p>Il faut rappeler les clients de temps en temps ...</p>
            </div>
          </div>
          <div class="item">
            <img src="images/transparent-header-bg.png" alt="">
            <div class="carousel-caption">
              <h4>Ventes Privées</h4>
              <p>Des voitures encore moins chères ...</p>
            </div>
          </div>
          <div class="item">
            <img src="images/transparent-header-bg.png" alt="">
            <div class="carousel-caption">
              <h4>Ventes Groupées</h4>
              <p>Des voitures à saisir ...</p>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li class="active" data-target="#myCarousel" data-slide-to="0"></li>
          <li class="" data-target="#myCarousel" data-slide-to="1"></li>
          <li class="" data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <a class="left carousel-control" href="#myCarousel" data-slide="prev" style="display:none">‹</a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next" style="display:none">›</a>
      </div>

  */?>
</header>

  <div class="container" >

    <div class="row" id="core" >

    </div>

  </div>

    <!-- Footer
    ================================================== -->
    <footer class="footer">
      <div class="container">
        <p><a href="http://www.ladmin.loc" target="_new" >Déconnexion</a></p>
      </div>
    </footer>

    <script type="text/javascript" src="http://www.ladmin.loc/app/controllers/master/master.js"></script>


   
