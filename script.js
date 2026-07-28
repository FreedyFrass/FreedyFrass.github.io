var background = document.getElementById("core");

function activate() {
    background.style.backgroundColor = "black";
    background.style.color = "white";
}

background.oneclick = function change() {
    background.style.backgroundColor = "lightcoral";
    background.style.color = "lightleaf";
}
function hideButton() {
  document.getElementById('hideBtn').style.display = 'none';
}
