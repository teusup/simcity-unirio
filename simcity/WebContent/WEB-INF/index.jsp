<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="utf-8">
  <script src="jquery.min.js"></script>
  <script src="bootstrap.min.js"></script>  
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="font-awesome.min.css">
  <!-- <link rel="stylesheet" href="openSans.css">
  <link rel="stylesheet" href="fa.css"> -->
  <script src="js/game-engine.js"></script>
  <script src="js/mesh.js"></script>
  <script src="js/global.js"></script>
  <script src="js/interface.js"></script>
  <script src="js/turn.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <title></title>
  <style media="screen">
  body{
    font-family:'Open Sans';
    user-select: none;
  }
  .grid{
    float: left;
    width: 8.5vh;
    height: 8.5vh;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.35);
  }
  .mesh{
    float: left;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .grid-cursorOn{
    border: 1.5px solid rgba(255,255,255,0.3) !important;
    box-shadow: 0 0 5px rgba(255,255,255,0.3) !important;
    /* background-image: url('graphic/ui/industria.png') !important; */
    background-size: contain;
  }
  .mapa{

    /* transform-style: preserve-3d;
    transform: translateZ(-100px) rotateY(20deg); */
  }
  .linha{
    overflow-x: hidden;
    height: 8.5vh;
    width:100%;
  }
  .city_name{
    color:white;
    font-weight: 300;
    padding-left:1em;
    padding-top: 1vh
  }
  .botaoCategoria{
    color:rgb(240,240,240);
    font-size: 2.5vh;
    padding-top:0.6vh;
    padding-left:1.5vw;
    cursor: pointer;
  }
  .botao_inner_menu{
    height: 8vh;
    margin-left: 1vw;
    margin-right: 1vw;
    cursor: pointer;
  }
  .active_menu{
    color: #f6f6ab !important;
  }
  </style>
</head>
<body style="background-color:#070B0E;">
  <div class="containter-fluid">
    <div class="row" style="height:5vh;width: 100vw;background: linear-gradient(to bottom, #bfc3b2 1%,#fdfeff 100%);position:absolute;bottom:10vh;left:0;index:999;margin:0"></div>
    <div class="row" style="height:10vh;width: 100vw;filter: blur(2px);background: linear-gradient(to right, #100f15 0%,#1f261f 7%,#0a0e0d 18%,#100e1b 30%,#201c1d 43%,#0a0e0d 65%,#212911 76%,#181c1b 90%);position:absolute;bottom:0;left:0;index:999;margin:0"></div>

    <div class="row" style="height:5vh;width: 100vw;position:absolute;bottom:10vh;left:0;index:9999;margin:0">
      <div class="col-12">
        <div class="row" style="height:5vh">
          <div class="menu_estado" style="display:none">
            <i class="close_menu fas fa-times-circle" style="color:#17161B;font-size: 3.2vh;padding-top:0.8vh;padding-left:2vw;cursor:pointer"></i>
            <span class="menu_estado_texto" style="padding-left:1vw;font-size:2.1vh;position:relative;top:-0.4vh">Destruindo</span>
          </div>
          <div class="zoneamento" style="display:none;z-index:10000;position: fixed; bottom: 12vh;left:17vw">
            <img class="botao_inner_menu z_residencia" src="graphic/ui/residencia.png">
            <img class="botao_inner_menu z_residencia2" src="graphic/ui/residencia2.png">
            <img class="botao_inner_menu z_comercio" src="graphic/ui/comercio.png">
            <img class="botao_inner_menu z_industria" src="graphic/ui/industria.png">
          </div>
          <div class="vias" style="display:none;z-index:10000;position: fixed; bottom: 12vh;left:17vw">
            <img class="botao_inner_menu vias_rua" src="graphic/ui/rua.png">
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="height:10vh;width: 100vw;position:absolute;bottom:0;left:0;index:9999;margin:0">
      <div class="col-12">
        <div class="row" style="height:5vh;">
          <div style="margin-left:12.5vw;padding: 0.5vh;">
            <i class="fas fa-road menu_vias botaoCategoria"></i>
            <i class="fas fa-city menu_zona botaoCategoria"></i>
            <i class="fas fa-tree botaoCategoria"></i>
            <span style="padding-left:2vw;padding-right:2vw"></span>
            <i class="fas fa-bolt botaoCategoria"></i>
            <i class="fas fa-tint botaoCategoria"></i>
            <span style="padding-left:2vw;padding-right:2vw"></span>
            <i class="fas fa-hospital botaoCategoria"></i>
            <svg style="cursor: pointer;fill:white;margin-bottom:0.6vh;margin-left:1.2vw" version="1.1" id="police-15" xmlns="http://www.w3.org/2000/svg" width="2.5vh" height="2.5vh" viewBox="0 0 15 15">
              <path id="rect4718" d="M5.5,1L6,2h5l0.5-1H5.5z M6,2.5v1.25c0,0,0,2.75,2.5,2.75S11,3.75,11,3.75V2.5H6z M1.9844,3.9863&#xA;&#x9;C1.4329,3.9949,0.9924,4.4485,1,5v4c-0.0001,0.6398,0.5922,1.1152,1.2168,0.9766L5,9.3574V14l5.8789-6.9297&#xA;&#x9;C10.7391,7.0294,10.5947,7,10.4414,7H6.5L3,7.7539V5C3.0077,4.4362,2.5481,3.9775,1.9844,3.9863z M11.748,7.7109L6.4121,14H12&#xA;&#x9;V8.5586C12,8.2451,11.9061,7.9548,11.748,7.7109z"/>
            </svg>
            <i class="fas fa-graduation-cap botaoCategoria"></i>
            <span style="padding-left:2vw;padding-right:2vw"></span>
            <i class="fas fa-university botaoCategoria"></i>
            <i class="fas fa-bus-alt botaoCategoria"></i>

            <i style="position: fixed;right: 3vw;bottom:6.5vh;" class="fas menu_deletar fa-trash-alt botaoCategoria"></i>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row" style="height:5vh">
          <img src="graphic/smile.png" style="height:4vh;margin-bottom:1vh;margin-left:1vw">
          <span class="city_name">Nome da Cidade</span>

          <div style="position:fixed;bottom:1vh;left:14vw;width:15vw;background-color: rgba(255,255,255,0.35); padding: 0.5vh;height:4vh;border-radius:15px;">
            <i style="color:rgb(240,240,240); font-size: 3vh;padding-top:0.1vh" class="far fa-pause-circle"></i>
            <span class="ui_dia" style="position: relative;top:-0.3vh;padding-left:1.5vw; font-size:2vh;color:rgb(240,240,240);">22</span>
            <span class="ui_mes" style="position: relative;top:-0.3vh;padding-right:0.5vw;padding-left:0.5vw; font-size:2vh;color:rgb(240,240,240);">Outubro <span class="ui_ano" style="font-weight:200">2018</span> </span>
          </div>

          <div style="position:fixed;bottom:1vh;left:28vw;width:19vw;margin-left: 2vw; background-color: rgba(89,122,95,0.35); padding: 0.5vh;height:4vh;border-radius:15px">
            <i style="padding-left: 0.5vw;color:rgb(240,240,240); font-size: 3vh;padding-top:0.1vh" class="far fa-money-bill-alt"></i>
            <span class="ui_cash" style="position: relative;top:-0.3vh;padding-left:1vw; font-size:2vh;color:rgb(240,240,240);">$3.755.867</span>
            <span class="ui_cash_in" style="position: relative;top:0.15vh;padding-right:0.5vw;padding-left:0.5vw; font-size:1.4vh;color:#93D965;">+1,500 <span style="font-weight:200">/Semana</span> </span>
          </div>

          <div style="position:fixed;bottom:1vh;left:48vw;width:15vw;margin-left: 2vw; background-color: rgba(187,205,234,0.35); padding: 0.5vh;height:4vh;border-radius:15px">
            <i style="padding-left: 0.5vw;color:rgb(240,240,240); font-size: 3vh;padding-top:0.1vh" class="fas fa-user"></i>
            <span class="ui_pop" style="padding-right:0.5vw;position: relative;top:-0.3vh;padding-left:1vw; font-size:2vh;color:rgb(240,240,240);">77,867</span>
          </div>

          <div>

          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="containter-fluid" style="width:100vw;height:100vh;">

    <div>

      <div class="row justify-content-center mapa" style="height:85vh;width:90vh;background-color:white;margin:0">

      </div>

    </div>

  </div>
</body>
</html>
