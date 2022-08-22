const myBody = document.querySelector("#myBody");
const darkTrigger = document.querySelector("#darkTrigger");
const darkIcon = document.querySelector("#darkIcon");

darkTrigger.addEventListener("click", () => {
  if (darkIcon.classList.contains("fa-moon")) {
    darkIcon.classList.add("fa-sun");
    darkIcon.classList.remove("fa-moon");

    myBody.classList.add("myBody");
  } else {
    darkIcon.classList.remove("fa-sun");
    darkIcon.classList.add("fa-moon");

    myBody.classList.remove("myBody");
  }
});
