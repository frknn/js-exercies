$(document).ready(function(){
    var places = $.getJSON("/api/places");

    places
    .then(addPlaces);

    $('#myInput').keypress((e)=>{
        if(e.which == 13){
            addNewCity();
        }
    });

    $(".places").on("click",".fa",function(){
        var clickedItem = $(this).parent().parent();
        var urlToDelete = "/api/places/"+clickedItem.data("id");

        $.ajax({
            method: "DELETE",
            url: urlToDelete
        })
        .then((deletedData)=>{
            console.log(deletedData);
            clickedItem.remove();
        });
    });

    $(".places").on("click","li",function(){
        // console.log($(this).data("isVisited"));
        updateIsVisited($(this));
    });
});

function addPlaces(places){
    places.forEach(function(place){
        addPlace(place);
    })
}

function addPlace(place){
    var newPlace = $('<li class ="placeslist">'+place.name+' <span> <i class="fa fa-trash-o" aria-hidden="true"> </i> </span> </li>');

    //getting id of city we want to delete
    newPlace.data("id", place._id);

    //getting isVisited attribute of city to strikethrough
    newPlace.data("isVisited", place.isVisited);

    if(place.isVisited == true){
        $(newPlace).addClass("visited");
    }

    $('.places').append(newPlace);
}

function addNewCity(){
    var newCity = $("#myInput").val();
    //console.log(newCity);

    $.post("/api/places", {name: newCity})
    .then((newAddedCity)=>{
        addPlace(newAddedCity);
    })

    $("#myInput").val("");
}

function updateIsVisited(place){
    var urlToUpdate = "/api/places/"+place.data("id");
    var visitState = place.data("isVisited");
    var update = {isVisited: !visitState}
    
    $.ajax({
        method: "PUT",
        url: urlToUpdate,
        data:update
    })
    .then((updatedPlace)=>{
        place.toggleClass("visited");
        place.data("isVisited",!visitState);
    })
}