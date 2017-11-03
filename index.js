

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
        var inputdiv = "<div><span><input type='checkbox' value='1'/>" + thelabel + "</span><button onclick='editItem(this)'>Edit</button><button onclick='doneBtn(this)'>Done</button><button onclick='deleteItem(this)'>Delete</button></div>";
        $("#unfinished-tasks").append(inputdiv);
        $("#addinput").val("");
    }
}

function editItem(element){
    $(element).parent().change();
}


function deleteItem(element){
    //$(element)
    console.log($(element).parent());
    $(element).parent().remove();
}
/*function doneBtn(){

}*/
/*function addItem(){
    var theLabel = document.getElementById("inputbox").innerHTML.value;
    if(theLabel !== ""){
        var box = "<div><span>" + thelabel + "</span><button onclick='deleteItem(this)'>DELETE</button></div>";
        document.getElementById("unfinished-tasks").appendChild(li);
        document.getElementById("inputbox").innerHTML.valueof();
    }
    if (theLabel !== "") {
        var inputBox = "<div><span>" + thelabel + "</span><button onclick='deleteItem(this)'>DELETE</button></div>";
        $("#unfinished-tasks").append("unfinished-tasks");
        $("#inputbox").val("");
    }
}
*/

