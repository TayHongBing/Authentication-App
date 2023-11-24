const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = []

function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert("Successful login!");
  } else if(!username || !password) {
    alert("Please enter a username and password.");
  } else {
    alert("User not found. Please sign up first.");
  }
}

function signup(username, password, confirmPassword) {
  const regex = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])");
  
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else if (regex.test(password) == false){
    alert("Password must contain at least one number, one uppercase letter, one lowercase letter,   and one special character.");
  } else {
    users.push({ username:username, password: password});
    alert("Sign up successful! You can now log in.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (isLoginForm) {
    login(username, password);
  } else {
    signup(username, password, confirmPassword);
  }
}