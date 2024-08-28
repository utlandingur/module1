// When the user clicks the hamburger icon, set the display to absolute
// When the user clicks the close icon, set the display to none

// Grab the div which contains the menu overlay (it is set to none by default as is therefore hidden)

const menu = document.querySelector(".menu-overlay") as HTMLDivElement;

// Grab the hamburger icons (we'll have two, one on nav bar and one on the menu overlay)
// We use querySelectorAll because there are multiple elements with the class hamburger
// We cast the result to a NodeListOf<HTMLDivElement> because we know the elements are divs

const hamburgers = document.querySelectorAll(
  ".hamburger"
) as NodeListOf<HTMLDivElement>;

// For each hamburger icon, add an event listener, so we know when it is clicked

hamburgers?.forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    // If the menu is displayed, set the display to none, otherwise set it to block
    // This will toggle the display of the menu overlay

    menu.style.display === "none"
      ? (menu.style.display = "block")
      : (menu.style.display = "none");
  });
});
