const eyeIconEl = document.querySelector("#eye-toggle");
const passwordEl = document.querySelector("#password-edit");

async function editUserHandler(event) {
  event.preventDefault();

  const username = document
    .querySelector('input[name="username-edit"]')
    .value.trim();
  const email = document.querySelector('input[name="email-edit"]').value.trim();
  const password = document
    .querySelector('input[name="password-edit"]')
    .value.trim();
  const name = document.querySelector('input[name="name-edit"]').value.trim();
  const address = document
    .querySelector('input[name="address-edit"]')
    .value.trim();
  const phone = document
    .querySelector('input[name="number-edit"]')
    .value.trim();
  const tax_id = document.querySelector('input[name="tax-edit"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      username,
      email,
      password,
      name,
      address,
      phone,
      tax_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/manage");
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
  .querySelector(".edit-form")
  .addEventListener("submit", editUserHandler);
