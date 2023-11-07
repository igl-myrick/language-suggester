// business logic

// ui logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector("div#result1").removeAttribute("class");
  });
});