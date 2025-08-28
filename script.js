// Populate DOB dropdowns
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');

for (let i = 1; i <= 31; i++) {
  daySelect.add(new Option(i, i));
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
months.forEach((month, index) => {
  monthSelect.add(new Option(month, index + 1));
});

for (let y = 2023; y >= 1900; y--) {
  yearSelect.add(new Option(y, y));
}

// Form validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const mobile = document.getElementById('mobile').value;
  const password = document.getElementById('password').value;
  const errors = [];

  if (!/^\d{10}$/.test(mobile)) {
    errors.push("Invalid mobile number! It must be 10 digits.");
  }

  if (!password) {
    errors.push("Password is required!");
  }

  document.getElementById('errors').innerHTML = errors.join('<br>');

  if (errors.length === 0) {
    alert("Form submitted successfully!");
  }
});
