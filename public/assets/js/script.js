$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burgerForm").val().trim(),
      devoured: false,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("A new burger has been created");
      location.reload();
    });
  });

  $(".change-devoured").on("click", function (event) {
    const id = $(this).data("id");

    const newDevouredBurger = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredBurger,
    }).then(function () {
      location.reload();
    });
  });
});
