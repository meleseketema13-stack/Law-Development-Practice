document.addEventListener("DOMContentLoaded", () => {
  // 1. Create and add a Dark Mode Button dynamically to the navigation
  const nav = document.querySelector("nav ul");
  if (nav) {
    const toggleLi = document.createElement("li");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "🌓 Toggle Theme";
    toggleBtn.className = "theme-btn";
    
    toggleLi.appendChild(toggleBtn);
    nav.appendChild(toggleLi);

    // Toggle Dark Mode on Click
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // 2. Add an interactive confirmation message for the membership form link
  const membershipLink = document.querySelector('a[href*="forms.gle"]');
  if (membershipLink) {
    membershipLink.addEventListener("click", (event) => {
      const confirmLeave = confirm("You are now opening the spiritual activities registration form. Proceed?");
      if (!confirmLeave) {
        event.preventDefault(); // Prevents the link from opening if they click 'Cancel'
      }
    });
  }
});