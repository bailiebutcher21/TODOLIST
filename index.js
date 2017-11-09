$("#inputbox").keyup(function(event){
    var input = $("#inputbox").val();
    if(event.keyCode ===13){
        addItem(input);
    }
});

function addItem(input) {
    var thelabel = $("#inputbox").val();
    if (thelabel !== "") {
        var inputdiv = "<div id='lists'><span onclick='editItem(this)'>" + thelabel + "</span><button id=deletebutton onclick='deleteItem(this)'>DELETE</button><button class='completedbtn' onclick='completeItem(this)'>COMPLETE</button></div>";

        $("#unfinished-tasks").append(inputdiv);
        $("#inputbox").val("");
    }
}

var completeItem = function(element){
    $("#completed-tasks").append($(element).parent());
    var btn = $(element).parent();
    $(btn).find(".completedbtn").remove();

};

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






