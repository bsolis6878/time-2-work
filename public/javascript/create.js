const eyeIconEl = document.querySelector("#eye-toggle");
const passwordEl = document.querySelector("#password-signup");

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const name = document.querySelector("#name-signup").value.trim();
  const addr1 = document.querySelector("#address-signup").value.trim();
  const phone_number = document.querySelector("#phone-signup").value.trim();
  const tax_id = document.querySelector("#tax-signup").value.trim();

  if (
    username &&
    email &&
    password &&
    name &&
    addr1 &&
    phone_number &&
    tax_id
  ) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
        name,
        addr1,
        phone_number,
        tax_id,
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
        "Input Error",
        "The input entered is not valid. Please verify the password is valid and/or the tax-id is numeric.",
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
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
