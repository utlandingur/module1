// When the user clicks the hamburger icon, set the display to absolute
// When the user clicks the close icon, set the display to none

// Grab the div which contains the menu overlay (it is set to none by default as is therefore hidden)

const overlay = document.querySelector(
  ".menu-overlay"
) as HTMLDivElement | null;

const navBar = document.querySelector(".nav-bar") as HTMLDivElement | null;

// Grab the hamburger icon
const hamburger = document.querySelector(
  ".hamburger"
) as HTMLImageElement | null;

// For the hamburger icon, add an event listener, so we know when it is clicked

hamburger?.addEventListener("click", () => {
  // If the menu is displayed, set the display to none, otherwise set it to block
  // This will toggle the display of the menu overlay

  if (overlay === null) return;

  if (overlay.style.display === "none" || overlay.style.display === "") {
    overlay.style.display = "block";
    overlay.classList.remove("hide");
    overlay.classList.add("show");
    if (navBar) {
      navBar.style.backgroundColor = "transparent";
      navBar.style.backdropFilter = "none";
    }
    document.body.style.overflow = "hidden"; // Prevent scrolling when the menu is open
  } else {
    overlay.classList.remove("show");
    overlay.classList.add("hide");
    document.body.style.overflow = "auto"; // Allow scrolling when the menu is closed
    if (navBar) {
      navBar.style.backgroundColor = "rgba(255, 208, 0, 0.86)";
      navBar.style.backdropFilter = "blur(10px)";
    }
    // Wait for the animation to finish before setting the display
    setTimeout(() => { 
      overlay.style.display = "none";
    }, 500);
  }
});
