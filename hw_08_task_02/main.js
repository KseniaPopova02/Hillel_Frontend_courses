const btnPrompt = document.querySelector(".prompt");
const btnWebsite = document.querySelector(".website");

let link = "";

function openPrompt() {
  link = prompt("Enter your link:");
}

btnPrompt.addEventListener("click", openPrompt);

function goToLink() {
  document.location.href = link;
}

btnWebsite.addEventListener("click", goToLink);
