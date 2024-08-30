// Display Sign up form when sign up link is clicked
document.querySelector("#signup-link").addEventListener("click", () => {
  document.querySelector(".login-form-section").classList.add("d-none");
  document.querySelector(".signup-form-section").classList.remove("d-none");
  document.querySelector(".signup-form-section").classList.remove("d-block");
});

// Display login form when login link is clicked
document.querySelector("#login-link").addEventListener("click", () => {
  document.querySelector(".signup-form-section").classList.add("d-none");
  document.querySelector(".login-form-section").classList.remove("d-none");
  document.querySelector(".login-form-section").classList.remove("d-block");
});

//Logic for user sign in or login
document.querySelector(".sign-in-btn").addEventListener("click", () => {
  let userEmail = document.querySelector("#login-email").value;
  let userPassword = document.querySelector("#login-password").value;

  //Checking for empty values in input fields
  if (!userEmail || !userPassword) {
    alert("Email and password field's can't be empty!");
  }
  //Checking whether the user has an account
  else if (!localStorage.getItem(userEmail)) {
    alert(
      `No user found with email ${userEmail} \nPlease click on Signup to create an account`
    );
  } else if (localStorage.getItem(userEmail) === userPassword) {
    alert(
      `Hello! welcome to internet card ${userEmail.slice(
        0,
        userEmail.indexOf("@")
      )}`
    );
  } else {
    alert("Incorrect user name or password");
  }
});

//Signing up for a new account
document.querySelector(".sign-up-btn").addEventListener("click", () => {
  let signupEmail = document.querySelector("#signup-email").value;
  let signupPassword = document.querySelector("#signup-password").value;
  let signupConfirmPassword = document.querySelector(
    "#signup-confirm-password"
  ).value;

  //Checking for empty values in input fields
  if (!signupEmail || !signupPassword || !signupConfirmPassword) {
    alert("Email and password's field's can't be empty!");
  } // Checking for passwords mismatch
  else if (signupPassword !== signupConfirmPassword) {
    alert("Passwords do not match, please reverify!");
  } else {
    alert("Account created successfully!");
    localStorage.setItem(signupEmail, signupPassword);
  }
});
