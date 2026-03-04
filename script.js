// Select the form
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get input fields
  const name = document.querySelector("input[name='name']");
  const email = document.querySelector("input[name='email']");
  const phone = document.querySelector("input[name='phone']");
  const gender = document.querySelectorAll("input[name='gender']");
  const mode = document.querySelectorAll(
    "fieldset:nth-of-type(2) input[type='checkbox']",
  );
  const confirmBox = document.querySelector(
    "fieldset:nth-of-type(3) input[type='checkbox']",
  );

  let valid = true;

  // Name Validation
  if (name.value.trim() === "") {
    alert("Please enter your name");
    valid = false;
  }

  // Email Validation
  if (!email.value.includes("@") || !email.value.includes(".")) {
    alert("Please enter a valid email address");
    valid = false;
  }

  // Phone Validation
  if (phone.value.length !== 10 || isNaN(phone.value)) {
    alert("Phone number must be 10 digits");
    valid = false;
  }

  // Gender Validation
  let genderSelected = false;
  gender.forEach((g) => {
    if (g.checked) {
      genderSelected = true;
    }
  });

  if (!genderSelected) {
    alert("Please select your gender");
    valid = false;
  }

  // Mode Validation
  let modeSelected = false;
  mode.forEach((m) => {
    if (m.checked) {
      modeSelected = true;
    }
  });

  if (!modeSelected) {
    alert("Please select event mode (Online/Offline)");
    valid = false;
  }

  // Confirmation Checkbox
  if (!confirmBox.checked) {
    alert("Please confirm that the details are correct");
    valid = false;
  }

  // If All Valid
  if (valid) {
    alert("Registration Successful 🎉");
    form.reset();
  }
});
