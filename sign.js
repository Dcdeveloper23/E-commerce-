document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    var isValid = true;

    // Check if all fields are filled
    if (!name) {
      alert("Name is required!");
      isValid = false;
    }

    if (!email) {
      alert("Email is required!");
      isValid = false;
    }

    if (!password) {
      alert("Password is required!");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    document.getElementById("successMessage").style.display = "block";
    document.getElementById("signupForm").reset();
  });

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
