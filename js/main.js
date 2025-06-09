const menu = document.querySelector(".mobile-menu");

const OpenMenu = () => {
  menu.classList.add("show-menu");
  document.querySelector(".menu-open").classList.add("remove-icon");
  document.querySelector(".menu-close").classList.add("add-icon");
};
const CloseMenu = () => {
  menu.classList.remove("show-menu");
  document.querySelector(".menu-open").classList.remove("remove-icon");
  document.querySelector(".menu-close").classList.remove("add-icon");
};

const texts = document.querySelectorAll(".hero-text > div");
let index = 0;

setInterval(() => {
  texts[index].classList.remove("active");
  index = (index + 1) % texts.length;
  texts[index].classList.add("active");
}, 4000);

// ===================================================

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default for manual handling

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const phonePattern = /^[6-9]\d{9}$/;
  const submitBtn = document.getElementById("submitBtn");

  if (!name || !phone || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert(
      "Please enter a valid 10-digit Indian mobile number starting with 6-9."
    );
    return;
  }

  submitBtn.innerText = "Submitting...";

  // Send data via AJAX
  const formData = new FormData(this);
  fetch(this.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        submitBtn.innerText = "Submitted";
        setTimeout(() => {
          location.reload(); // Refresh page after 2 seconds
        }, 2000);
      } else {
        alert("Something went wrong. Please try again.");
        submitBtn.innerText = "Submit";
      }
    })
    .catch((error) => {
      alert("Failed to submit form.");
      submitBtn.innerText = "Submit";
    });
});
