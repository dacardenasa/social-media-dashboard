const checkbox = document.querySelector("#input-theme");
const title = document.querySelector("#theme-box-title");
const html = document.querySelector("#html-content");

checkbox.addEventListener("click", function(event){
  if (!checkbox.checked) {
    title.innerHTML = "Light Mode";
    html.setAttribute("data-theme", "dark");
  } else {
    title.innerHTML = "Dark Mode";
    html.setAttribute("data-theme", "light");
  }
});