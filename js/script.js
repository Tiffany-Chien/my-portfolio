// ================================ DARK THEME ================================ //

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVIOUSLY SELECTED TOPIC
// check if usered selected, we check from local storage
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("seleceted-item");

// Obtain the current theme that the interface has by validating the dark theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validate if the user have previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually by clicking the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// TODO: delete this debug console log
console.log("Theme Setting is working!");

// ================================ MENU SHOW Y HIDDEN ================================ //
