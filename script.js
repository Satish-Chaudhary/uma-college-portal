    // Mobile Menu Toggle
    document.querySelector('.mobile-toggle').addEventListener('click', () => {
      document.querySelector('.navbar ul').classList.toggle('show');
    });

    // admissions.js

// Toggle Scholarship Option based on Course
function toggleScholarship() {
  const course = document.getElementById("courseSelect").value;
  const scholarshipField = document.getElementById("scholarshipField");

  if (course === "B.Sc (PCM)" || course === "B.Com" || course === "BCA" || course === "Diploma in Web Dev") {
    scholarshipField.style.display = "block";
  } else {
    scholarshipField.style.display = "none";
  }
}

// Mock Status Checker
function checkStatus() {
  const email = document.getElementById("statusEmail").value;
  const appId = document.getElementById("applicationId").value;
  const result = document.getElementById("statusResult");

  if (!email || !appId) {
    result.innerHTML = "Please fill both fields.";
    result.style.color = "red";
    return;
  }

  // Mock response
  const statuses = ["Verified", "Pending", "Under Review", "Confirmed"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  result.innerHTML = `Application Status: <strong>${randomStatus}</strong>`;
  result.style.color = randomStatus === "Confirmed" ? "green" : "#002366";
}

// Form Submission (Frontend Validation)
document.getElementById("admissionForm").addEventListener("submit", function (e) {
  const captcha = document.getElementById("captcha").value;

  if (parseInt(captcha) !== 8) {
    e.preventDefault();
    alert("CAPTCHA is incorrect. 5 + 3 = ?");
  } else {
    alert("Application submitted successfully! Our team will contact you soon.");
  }
});