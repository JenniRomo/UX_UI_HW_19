var content1 = $("#content1")[0];
var content2 = $("#content2")[0];
var btn1 = $("#btn1")[0];
var btn2 = $("#btn2")[0];
var slider = $("slider")[0];
 
function openUX() {
    $('#content1').css('transform', 'translateX(0)');
    $('#content2').css('transform', 'translateX(200%)');
    $('#btn1').css('color', "#F5EEE6")
    $('#btn2').css('color', "#5053A4")
    $("#slider").css('transform', 'translateX(0)')
  }

function openGRD() {
    $('#content1').css('transform', 'translateX(200%)');
    $('#content2').css('transform', 'translateX(0)');
    $('#btn2').css('color', "#F5EEE6")
    $('#btn1').css('color', "#5053A4")
    $("#slider").css('transform', 'translateX(105px)')
  }
