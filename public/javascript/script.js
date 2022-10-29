const modalEl = document.querySelector(".modal");
const modalTitleEl = document.querySelector(".modal-card-title");
const modalMessageEl = document.querySelector(".modal-card-body");
const modalButtonEl = document.querySelector(".modalButton");

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

// Functions to open and close a modal
function openModal(modalTitle, modalBody, modalButton) {
  // const modalEl = document.querySelector(".modal");
  // const modalTitleEl = document.querySelector(".modal-card-title");
  // const modalMessageEl = document.querySelector(".modal-card-body");
  // const modalButtonEl = document.querySelector(".modalButton");

  modalTitleEl.innerHTML = modalTitle;
  modalMessageEl.innerHTML = modalBody;
  modalButtonEl.innerHTML = modalButton;

  modalEl.classList.add("is-active");
}

function closeModal() {
  modalEl.classList.remove("is-active");
}

// Add a click event on various child elements to close the parent modal
(
  document.querySelectorAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  ) || []
).forEach(($close) => {
  const $target = $close.closest(".modal");

  $close.addEventListener("click", () => {
    closeModal($target);
  });
});

// Add a keyboard event to close all modals
document.addEventListener("keydown", (event) => {
  const e = event || window.event;

  if (e.keyCode === 27) {
    // Escape key
    closeAllModals();
  }
});

console.log("Running script.js");
