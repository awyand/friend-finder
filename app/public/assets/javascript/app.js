$(document).ready(function() {

  // Listen for submit button to be clicked
  $(document).on("click", "#submit", function(e) {
    // Prevent default
    e.preventDefault();

    // Define inputValidation function
    function inputValidation() {
      // Initialize validation boolean to true
      var inputValid = true;
      // Check each .form-control input
      $(".form-control").each(function() {
        // If input is empty
        if ($(this).val() === "") {
          // Set boolean to false
          inputValid = false;
        }
      });
      // Return inputValid
      return inputValid;
    }

    // If inputValidation returns true
    if (inputValidation()) {
      // Save user input to an object
      var userInput = {
        name: $("#user-name").val().trim(),
        photo: $("#user-image").val().trim(),
        scores: [
          $("#statement-1").val(),
          $("#statement-2").val(),
          $("#statement-3").val(),
          $("#statement-4").val(),
          $("#statement-5").val(),
          $("#statement-6").val(),
          $("#statement-7").val(),
          $("#statement-8").val(),
          $("#statement-9").val(),
          $("#statement-10").val(),
        ]
      };

      // Make AJAX POST request, sending userInput object
      $.post("/api/friends", userInput).done(function(res) {
        // Log AJAX response for testing
        console.log(res);
        // Enter response data into modal
        $("#result-name").text(res.name);
        $("#result-image").attr("src", res.photo);
        // Show modal
        $("#result-modal").modal("show");
      });

    } else {
      // Otherwise there is a blank and the user should be alerted
      $("#error-modal").modal("show");
    }
  });
});
