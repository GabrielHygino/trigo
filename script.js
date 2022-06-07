
var url = "http://127.0.0.1:8081/receita";//Sua URL

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

console.log(xhttp.responseText);


