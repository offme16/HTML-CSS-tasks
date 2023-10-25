const portfslider = document.querySelectorAll(".portfolio-slider__images");
const nextBtn = document.getElementById("next-button");
const pervBtn = document.getElementById("prev-button");
const fullphoto = document.querySelector(".full img");
let currentIndex = 1;
function updateImage(index) {
  fullphoto.src = portfslider[index].src;
}
updateImage(currentIndex);

portfslider.forEach((portf, index) => {
  portf.addEventListener("click", () => {
    currentIndex = index;
    updateImage(currentIndex);
  });
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % portfslider.length;
  updateImage(currentIndex);
});
pervBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + portfslider.length) % portfslider.length;
  updateImage(currentIndex);
});

//modal-window
const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
const inputText = document.getElementById("inputText");
const inputTel = document.getElementById("inputTel");
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
  const inputTex = inputText.value;
  const inputNum = inputTel.value;
  if (inputTex !== "" && inputNum !== "") {
    modal.style.display = "none";
  } else {
    alert("Пол не должны быть пустыми!");
  }
});
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
