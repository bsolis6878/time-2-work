const eyeIconEl = document.querySelector("#eye-toggle");
const passwordEl = document.querySelector("#password-login");

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      // replaced with modal prompt
      // alert(response.statusText);

      // Having error write to console for debugging
      console.log(response.statusText);

      // Creating modal for user to inform them of the incorrect password.
      // function in script.js to create modal.
      // input title, body, button label
      openModal(
        "Login Error",
        "The username and/or password as incorrect.",
        "OK"
      );
    }
  }
}

// toggles show/hide password
function eyeToggle() {
  const elType = passwordEl.getAttribute("type");

  if (elType === "password") {
    passwordEl.setAttribute("type", "text");
  } else {
    passwordEl.setAttribute("type", "password");
  }

  eyeIconEl.classList.toggle("fa-eye");
  eyeIconEl.classList.toggle("fa-eye-slash");
}

eyeIconEl.addEventListener("click", () => {
  eyeToggle();
});

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
