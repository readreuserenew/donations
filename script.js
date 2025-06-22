function showSection(id) {
  const sections = ['login', 'register', 'home', 'donate', 'chat'];
  sections.forEach(section => {
    document.getElementById(section).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

// Login form validation
function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }
  if (!password || password.length < 6) {
    error.textContent = "Password must be at least 6 characters long.";
    return false;
  }

  error.textContent = "";
  alert("Login successful!");
  return false;
}

// Register form validation
function validateRegister() {
  const username = document.getElementById("regUsername").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const termsChecked = document.getElementById("termsCheckbox").checked;
  const error = document.getElementById("registerError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!username) {
    error.textContent = "Please enter a username.";
    return false;
  }
  if (!email || !emailPattern.test(email)) {
    error.textContent = "Please enter a valid email.";
    return false;
  }
  if (!password || password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }
  if (!termsChecked) {
    error.textContent = "You must accept the Terms & Conditions.";
    return false;
  }

  error.textContent = "";
  alert("Registration successful!");
  return false;
}

// Donation form validation
function validateDonation() {
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const image = document.getElementById("bookImage").files[0];
  const name = document.getElementById("donorName").value.trim();
  const location = document.getElementById("donorLocation").value.trim();
  const error = document.getElementById("donateError");

  if (!title || !author || !image || !name || !location) {
    error.textContent = "Please fill in all fields and select an image.";
    return false;
  }

  error.textContent = "";
  alert("Thank you for your donation! 📚");
  document.getElementById("donateForm").reset();
  document.getElementById("preview").style.display = "none";
  return false;
}

// Image upload preview
function previewImage() {
  const file = document.getElementById('bookImage').files[0];
  const preview = document.getElementById('preview');

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}