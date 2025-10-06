// student.js

// Handle Login Form
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple mock login (in real app: connect to backend)
  if (email && password) {
    alert("Login successful! Redirecting to dashboard...");
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter both email and password.");
  }
});

// Handle Feedback Form
document.getElementById("feedbackForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your feedback! It has been submitted successfully.");
  this.reset();
});

// Auto-hide dropdown on outside click (optional)
document.addEventListener("click", function(e) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown?.contains(e.target)) {
    const menu = dropdown?.querySelector(".dropdown-menu");
    if (menu) menu.style.display = "none";
  }
});