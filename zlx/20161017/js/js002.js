
function no(){
    var str = $("#input").val();
    $("#output").text(str);
}

$("#test").bind('click',no)