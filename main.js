
var url_get_users ='http://fomatodo.zzz.com.ua/api/users';
var url_get_todos ='http://fomatodo.zzz.com.ua/api/todos';
var url_get_notes ='http://fomatodo.zzz.com.ua/api/notes';


var activeUser = null;

var TodosList = (".item2 .lists");
var getUserTodosById = function(id){
    $.get(url_get_todos+"/"+id, function(data){
        console.log(data)})
}

var getAllUsers = function(url){
    $.get(url, function(data){
        $.each(data, function(index, user){
            renderUsersLists(data)
        })
    })
}


var usersLists = $(".item1 .lists");

var renderUsersLists = function(array){
    usersLists.html("")
    $.each(array, function(index, user){
        var buttonDel = "<button data-id="+user.id+">del</button>"
        var buttonPrev = "<button data-id="+user.id+">prev</button>"
        var userH4 = "<h4 class='userName'>"+user.name+"</h4>"
        var Controls = "<div class='form-controls'>"+buttonDel+buttonPrev+"</div>"
        var userList = "<li class='list'>"+userH4+Controls+"</li>"
        usersLists.append(userList)
    })
}


$(document).ready(function(e){
    getAllUsers(url_get_users)
    usersLists.on("click", function(e){
        if(e.target.matches(userPreview))
    })


})