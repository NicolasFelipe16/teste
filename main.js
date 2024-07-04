alert("Ola Feliz Seu dia será muito feliz Hoje e amanhã feliz");
let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = 'seja muito bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}
