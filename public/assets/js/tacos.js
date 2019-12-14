// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {

    //This submit handler adds a new taco to the database so it can be displayed to the user
    $(".newTacoForm").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newTaco = {
            name: $("#typeTaco").val().trim().toLowerCase()
        };

        // Send the POST request.
        $.ajax("/api/tacos", {
            type: "POST",
            data: newTaco
        }).then(
            function () {
                console.log("Ordered a new taco!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //This on click handler changes the devour boolean in the database
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/tacos/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("Changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});