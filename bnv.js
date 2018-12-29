/**
 * Created with JetBrains PhpStorm.
 * User: Student
 * Date: 28.12.18
 * Time: 12:09
 * To change this template use File | Settings | File Templates.
 */
var usersListsContainer = $("#app .item .lists");

var userForm = $("#user-form");
var userFormName = $("#user-name");

var getAllUsers = function(url){

    $.get(url,function(data){
        renderUsers(data);
    })
};

var renderUsers = function(arrayUsers){
    usersListsContainer.html("");
    $.each(arrayUsers, function(index, user){
        console.log(user);
        var buttonDel = "<button data-id='"+user.id+"'>delete</button>";
        var buttonView = "<button data-id='"+user.id+"'>View</button>";
        var controls = "<div class='controls'>"+buttonDel+buttonView+"</div>";
        var h2 = "<h2>"+user.name+"</h2>";
        var item = "<div class='item'>"+h2+controls+"</div>";
        usersListsContainer.append(item);

    })
};

userForm.on("submit", function(e){
    e.preventDefault()
    $.post(url_get_users),(
        name:userFormName.val()
    ),function(res){
        getAllUsers(url_get_users);
    )}
})

$(document).ready(function(){
    getAllUsers(url_get_users);
});
