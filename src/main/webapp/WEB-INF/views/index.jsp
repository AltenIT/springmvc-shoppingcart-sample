<!DOCTYPE html>
<html lang="en" ng-app="ShoppingCart">
  <head>
    <meta charset="utf-8" />
    <title>Shopping Cart</title>
    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <link href="resources/css/bootstrap/4.1.3/bootstrap.min.css" rel="stylesheet"/>

    <link href="resources/css/app.css" rel="stylesheet"/>
  </head>

  <body>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-info">
      <div class="d-flex w-50 order-120">
        <a class="navbar-brand" href="#"
          ><img src="resources/img/Alt1.png"/></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        class="navbar-collapse collapse justify-content-center order-1"
        id="collapsingNavbar"
      >
        <ul class="navbar-nav">
          <li class="nav-item" ng-class="{true: 'active'}[menuActive('/home')]"><a class="nav-link" href="#/home">Home</a></li>
          <li class="nav-item" ng-class="{true: 'active'}[menuActive('/shop')]"><a class="nav-link" href="#/shop">Shop</a></li>
           <!-- <li class="nav-item" ng-class="{true: 'active'}[menuActive('/cart')]"><a class="nav-link" href="#/viewcart">Winkelwagen</a></li>-->
          <li class="nav-item" ng-class="{true: 'active'}[menuActive('/report')]"><a class="nav-link" href="#/report">Rapport</a></li>
        </ul>
      </div>
      <span class="navbar-text small mt-1 w-50 text-right order-1 order-md-last">
    </nav>

    <br>
    <br>
    <br>
    <br>
    <br>

      <!-- Begin page content -->
      <!-- <div class="container-fluid">
        <div class="row-fluid">
          <div class="span2"> -->
            <!-- Fixed left nav column -->
            <!-- <div ng-include src="'resources/partials/leftnav.html'"></div>
          </div>
          <div class="span10"> -->
            <!-- Breadcrumbs
               ================================================== -->

            <!-- main content  -->
            <section id="mainSection" style="margin-top:0">
              <ng-view>Loading...</ng-view>
            </section>
          </div>
        </div>
      </div>
      <!-- this div needed to keep footer pinned to bottom -->
      <div id="push"></div>
    </div>

    <script src="resources/lib/jquery/1.10.2/jquery.js"></script>
    <script src="resources/lib/bootstrap/4.1.3/bootstrap.min.js"></script>
    <script src="resources/lib/angular/1.1.5/angular.min.js"></script>

    <script src="resources/js/app.js"></script>
    <script src="resources/js/controllers.js"></script>
  </body>
</html>
