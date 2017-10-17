function Validate() {
  var createPassword = document.getElementById("password").value;
  var confirmPassword = document.getElementById("repeatPassword").value;
  if (createPassword != confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
    return true;
}