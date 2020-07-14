$(function () {
  $("#new-burger-btn").on("click", (event) => {
    event.preventDefault();
    const newBurger = {
      name: $("#new-burger").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then( () =>{
      location.reload();
    });
  });
  $(".devour-burger").on("click", (event)=>{
    const id = $(this).data("id");
    const name = $(this).data("name")
    const devouredBurger = {
        name:name
    }

    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        () =>{
          // Reload the page to get the updated list
          location.reload();
        }
      );
  })


});
