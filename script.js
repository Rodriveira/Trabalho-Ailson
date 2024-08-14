const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Conhece o Pedro",
            },
            {
                texto: "Não conheço o Pedro",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Em alguma ocasião esteve presente com ele",
            },
            {
                texto: "Não tive a oportunidade",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Conversei com ele",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Olhe para o lado",
            },
            {
                texto: "Olhe para cima",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Instale o protocolo",
            },
            {
                texto: "Não quero baixar",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Resultado do Protocolo",
            },
            {
                texto: "Sem interesse",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "if you want to defend your freedom, keep the battle uninterruptedly maneauvering the presence of The Mighty God",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();