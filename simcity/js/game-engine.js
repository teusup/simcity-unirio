jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
  $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
  $(window).scrollLeft()) + "px");
  return this;
}

//GRID
//LOAD
function grid_load(x,y) {
  loading_map = true;
  map_data.position.x = x;
  map_data.position.y = y;
  // console.log(map_data.position);
  grid_erase();
  for (var i=0; i < 10; i++) {
    $('.mapa').append($(grid_load_row(i,x,y)))
    y++;
  }
  loading_map = false;
}
function grid_load_row(i,x,y) {
  var row = $('<div class="row linha"><div>');
  for(var j = 0; j < grid.grid_max_horizontal; j++) {
    var obj = map_data.data[x][y];
    if(obj.mesh.graphic == undefined || obj.mesh.graphic == ""){
      obj.mesh.graphic = "";
    }
    var grid_obj = $('<div class="grid"> <div class="mesh" style="position:relative;top:0;left:0;"> </div> </div>')
    $(grid_obj).attr('data-x', j)
    $(grid_obj).attr('data-y', i)
    $(grid_obj).attr('data-real-x', x)
    $(grid_obj).attr('data-real-y', y)
    $(grid_obj).css("background-image", "url('"+obj.tileset.graphic+"')")
    $(grid_obj).css("background-size","contain")
    // console.log(x+"-"+y+"-"+obj.mesh.graphic);
    $(grid_obj).find('.mesh').css("background-image", "url('"+obj.mesh.graphic+"')")
    $(row).append($(grid_obj));
    x++;
  }
  return row;
}
//SPAWN
function grid_create_row(i,x,y) {
  var row = $('<div class="row linha"><div>');
  for(var j = 0; j < grid.grid_max_horizontal; j++) {
    var obj = map_data.data[x][y];
    if(obj.mesh.graphic == undefined || obj.mesh.graphic == ""){
      obj.mesh.graphic = "";
    }
    var grid_obj = $('<div class="grid"> <div class="mesh" style="position:relative;top:0;left:0"> </div> </div>')
    $(grid_obj).attr('data-x', j)
    $(grid_obj).attr('data-y', i)
    $(grid_obj).attr('data-real-x', x)
    $(grid_obj).attr('data-real-y', y)
    $(grid_obj).css("background-image", "url('"+obj.tileset.graphic+"')")
    $(grid_obj).css("background-size","contain")
    $(grid_obj).find('.mesh').css("background-image", "url('"+obj.mesh.graphic+"')")
    $(row).append($(grid_obj));
    x++;
  }
  return row;
}
function grid_erase() {
  $('.mapa').html('');
}
function grid_spawn(x,y) {
  loading_map = true;
  map_data.position.x = x;
  map_data.position.y = y;
  grid_erase();
  for (var i=0; i < 10; i++) {
    $('.mapa').append($(grid_create_row(i,x,y)))
    y++;
  }
  loading_map = false;
}
function grid_find_XY(x,y) {
  return $(".grid[data-x="+x+"][data-y="+y+"]");
}
//CURSOR
function cursor_getPosition() {
  return cursorPlayer
}
function cursor_getRealPosition() {
  var grid = grid_find_XY(cursor_getPosition().x,cursor_getPosition().y)
  return {x: $(grid).attr('data-real-x'),y: $(grid).attr('data-real-y')}
}
function cursor_setPosition(x,y) {
  $(grid_find_XY(cursorPlayer.x,cursorPlayer.y)).removeClass('grid-cursorOn');
  cursorPlayer.x = x;
  cursorPlayer.y = y;
  $(grid_find_XY(cursorPlayer.x,cursorPlayer.y)).addClass('grid-cursorOn');
}
function cursor_moveUp() {
  if(cursorPlayer.y==2){
    if(grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-y')<2){
      cursor_setPosition(cursorPlayer.x,cursorPlayer.y-1)
    }else{
      if(map_data.position.y==0){
        cursor_setPosition(cursorPlayer.x,cursorPlayer.y-1)
      }else{
        var cursor_atual = cursor_getPosition()
        grid_load(map_data.position.x,map_data.position.y-1);
        cursor_setPosition(cursor_atual.x,cursor_atual.y)
      }
    }
  }else{
    if(!(cursorPlayer.y==0 && grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-y')==0)){
      cursor_setPosition(cursorPlayer.x,cursorPlayer.y-1)
    }
  }
}
function cursor_moveDown() {
  if(cursorPlayer.y==7){
    if(grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-y')>map_data.size.y-2){
      cursor_setPosition(cursorPlayer.x,cursorPlayer.y+1)
    }else{
      if(map_data.position.y+cursorPlayer.y==map_data.size.y-3){
        cursor_setPosition(cursorPlayer.x,cursorPlayer.y+1)
      }else{
        var cursor_atual = cursor_getPosition()
        grid_load(map_data.position.x,map_data.position.y+1);
        cursor_setPosition(cursor_atual.x,cursor_atual.y)
      }
    }
  }else{
    if(!(cursorPlayer.y==9 && grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-y')==map_data.size.y-1)){
      cursor_setPosition(cursorPlayer.x,cursorPlayer.y+1)
    }
  }
  // console.log(cursorPlayer.y);
  // console.log(grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-y'));
}
function cursor_moveLeft() {
  if(cursorPlayer.x==2){
    if(grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-x')<2){
      cursor_setPosition(cursorPlayer.x-1,cursorPlayer.y)
    }else{
      if(map_data.position.x==0){
        cursor_setPosition(cursorPlayer.x-1,cursorPlayer.y)
      }else{
        var cursor_atual = cursor_getPosition()
        grid_load(map_data.position.x-1,map_data.position.y);
        cursor_setPosition(cursor_atual.x,cursor_atual.y)
      }
    }
  }else{
    if(!(cursorPlayer.x==0 && grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-x')==0)){
      cursor_setPosition(cursorPlayer.x-1,cursorPlayer.y)
    }
  }
}
function cursor_moveRight() {
  if(cursorPlayer.x==grid.grid_max_horizontal-3){
    if(grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-x')>map_data.size.x-2){
      cursor_setPosition(cursorPlayer.x+1,cursorPlayer.y)
    }else{
      if(map_data.position.x+cursorPlayer.x==map_data.size.x-3){
        cursor_setPosition(cursorPlayer.x+1,cursorPlayer.y)
      }else{
        var cursor_atual = cursor_getPosition()
        grid_load(map_data.position.x+1,map_data.position.y);
        cursor_setPosition(cursor_atual.x,cursor_atual.y)
      }
    }
  }else{
    if(!(cursorPlayer.x==grid.grid_max_horizontal-1 && grid_find_XY(cursorPlayer.x,cursorPlayer.y).attr('data-real-x')==map_data.size.x-1)){
      cursor_setPosition(cursorPlayer.x+1,cursorPlayer.y)
    }
  }
}
//MAP
function create_tree() {
  var random = Math.floor(Math.random() * 100);
  if(random>=60){
    return {
      graphic: 'graphic/mesh/arvores.png',
      tipo: "floresta"
    }
  } else{
    return {}
  }
}
function map_create(x,y) {
  map_data.size.x = x
  map_data.size.y = y
  var mapaArray_data = [];
  for (var i=0; i<y; i++) {
    var mapaArray_x = [];
    for (var j=0; j<x; j++) {
      var tree = create_tree();
      mapaArray_x.push({
        position:{
          x:j,
          y:i
        },
        tileset:{
          graphic: 'graphic/tileset/grass-set-00/grass01.png'
        },
        mesh:tree
      })
    }
    mapaArray_data.push(mapaArray_x);
  }
  return mapaArray_data
}
//INIT
//GLOBAL VAR
var cursorPlayer = {
  x: 0,
  y: 0
}

var map_data = {
  size:{
    x:0,
    y:0
  },
  data: undefined,
  position:{
    x:0,
    y:0
  }
}

var grid = {
  gridWidth: 0,
  grid_max_horizontal: 0
}

//GLOBAL ENGINE
var loading_map = false;

function viewport_resize() {
  grid.gridWidth = $(window).height()/11.766; //px
  grid.grid_max_horizontal = Math.trunc(($(window).width()*1)/grid.gridWidth);
  $('.mapa').css('width',grid.grid_max_horizontal*grid.gridWidth).center().css('top',0);
}

function resetServer(){
	$.post({
	      type: 'GET',
	      url: "http://localhost:8080/simcity/turn",
	      crossDomain: true,
	      cache: false,
	      contentType: 'application/json', //see that
	      data: ""
	})
}

function init() {
  viewport_resize();
  map_data.data = map_create(30,30);
  map_data.data[9][9].tileset.graphic = 'graphic/tileset/grass-set-00/grass11.png';

  grid_spawn(0,0);
  ui_atualizar();
  startTurn();
  cursor_setPosition(4,4);
  resetServer()
}
$(document).ready(function() {
  init();
  cursor_setPosition(cursorPlayer.x,cursorPlayer.y);
});

//KEYDOWN
$(document).keydown(function(event) {
  if(!loading_map){
    if(event.which == 38) {
      //W
      cursor_moveUp()
    } else
    if(event.which == 37) {
      //A
      cursor_moveLeft()
    } else
    if(event.which == 40) {
      //S
      cursor_moveDown()
    } else
    if(event.which == 39) {
      //D
      cursor_moveRight()
    }
  }
});
//KEYPRESS
$(document).keypress(function(event) {
  if(!loading_map){
    if(event.which == 119 || event.which == 87) {
      //W
      cursor_moveUp()
    } else
    if(event.which == 97 || event.which == 65) {
      //A
      cursor_moveLeft()
    } else
    if(event.which == 115 || event.which == 83) {
      //S
      cursor_moveDown()
    } else
    if(event.which == 100 || event.which == 68) {
      //D
      cursor_moveRight()
    } else
    if(event.which == 32) {
      //AÇÃO
      fazer_acao();
      ui_atualizar()
    }
  }
});

function sendPOST(data,url){
  // console.log(data);
jQuery.support.cors = true;
  $.post({
    type: 'POST',
    url: url,
    crossDomain: true,
    cache: false,
    contentType: 'application/json', //see that
    data: JSON.stringify(data)
  }).done(function (data) {
    console.log(data);
  });
}
