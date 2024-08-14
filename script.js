const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de programação?",
            },
            {
                texto: "Não gosta de programação?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou parar e entender o código HTML/CSS/JavaScrip?",
            },
            {
                texto: "Naõ tentei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou auxílio na internet, vídeos no YouTube, entre outros.",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Um bom local para procurar é o W3SCHOOL",
            },
            {
                texto: "Não quero este site.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode procurar apostilas e turoriais também em PDF.",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode ir em uma plataforma de IA, exemplo Geminy, .",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para começar.",
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