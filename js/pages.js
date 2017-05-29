// Handle page transitions

document.getElementById("submit").onclick = function () {

  var id = document.getElementById("tokenid").value;
  if (id != "1111" && id != "1357" && id != "2468" && id != "9999"){
    document.getElementById("error").classList.remove("no-error");
    document.getElementById("error").classList.add("error");
  } else {
    var notes = document.getElementById("notes").value;
    sessionStorage.setItem('notes', notes);
    location.href = "https://adamgyee12.github.io/PayItForward/" + id + ".html";
    //location.href = "localhost:8000/" + id + ".html";
  }
    //location.href = "http://localhost:8000/giotto.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};
