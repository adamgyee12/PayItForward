// Handle page transitions

document.getElementById("submit").onclick = function () {

  var id = document.getElementById("tokenid").value;
  location.href = "http://localhost:8000/" + id + ".html";
    //location.href = "http://localhost:8000/giotto.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};
