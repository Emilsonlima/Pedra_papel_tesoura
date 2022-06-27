var nomejogador = window.prompt("Qual o seu nome? ")
var jogadorEscolha = 0;
var jogadorPontos = 0
var computadorEscolha = 0;
var computadorPontos = 0
var ganhador = -1;


document.getElementById("nome-jogador").innerHTML = nomejogador; 


function jogar(escolha) {
    jogadorEscolha = escolha
    computadorEscolha = Math.floor(Math.random() * 3 +( 2 - 1));


    if ((jogadorEscolha == 1) && (computadorEscolha == 1)) {
        document.getElementById('pedrapc').src ="imgs/pedra-on.png";
        document.getElementById('papelpc').src ="imgs/papel-off.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-off.png";
        ganhador = 0;
    } else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
        document.getElementById('pedrapc').src ="imgs/pedra-off.png";
        document.getElementById('papelpc').src ="imgs/papel-on.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-off.png";
        ganhador = 2;
    } else if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
        document.getElementById('pedrapc').src ="imgs/pedra-off.png";
        document.getElementById('papelpc').src ="imgs/papel-off.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-on.png";
        ganhador = 1;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 1)) {
        document.getElementById('pedrapc').src ="imgs/pedra-on.png";
        document.getElementById('papelpc').src ="imgs/papel-off.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-off.png";
        ganhador = 1;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 2)) {
        document.getElementById('pedrapc').src ="imgs/pedra-off.png";
        document.getElementById('papelpc').src ="imgs/papel-on.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-off.png";
        ganhador = 0;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 3)) {
        document.getElementById('pedrapc').src ="imgs/pedra-off.png";
        document.getElementById('papelpc').src ="imgs/papel-off.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-on.png";
        ganhador = 2;
    }else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
        document.getElementById('pedrapc').src ="imgs/pedra-on.png";
        document.getElementById('papelpc').src ="imgs/papel-off.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-off.png";
        ganhador = 2;
    }else if ((jogadorEscolha == 3) && (computadorEscolha == 2)) {
        document.getElementById('pedrapc').src ="imgs/pedra-off.png";
        document.getElementById('papelpc').src ="imgs/papel-on.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-off.png";
        ganhador = 1;
    }else {
        document.getElementById('pedrapc').src ="imgs/pedra-off.png";
        document.getElementById('papelpc').src ="imgs/papel-off.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-on.png";
        ganhador = 0;
    }

    if (ganhador == 0) {
        document.getElementById('mensagens').innerHTML = 'Empate';
    }
    else if(ganhador == 1) {
        document.getElementById('mensagens').innerHTML = 'Você Venceu!';
        jogadorPontos++;
    }
    else if(ganhador == 2) {
        document.getElementById('mensagens').innerHTML = 'Você Perdeu!';
        computadorPontos++;
    }

    document.getElementById('pontosJogador').innerHTML = jogadorPontos;
    document.getElementById('pontosCPU').innerHTML = computadorPontos;
}
 




    function PedraAcesa() {
    document.getElementById('img-rock').src="imgs/pedra-on.png";
    document.getElementById('img-paper').src="imgs/papel-off.png";
    document.getElementById('img-sisor').src="imgs/tesoura-off.png";
}
function PapelAceso() {
    document.getElementById('img-rock').src="imgs/pedra-off.png";
    document.getElementById('img-paper').src="imgs/papel-on.png";
    document.getElementById('img-sisor').src="imgs/tesoura-off.png";
}
function TesouraAcesa() {
    document.getElementById('img-rock').src="imgs/pedra-off.png";
    document.getElementById('img-paper').src="imgs/papel-off.png";
    document.getElementById('img-sisor').src="imgs/tesoura-on.png";
}




if ((jogador == 1) && (computador == 1)) {
    document.getElementById('pontosJogador').innerHTML = pontosJogador
}