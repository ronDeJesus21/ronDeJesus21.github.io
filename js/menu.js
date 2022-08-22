const menuTrigger = document.querySelector("#menuTrigger");
const menuIcon = document.querySelector("#menuIcon");
const menuContainer = document.querySelector("#menuContainer");
const liContainer1 = document.querySelector("#liContainer1");
const liContainer2 = document.querySelector("#liContainer2");
const liContainer3 = document.querySelector("#liContainer3");
const liContainer4 = document.querySelector("#liContainer4");

menuTrigger.addEventListener("click", () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.add("fa-close");
    menuIcon.classList.remove("fa-bars");

    menuContainer.classList.add("show");
    menuContainer.classList.remove("hide");
  } else {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-close");

    menuContainer.classList.add("hide");
    menuContainer.classList.remove("show");
  }
});

menuContainer.addEventListener("click", () => {
  menuContainer.classList.add("hide");
  menuContainer.classList.remove("show");

  menuIcon.classList.add("fa-bars");
  menuIcon.classList.remove("fa-close");
});

liContainer1.addEventListener("click", () => {
  liContainer1.classList.add("li-color");
  liContainer2.classList.remove("li-color");
  liContainer3.classList.remove("li-color");
  liContainer4.classList.remove("li-color");
});

liContainer2.addEventListener("click", () => {
  liContainer1.classList.remove("li-color");
  liContainer2.classList.add("li-color");
  liContainer3.classList.remove("li-color");
  liContainer4.classList.remove("li-color");
});

liContainer3.addEventListener("click", () => {
  liContainer1.classList.remove("li-color");
  liContainer2.classList.remove("li-color");
  liContainer3.classList.add("li-color");
  liContainer4.classList.remove("li-color");
});

liContainer4.addEventListener("click", () => {
  liContainer1.classList.remove("li-color");
  liContainer2.classList.remove("li-color");
  liContainer3.classList.remove("li-color");
  liContainer4.classList.add("li-color");
});
