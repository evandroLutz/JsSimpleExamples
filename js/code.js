
function perguntaNumero() {
    do {
        numero = prompt("Insira o seu numero:");
        confirma = confirm("Seu numero é: " + numero);
    } while (!confirma);
    alert("A página será alterada...");
    document.write("Seu numero é " + numero + ".");

}
function comparaCombustivel() {
    gasolina = prompt("Insira o preço da gasolina");
    alcool = prompt("Insira o preço do Álcool");
    if (alcool <= (0.7 * gasolina)) {
        alert("O álcool é mais vantajoso");
    }
    else {
        alert("A gasolina é mais vantajosa");

    }

}

function IMC(p1, p2) {
    var x = document.getElementById("peso").value;
    var y = document.getElementById("altura").value;
    var a = document.getElementById("Nome").value;

    var z = y * y;

    var w = (x / z) * 10000;



    document.getElementById("demo2").innerHTML = a + " , seu IMC é " + w.toFixed();


    if (w < 20 || w > 50) {


        document.getElementById('demo3').style.color = 'red'

    }
    else {


        document.getElementById('demo3').style.color = 'black'

    }

    if (w < 20) {



        document.getElementById("demo3").innerHTML = "< 20 (Abaixo do peso)";



    }


    if (w > 19 && w < 26) {

        document.getElementById("demo3").innerHTML = "20 a 25 (peso ideal)";


    }


    if (w > 25 && w < 30) {

        document.getElementById("demo3").innerHTML = "26 a 30 (sobrepeso)";


    }


    if (w > 30 && w < 36) {

        document.getElementById("demo3").innerHTML = "31 a 35 (obesidade moderada)";


    }


    if (w > 35 && w < 41) {

        document.getElementById("demo3").innerHTML = "36 a 40 (obesidade severa)";


    }



    if (w > 40 && w < 51) {

        document.getElementById("demo3").innerHTML = "41 a 50 (obesidade mórbida)";


    }


    if (w > 50) {

        document.getElementById("demo3").innerHTML = "< 50 (superObesidade)";


    }

}

function Acende1() {




    document.getElementById('dot').style.filter = "grayscale(0%)";
    document.getElementById('dot2').style.filter = "grayscale(100%)";
    document.getElementById('dot3').style.filter = "grayscale(100%)";
    alert("PARE!");

}
function Acende2() {

    document.getElementById('dot').style.filter = "grayscale(100%)";
    document.getElementById('dot2').style.filter = "grayscale(0%)";
    document.getElementById('dot3').style.filter = "grayscale(100%)";
    alert("Aguarde!");

}
function Acende3() {

    document.getElementById('dot').style.filter = "grayscale(100%)";
    document.getElementById('dot2').style.filter = "grayscale(100%)";
    document.getElementById('dot3').style.filter = "grayscale(0%)";
    alert("Pode Passar!");

}

function RetornaEstacao() {

    var mes = prompt("Digite o mês para saber a estação");

    switch (mes) {
        case "janeiro":
            estacao = "verão";
            break;
        case "feveiro":
            estacao = "verão";
            break;
        case "março":
            estacao = "verão";
            break;
        case "abril":
            estacao = "outono";
            break;
        case "maio":
            estacao = "outono";
            break;
        case "junho":
            estacao = "inverno";
            break;
        case "julho":
            estacao = "inverno";
            break;
        case "agosto":
            estacao = "inverno";
            break;
        case "setembro":
            estacao = "primavera";
            break;
        case "outubro":
            estacao = "primavera";
            break;
        case "novembro":
            estacao = "primavera";
            break;
        case "dezembro":
            estacao = "verão";
            break;
        default:
            alert("o mês não é válido");

    }

    if (estacao != null) {
        alert("A estação é " + estacao);
        estacao = null;
    }
    else {
        alert("o mês não é válido");
    }




}



function DaResp() {
    document.getElementById('button1').style.backgroundColor = "red";
    document.getElementById('button2').style.backgroundColor = "green";
    document.getElementById('button3').style.backgroundColor = "red";
}

function VerificaSenha(senha) {

    var senha = document.getElementById("Senha").value;
    var login =  document.getElementById("Login").value;

    if((senha == "123456") && (login == "usuario123")){

        alert("Login efetuado com Sucesso");
    }
    else{
      

            alert("Login ou Senha inválida");

        }

        
}

