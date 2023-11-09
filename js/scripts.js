window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("result4").setAttribute("class", "hidden");
    document.getElementById("result3").setAttribute("class", "hidden");
    document.getElementById("result2").setAttribute("class", "hidden");
    document.getElementById("result1").setAttribute("class", "hidden");

    let createVar = document.querySelector("select#create").value;
    let internetVar = document.querySelector("select#internet").value;
    let organizedVar = document.querySelector("select#efficiency").value;
    let gameVar = document.querySelector("select#games").value;

    if (createVar === "I like the idea of building onto something") {
      return document.getElementById("result4").removeAttribute("class");
    } else if (internetVar === "Yes") {
      return document.getElementById("result3").removeAttribute("class");
    } else if ((organizedVar === "Yes") || (gameVar === "No")) {
      return document.getElementById("result2").removeAttribute("class");
    } else {
      return document.getElementById("result1").removeAttribute("class");
    }
  });
});