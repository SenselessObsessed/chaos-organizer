import ChaosOrganizer from "./ChaosOrganizer";
import "./searchLink";

const chaosOrganizer = new ChaosOrganizer(document.body);
chaosOrganizer.bindToDOM();

// document
//   .querySelector(".messages__container")
//   .addEventListener("dragenter", () => {
//     const placeKaroch = document.querySelector(".drop");
//     placeKaroch.style.display = "block";
//   });

// document.querySelector(".messages").addEventListener("dragenter", () => {
//   const placeKaroch = document.querySelector(".drop");
//   placeKaroch.style.display = "block";
// });

// document.querySelector(".drop").addEventListener("dragleave", (e) => {
//   e.target.style.display = "none";
// });

// document.querySelector(".drop-file").addEventListener("drop", () => {
//   document.querySelector(".drop").style.display = "none";
// });
