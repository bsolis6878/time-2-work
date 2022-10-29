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
      // replaced with modal
      // alert(response.statusText);

      // Having error write to console for debugging
      console.log(response.statusText);

      console.log(response);
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

console.log("login.js");
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
