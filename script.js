var con = document.querySelector("#container");
var icon = document.querySelector("#icons");

con.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%,-50%) scale(1)";
  icon.style.opacity = 0.9;

  setTimeout(function () {
    love.style.transform = 0;
  }, 1000);
  setTimeout(function () {
    icon.style.transform = "translate(-50%,-50%) scale(0)";
  }, 800);
});
