let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("nome").value;
    document.getElementById("h1").textContent = `Bem vindo, ${username}`;
}