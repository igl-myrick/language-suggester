window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let createVar = document.querySelector("select#create").value;
  let internetVar = document.querySelector("select#internet").value;
  let efficiency = document.querySelector("select#efficiency").value;
  let gameVar = document.querySelector("select#games").value;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (createVar === "I like the idea of building onto something") {
      return document.getElementById("result4").removeAttribute("class");
    } else if (internetVar === "Yes") {
      return document.getElementById("result3").removeAttribute("class");
    } else if ((efficiency === "Yes") || (gameVar === "No")) {
      return document.getElementById("result2").removeAttribute("class");
    } else {
      return document.getElementById("result1").removeAttribute("class");
    }
  });
});