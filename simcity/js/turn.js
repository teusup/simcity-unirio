var turn = {
  date: new Date("1/1/2018"),
  turn: 0,
  run: true
}

function runTurn() {
  if(turn.run){
//    //VERIFICAR CONSTRUCOES
//    verify_obras_concluidas();
//    //VERIFICAR ZONAS
//    verify_residencial_zones();
//    verify_comercial_zones();
//
//    //ATUALIZAR UI
//    proximo_dia();
    jQuery.support.cors = true;
    $.post({
      type: 'POST',
      url: "http://localhost:8080/simcity/turn",
      crossDomain: true,
      cache: false,
      contentType: 'application/json', //see that
      data: JSON.stringify(map_data)
    }).done(function (data) {
    	data = JSON.parse(data);
    	feed_residencial(data.residencial)
    	feed_comercial(data.comercial)
    	feed_construcao(data.construcoes)
    	turn.date = new Date(data.time);
    	
    	//VERIFY AROUND
    	verify_roadsNearby()
    });
    
    //UI
    ui_atualizar();
    //MAP
    grid_load(map_data.position.x,map_data.position.y);
    cursor_setPosition(cursorPlayer.x,cursorPlayer.y);
  }
}
function startTurn() {
  window.setInterval(function(){
    runTurn()
  }, 2500);
}

function stopTurn() {
	if(turn.run){
		turn.run = false;
	}else{
		turn.run = true;
	}
}

function verify_road_around(x,y,tipo){
	x--;
	y--;
	var old_x = x
	var old_y = y	
	var has_road = false;
	
	for (x;x<old_x+3;x++) {
		for (y;y<old_y+3;y++) {
			if(x>=0 && y>=0 && y<map_data.size.y && x<map_data.size.x){
				if(!(old_x+1 == x && old_y+1 == y)){
					if(map_data.data[x][y].mesh.tipo=="rua"){
						has_road = true;
						console.log(x+" - "+y);
					}					
				}				
			}
		}
		y = old_y;
	}
	console.log(has_road)
	if(has_road){
		map_data.data[x][y].mesh.graphic=map_data.data[x][y].mesh.graphic.replace(".png","_nr.png");
	}else{
		map_data.data[x][y].mesh.graphic=map_data.data[x][y].mesh.graphic.replace("_nr","")
	}
}

function verify_roadsNearby(){
	for (var x=0;x<map_data.size.x;x++) {
	      for (var y=0;y<map_data.size.y;y++) {
	    	  var tipo_mesh = map_data.data[x][y].mesh.tipo;
	    	  if(tipo_mesh=="casa1" || tipo_mesh=="casa2" || tipo_mesh=="comercio"){
	    		  verify_road_around(x,y);  
	    	  }
	      }
	    }
}

function feed_residencial(residencial){
	if(residencial.length!=0){
		for(var i=0;i<residencial.length;i++){
			var obj = JSON.parse(residencial[i]);
			console.log(obj)
			add_mesh_XY_noLoad(obj.data,obj.y,obj.x);
		}
	}
}

function feed_comercial(comercial){
	if(comercial.length!=0){
		for(var i=0;i<comercial.length;i++){
			var obj = JSON.parse(comercial[i]);
			console.log(obj)
			add_mesh_XY_noLoad(obj.data,obj.y,obj.x);
		}
	}
}

function feed_construcao(construcao){
	if(construcao.length!=0){
		for(var i=0;i<construcao.length;i++){
			var obj = JSON.parse(construcao[i]);
			console.log(obj)
			add_mesh_XY_noLoad(obj.data,obj.y,obj.x);
		}
	}
}

function proximo_dia() {
  var tomorrow = new Date(turn.date);
  tomorrow.setDate(turn.date.getDate()+1);
  turn.date = tomorrow;
}

function select_construcao() {
  var random = Math.floor(Math.random() * 3)+1;
  return "graphic/mesh/construcao"+random+".png";
}

