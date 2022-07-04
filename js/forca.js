let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "ARGENTINA",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "ALEMANHA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "CROACIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "FRANCA",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "HUNGRIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "ISRAEL",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "CARRO",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "AVIAO",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "ARERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "MOBILETE",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },
    palavra022 = {
        nome: "GATO",
        categoria: "ANIMAIS"
    },
    palavra023 = {
        nome: "PAPAGAIO",
        categoria: "ANIMAIS"
    },
    palavra024 = {
        nome: "URSO",
        categoria: "ANIMAIS"
    },
    palavra025 = {
        nome: "PASSARO",
        categoria: "ANIMAIS"
    },
    palavra026 = {
        nome: "OVELHA",
        categoria: "ANIMAIS"
    },
    palavra027 = {
        nome: "BALEIA",
        categoria: "ANIMAIS"
    },
    palavra028 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra029 = {
        nome: "GIRAFA",
        categoria: "ANIMAIS"
    },
    palavra030 = {
        nome: "CAVALO",
        categoria: "ANIMAIS"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)


    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }


}
function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#8b008b";
    document.getElementById(tecla).style.color = "#ffffff";

}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("Poxa, Não foi dessa vez...", "A palavra secreta era: <br>" + palavraSecretaSorteada);
        }
        //verifica se ainda tem tentativas // se não tiver aparecer mensagem na tela
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS", "Você acertou!!!");
        tentativas = 0;
    }

}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('/img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('/img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('/img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('/img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('/img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('/img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('/img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function () {
    location.reload();
});
