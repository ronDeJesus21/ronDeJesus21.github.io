const createButton = document.querySelector("#createButton");
const modalContainer = document.querySelector(".modal-container");
const iconClose = document.querySelector("#iconClose");

createButton.addEventListener("click", () => {
  if (modalContainer.classList.contains("hide")) {
    modalContainer.classList.add("show");
    modalContainer.classList.remove("hide");
  } else {
    modalContainer.classList.add("hide");
    modalContainer.classList.remove("show");
  }
});

iconClose.addEventListener("click", () => {
  modalContainer.classList.add("hide");
  modalContainer.classList.remove("show");

  console.log("hello ronel de jesus");
});
