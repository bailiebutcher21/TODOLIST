

$(function(){
    $("#add-task").click(function(){
        addItem();
    });

    /*$("#inputbox").keyup(function(event){
        if(event.keyCode ===13){
            addItem();
        }
    });*/
});

function addItem() {
    var thelabel = $("#addinput").val();
    if (thelabel !== "") {
        var inputdiv = "<div id='creatediv'><span>" + thelabel + "</span><button onclick='editItem(this)'>Edit</button><button onclick='deleteItem(this)'>Delete</button></div>";
        $("#unfinished-tasks").append(inputdiv);
        $("#addinput").val("");
    }
}

function editItem(element){

}

function deleteItem(element){
    $(element).parent().remove();
}
/*function doneBtn(){
    $(document.getElementById('checkbox').click());
    $("#completed-tasks").append(inputdiv);
        $("#addinput").val("");
}*/


