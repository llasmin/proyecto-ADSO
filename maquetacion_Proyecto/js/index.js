const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const userText = document.getElementById("username");
const passText = document.getElementById("password");
const loginButton = document.getElementById("submit");
const error = document.getElementById("error");

menuToggle?.addEventListener("click", () => {
  menu.classList.toggle("active");
});

loginButton?.addEventListener("click", () => {
  if (userText.value !== "admin" && passText.value !== "admin") {
    debugger;
    error.style.display = null;
    return;
  }

  localStorage.setItem("user", userText.value);
  window.location.href = "index.html";
});
