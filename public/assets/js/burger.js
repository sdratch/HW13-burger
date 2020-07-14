$(function () {
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

  $(".devour-burger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
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
