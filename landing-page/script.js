function openModal() {
    document.getElementById("loginModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  function submitLogin(event) {
    event.preventDefault();
    alert("Login successful!");
    closeModal();
  }
  
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.innerText = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
  });
  