function checkPassword(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Define the correct password here
    const correctPassword = "Varkentje1";
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
      window.location.href = "HOME/dist/index.html"; // Redirect to the other page
    } else {
      alert("Incorrect password. Please leave.");
    }
  }