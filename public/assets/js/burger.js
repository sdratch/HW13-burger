$(function () {
    //ajax post call to create a new burger
  $("#new-burger-btn").on("click", function (event) {
    event.preventDefault();
    const newBurger = {
      name: $("#new-burger").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  //ajax put call to update burger devour
  $(".devour-burger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    //When you eat a burger set devoured to true 
    const devouredBurger = {
      devour: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger,
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
