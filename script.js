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
const openModalBtnF = document.getElementById("openModall");
const openModalBtnL = document.getElementById("openModallink");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
const inputText = document.getElementById("inputText");
const inputTel = document.getElementById("inputTel");

const modalButtons = [openModalBtn, openModalBtnF, openModalBtnL];

function openModal() {
  modal.style.display = "block";
}
modalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

const checkValue = () => {
  const textValue = inputText.value;
  const telValue = inputTel.value;

  const textPattern = /^[a-zA-Zа-яА-Я\s]+$/;

  const telPattern = /^\d+$/;

  if (textPattern.test(textValue) && telPattern.test(telValue)) {
    return true;
  } else {
    alert("Все поля должны быть заполнены правильно");
    inputText.style.border = "2px solid red";
    inputTel.style.border = "2px solid red";
    return false;
  }
};

closeModalBtn.addEventListener("click", function () {
  if (checkValue()) {
    modal.style.display = "none";
  }
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
