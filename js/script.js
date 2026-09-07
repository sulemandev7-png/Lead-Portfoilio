// ==================== Mobile Nav Toggle ====================
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ==================== Contact Form ====================
// Sign up at formspree.io, create a form, and paste your endpoint below to receive submissions by email.
const FORM_ENDPOINT = "https://formspree.io/f/https://formspree.io/f/xrpgyyan";

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    formNote.textContent = "Please fill in all fields before submitting.";
    formNote.style.color = "#d64545";
    form.reportValidity();
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  formNote.textContent = "Sending...";
  formNote.style.color = "#64708a";

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });

    if (response.ok) {
      formNote.textContent =
        "Thanks! Your request has been sent — I'll be in touch within 1 business day.";
      formNote.style.color = "#2f6bff";
      form.reset();
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    formNote.textContent =
      "Something went wrong sending your request. Please try again or email me directly.";
    formNote.style.color = "#d64545";
  } finally {
    submitBtn.disabled = false;
  }
});

// ==================== Footer Year ====================
document.getElementById("year").textContent = new Date().getFullYear();
