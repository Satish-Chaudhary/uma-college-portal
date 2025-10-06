// pages/privacy.js
document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set last updated date
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("lastUpdated").textContent = lastUpdated;
});