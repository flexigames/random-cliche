import cliches from "./cliches";

showRandomQuote();

document.querySelector(".main")!.addEventListener("submit", (e) => {
  e.preventDefault();
  showRandomQuote();
  return false;
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    showRandomQuote();
  }
});

function showRandomQuote() {
  document.getElementById("quote")!.innerHTML =
    cliches[Math.floor(Math.random() * cliches.length)];
}
