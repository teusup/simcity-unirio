function add_mesh_XY(mesh,x,y) {
  $(grid_find_XY(x,y)).find('.mesh').css('background-image',"url('"+mesh.graphic+"')");
  map_data.data[x][y].mesh = mesh;
  grid_load(map_data.position.x,map_data.position.y);
  cursor_setPosition(cursorPlayer.x,cursorPlayer.y);
}

function remove_mesh_XY(x,y) {
  $(grid_find_XY(x,y)).find('.mesh').css('background-image',"");
  map_data.data[x][y].mesh = '';
  grid_load(map_data.position.x,map_data.position.y);
  cursor_setPosition(cursorPlayer.x,cursorPlayer.y);
}

function add_mesh_XY_noLoad(mesh,x,y) {
  $(grid_find_XY(x,y)).find('.mesh').css('background-image',"url('"+mesh.graphic+"')");
  map_data.data[x][y].mesh = mesh;
}

function remove_mesh_XY_noLoad(x,y) {
  $(grid_find_XY(x,y)).find('.mesh').css('background-image',"");
  map_data.data[x][y].mesh = '';
}

function verificar_contrucao_zoneamento(custo,x,y) {
  if(city.money - custo >= 0 && (map_data.data[x][y].mesh.graphic == "" || map_data.data[x][y].mesh.graphic == undefined)){
    return true;
  } else{
    return false;
  }
}

function zonear_residencia(x,y) {
  if(verificar_contrucao_zoneamento(custo.zonear.residencia,x,y)){
    city.money = city.money - custo.zonear.residencia;
    var mesh = {
      graphic: "graphic/mesh/zona_residencia.png",
      nome: "",
      tipo: "z_residencia",
      energia: 0,
      agua: 0,
      habitantes: 0,
      max_habitantes: 0
    }
    add_mesh_XY(mesh,x,y);
  }
}

function zonear_residencia2(x,y) {
  if(verificar_contrucao_zoneamento(custo.zonear.residencia2,x,y)){
    city.money = city.money - custo.zonear.residencia2;
    var mesh = {
      graphic: "graphic/mesh/zona_residencia2.png",
      nome: "",
      tipo: "z_residencia2",
      energia: 0,
      agua: 0,
      habitantes: 0,
      max_habitantes: 0
    }
    add_mesh_XY(mesh,x,y);
  }
}

function zonear_comercio(x,y) {
  if(verificar_contrucao_zoneamento(custo.zonear.comercio,x,y)){
    city.money = city.money - custo.zonear.comercio;
    var mesh = {
      graphic: "graphic/mesh/zona_comercio.png",
      nome: "",
      tipo: "z_comercio",
      energia: 0,
      agua: 0,
      habitantes: 0,
      max_habitantes: 0
    }
    add_mesh_XY(mesh,x,y);
  }
}

function zonear_industria(x,y) {
  if(verificar_contrucao_zoneamento(custo.zonear.industria,x,y)){
    city.money = city.money - custo.zonear.industria;
    var mesh = {
      graphic: "graphic/mesh/zona_industria.png",
      nome: "",
      tipo: "z_industria",
      energia: 0,
      agua: 0,
      habitantes: 0,
      max_habitantes: 0
    }
    add_mesh_XY(mesh,x,y);
  }
}

function add_rua(x,y) {
  if(verificar_contrucao_zoneamento(custo.via.rua,x,y)){
    city.money = city.money - custo.via.rua;
    var mesh = {
      graphic: "graphic/mesh/asfalto.png",
      nome: "",
      tipo: "rua",
      energia: 0,
      agua: 0,
      habitantes: 0,
      max_habitantes: 0
    }
    add_mesh_XY(mesh,x,y);
    city.m_rotativo = city.m_rotativo-custo.manutencao_via.via;
  }
}

function grid_deletar(x,y) {
  remove_mesh_XY(x,y);
}
