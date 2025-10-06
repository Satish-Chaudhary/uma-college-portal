// admin.js

// Handle Admin Login
document.getElementById("adminLoginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  // In real app: validate with backend
  if (email && password) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter both fields.");
  }
});

// Handle Notice Form
document.getElementById("noticeForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Notice posted successfully!");
  this.reset();
});

// Handle Event Form
document.getElementById("eventForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Event added to calendar!");
  this.reset();
});

// Handle Gallery Upload
document.getElementById("galleryForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Photos uploaded to gallery!");
  this.reset();
});

// Simulate Delete Actions
document.querySelectorAll(".btn-sm.danger").forEach(btn => {
  btn.addEventListener("click", function() {
    if (confirm("Are you sure you want to delete this item?")) {
      alert("Item deleted.");
      this.closest("tr, li")?.remove();
    }
  });
});