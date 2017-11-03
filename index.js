
    $("#inputbox").keyup(function(event){
        var input = $("#inputbox").val();
        if(event.keyCode ===13){
            addItem(input);
        }
    });

function addItem(input) {
    var thelabel = $("#inputbox").val();
    if (thelabel !== "") {
        var inputdiv = "<div><span onclick='editItem(this)'>" + thelabel + "</span><button onclick='deleteItem(this)'>Delete</button></div>";

        $("#unfinished-tasks").append(inputdiv);
        $("#inputbox").val("");
    }
}

    var editItem = function(element) {
        var text = element.innerText;
        var input ="<input onkeyup='save(this)' value='"+ text +"'>";
        $(element).parent().prepend(input);
        $(element).remove();

    };
function save(element){
    if(event.keyCode ===13){
        var text = element.value;
        var span = "<span>"+ text +" </span>";
        $(element).parent().prepend(span);
        $(element).remove();
    }}

function deleteItem(element){
    $(element).parent().remove();
}