function select_comercio() {
  var random = Math.floor(Math.random() * 2)+1;
  return "graphic/mesh/predio_comercial"+random+".png";
}

function isZone(tipo,mesh) {
  if(tipo=='r'){
    if(mesh == "z_residencia"){return true} else
    if(mesh == "z_residencia2"){return true} else {return false}
  } if(tipo=='c'){
    if(mesh == "z_comercio"){return true} else {return false}
  }
}

function verify_residencial_zones() {
  if(city.demandas.r>50){
    for (var x=0;x<map_data.size.x;x++) {
      for (var y=0;y<map_data.size.y;y++) {
        var demanda = city.demandas.r-50;
        var random = 100-Math.floor(Math.random() * 101);
        if(demanda>random && isZone('r',map_data.data[x][y].mesh.tipo)){
          if(map_data.data[x][y].mesh.tipo == "z_residencia"){
            var mesh = {
              graphic: select_construcao(),
              nome: "",
              tipo: "c_residencia",
              energia: 0,
              agua: 0,
              habitantes: 0,
              max_habitantes: 0,
              finaliza_obra: new Date(turn.date).setDate(turn.date.getDate()+7)
            }
            add_mesh_XY_noLoad(mesh,x,y);
          } else if(map_data.data[x][y].mesh.tipo == "z_residencia2"){
            var mesh = {
              graphic: select_construcao(),
              nome: "",
              tipo: "c_residencia2",
              energia: 0,
              agua: 0,
              habitantes: 0,
              max_habitantes: 0,
              finaliza_obra: new Date(turn.date).setDate(turn.date.getDate()+14)
            }
            add_mesh_XY_noLoad(mesh,x,y);
          }
        }
      }
    }
  }
}

function verify_comercial_zones() {
  if(city.demandas.c>50){
    for (var x=0;x<map_data.size.x;x++) {
      for (var y=0;y<map_data.size.y;y++) {
        var demanda = city.demandas.c-50;
        var random = 100-Math.floor(Math.random() * 101);
        if(demanda>random && isZone('c',map_data.data[x][y].mesh.tipo)){
          if(map_data.data[x][y].mesh.tipo == "z_comercio"){
            var mesh = {
              graphic: select_construcao(),
              nome: "",
              tipo: "c_comercio",
              energia: 0,
              agua: 0,
              habitantes: 0,
              max_habitantes: 0,
              finaliza_obra: new Date(turn.date).setDate(turn.date.getDate()+10)
            }
            add_mesh_XY_noLoad(mesh,x,y);
          }
        }
      }
    }
  }
}

function verify_obras_concluidas() {
	
  for (var x=0;x<map_data.size.x;x++) {
    for (var y=0;y<map_data.size.y;y++) {
      if(map_data.data[x][y].mesh.finaliza_obra!= undefined){
        var date = map_data.data[x][y].mesh.finaliza_obra;
        if(date === turn.date.getTime()){
          if(map_data.data[x][y].mesh.tipo=="c_residencia"){
            var mesh = {
              graphic: "graphic/mesh/casa1.png",
              nome: "",
              tipo: "casa1",
              energia: 0,
              agua: 0,
              habitantes: 0,
              max_habitantes: 0
            }
            add_mesh_XY_noLoad(mesh,x,y);
          }else if(map_data.data[x][y].mesh.tipo=="c_residencia2"){
            var mesh = {
              graphic: "graphic/mesh/casa1.png",
              nome: "",
              tipo: "casa2",
              energia: 0,
              agua: 0,
              habitantes: 0,
              max_habitantes: 0
            }
            add_mesh_XY_noLoad(mesh,x,y);
          }else if(map_data.data[x][y].mesh.tipo=="c_comercio"){
            var mesh = {
              graphic: select_comercio(),
              nome: "",
              tipo: "comercio",
              energia: 0,
              agua: 0,
              habitantes: 0,
              max_habitantes: 0
            }
            add_mesh_XY_noLoad(mesh,x,y);
          }
        }
      }
    }
  }
}
