function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var date = document.getElementById("date").value;
  var color = document.getElementById("color").value;

  var errors = [];

  if (name === "") {
    errors.push("Name is required");
  }

  if (email === "") {
    errors.push("Email is required");
  } else if (!validateEmail(email)) {
    errors.push("Invalid email format");
  }

  if (phoneNumber === "") {
    errors.push("Phone number is required");
  } else if (!validatePhoneNumber(phoneNumber)) {
    errors.push("Invalid phone number format");
  }

  if (password === "") {
    errors.push("Password is required");
  }

  if (age === "") {
    errors.push("Age is required");
  } else if (isNaN(age)) {
    errors.push("Age must be a number");
  }

  if (gender === "") {
    errors.push("Gender is required");
  }

  if (date === "") {
    errors.push("Date is required");
  }

  if (color === "") {
    errors.push("Color is required");
  }

  if (errors.length > 0) {
    document.getElementById("error-messages").innerHTML = errors.join("<br>");
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
  var re = /^\d{10}$/; // Assuming 10-digit phone number
  return re.test(phoneNumber);
}
