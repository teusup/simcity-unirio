var cursor_status = "";

$(document).ready(function() {
  $(".close_menu").on("click", function() {
    closeMenu();
  });

  $(".menu_vias").on("click", function() {
    if($(this).hasClass("active_menu")){
      $(this).removeClass("active_menu");
      $('.vias').hide()
      unselect_via()
      cursor_status = "";
      $('.menu_estado').hide()
      $('.menu_estado_texto').text("");
    }else{
      closeMenu()
      unselect_via()
      $(this).addClass("active_menu");
      $('.vias').show()
      cursor_status = "menu_zona";
      $('.menu_estado').show()
      $('.menu_estado_texto').text("Vias");
    }
  });

  $(".vias_rua").on("click", function() {
    unselect_via()
    if($(this).hasClass("active_sub_menu")){
      $(this).removeClass("active_sub_menu");
      $(this).attr("src","graphic/ui/rua.png");
      cursor_status = "";
    }else{
      $(this).addClass("active_sub_menu");
      $(this).attr("src","graphic/ui/s_rua.png");
      cursor_status = "vias_rua"
    }
  });

  $(".menu_zona").on("click", function() {
    if($(this).hasClass("active_menu")){
      $(this).removeClass("active_menu");
      $('.zoneamento').hide()
      unselect_zona()
      cursor_status = "";
      $('.menu_estado').hide()
      $('.menu_estado_texto').text("");
    }else{
      closeMenu()
      $(this).addClass("active_menu");
      $('.zoneamento').show()
      cursor_status = "menu_zona";
      $('.menu_estado').show()
      $('.menu_estado_texto').text("Zoneando");
    }
  });

  $(".z_residencia").on("click", function() {
    unselect_zona()
    if($(this).hasClass("active_sub_menu")){
      $(this).removeClass("active_sub_menu");
      $(this).attr("src","graphic/ui/residencia.png");
      cursor_status = "";
    }else{
      $(this).addClass("active_sub_menu");
      $(this).attr("src","graphic/ui/s_residencia.png");
      cursor_status = "z_residencia"
    }
  });

  $(".z_residencia2").on("click", function() {
    unselect_zona()
    if($(this).hasClass("active_sub_menu")){
      $(this).removeClass("active_sub_menu");
      $(this).attr("src","graphic/ui/residencia2.png");
      cursor_status = "";
    }else{
      $(this).addClass("active_sub_menu");
      $(this).attr("src","graphic/ui/s_residencia2.png");
      cursor_status = "z_residencia2"
    }
  });

  $(".z_comercio").on("click", function() {
    unselect_zona()
    if($(this).hasClass("active_sub_menu")){
      $(this).removeClass("active_sub_menu");
      $(this).attr("src","graphic/ui/comercio.png");
      cursor_status = "";
    }else{
      $(this).addClass("active_sub_menu");
      $(this).attr("src","graphic/ui/s_comercio.png");
      cursor_status = "z_comercio"
    }
  });

  $(".z_industria").on("click", function() {
    unselect_zona()
    if($(this).hasClass("active_sub_menu")){
      $(this).removeClass("active_sub_menu");
      $(this).attr("src","graphic/ui/industria.png");
      cursor_status = "";
    }else{
      $(this).addClass("active_sub_menu");
      $(this).attr("src","graphic/ui/s_industria.png");
      cursor_status = "z_industria"
    }
  });

  $(".menu_deletar").on("click", function() {
    if($(this).hasClass("active_menu")){
      $(this).removeClass("active_menu");
      cursor_status = ""
      $('.menu_estado').hide()
      $('.menu_estado_texto').text("");
    }else{
      closeMenu();
      $(this).addClass("active_menu");
      cursor_status = "deletar"
      $('.menu_estado').show()
      $('.menu_estado_texto').text("Deletando");
    }
  });
  remove_mesh_XY(cursor_getPosition().x,cursor_getPosition().y)
});

function unselect_zona() {
  $(".z_residencia").removeClass("active_sub_menu");
  $(".z_residencia").attr("src","graphic/ui/residencia.png");
  //
  $(".z_residencia2").removeClass("active_sub_menu");
  $(".z_residencia2").attr("src","graphic/ui/residencia2.png");
  //
  $(".z_comercio").removeClass("active_sub_menu");
  $(".z_comercio").attr("src","graphic/ui/comercio.png");
  //
  $(".z_industria").removeClass("active_sub_menu");
  $(".z_industria").attr("src","graphic/ui/industria.png");
  //
}

function unselect_via() {
  $(".vias_rua").removeClass("active_sub_menu");
  $(".vias_rua").attr("src","graphic/ui/rua.png");
}

function closeMenu() {
  //VIA
  $('.menu_vias').removeClass("active_menu");
  $('.vias').hide()
  //ZONA
  $(".menu_zona").removeClass("active_menu");
  $('.zoneamento').hide()
  unselect_zona()
  cursor_status = "";
  $('.menu_estado').hide()
  $('.menu_estado_texto').text("");
  //DELETAR
  $(".menu_deletar").removeClass("active_menu");
}

function fazer_acao() {
  var cursor = cursor_getRealPosition()
  if(cursor_status=="z_residencia"){
    zonear_residencia(cursor.x,cursor.y);
  } else if(cursor_status=="z_residencia2"){
    zonear_residencia2(cursor.x,cursor.y);
  } else if(cursor_status=="z_comercio"){
    zonear_comercio(cursor.x,cursor.y);
  } else if(cursor_status=="z_industria"){
    zonear_industria(cursor.x,cursor.y);
  } else if(cursor_status=="deletar"){
    grid_deletar(cursor.x,cursor.y);
  } else if(cursor_status=="vias_rua"){
    add_rua(cursor.x,cursor.y);
  }
}

function ui_atualizar() {
  $('.ui_dia').text(turn.date.getDate())
  $('.ui_mes').html(mes_texto(turn.date.getMonth())+' <span class="ui_ano" style="font-weight:200">'+turn.date.getFullYear()+'</span>')
  $('.ui_cash').text("$"+formatMoney(city.money))
  $('.ui_cash_in').text('+0')
  $('.ui_pop').text(city.pop)
}

function mes_texto(n) {
  if(n==0){return "Janeiro"} else
  if(n==1){return "Fevereiro"} else
  if(n==2){return "Março"} else
  if(n==3){return "Abril"} else
  if(n==4){return "Maio"} else
  if(n==5){return "Junho"} else
  if(n==6){return "Julho"} else
  if(n==7){return "Agosto"} else
  if(n==8){return "Setembro"} else
  if(n==9){return "Outubro"} else
  if(n==10){return "Novembro"} else
  if(n==11){return "Dezembro"}
}

function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};
