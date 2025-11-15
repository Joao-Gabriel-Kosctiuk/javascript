const pi = 3.14159;
let radius;
let circumference;

document.getElementById("button").onclick = function(){
    radius = document.getElementById("input").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("h3").textContent = `Circumference = ${circumference} cm`;
}
