// --- SISTEMA DE ABAS (SOBRE MIM) --- //
function abrirAba(event, idAba){
    event.preventDefault();

    const conteudos = document.querySelectorAll('.conteudo-aba');
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('ativo');
    });

    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
        link.classList.remove('ativo');
    });

    document.getElementById(idAba).classList.add('ativo');
    event.currentTarget.classList.add('ativo');
}


// --- SISTEMA DO CARROSSEL (PROJETOS) --- //
let indiceProjetoAtual = 0;

function mudarProjeto(direcao){
    const slides = document.querySelectorAll('.projeto-slide');

    slides[indiceProjetoAtual].classList.remove('ativo');

    indiceProjetoAtual += direcao;

    if (indiceProjetoAtual >= slides.length){
        indiceProjetoAtual = 0;
    } else if (indiceProjetoAtual < 0 ){
        indiceProjetoAtual = slides.length - 1;
    }
    
    slides[indiceProjetoAtual].classList.add('ativo');
}


// --- EFEITO DE DIGITAÇÃO (MÁQUINA DE ESCREVER) --- //
function efeitoDigitacao(elemento, texto, velocidade) {
    // PROTEÇÃO: Limpa qualquer digitação anterior para não encavalar
    clearTimeout(elemento.timeoutId); 
    
    elemento.innerHTML = ''; 
    let i = 0;
    
    function digitar() {
        if (i < texto.length) {
            if (texto.charAt(i) === '|') {
                elemento.innerHTML += '<br>';
            } else {
                elemento.innerHTML += texto.charAt(i);
            }
            i++;
            elemento.timeoutId = setTimeout(digitar, velocidade); 
        }
    }
    
    digitar(); 
}


// --- INICIALIZAÇÃO E SENSOR DE ROLAGEM --- //

const tituloHero = document.querySelector('.container h1');
const logoH1 = document.querySelector('.logo h1');

// 1. Inicia o título principal ao abrir a página
efeitoDigitacao(tituloHero, "Bem Vindo(a),|me chamo Karllos Braga", 80); 

let logoAnimada = false; // Controle para saber se a logo já está digitando

window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    
    // Se rolou para baixo (mais de 50px)
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled'); // Ativa o vidro fosco
        
        // Dispara o efeito na Logo
        if (!logoAnimada) {
            logoAnimada = true; 
            efeitoDigitacao(logoH1, "Karllos Braga", 80); 
        }
        
    } else {
        // Se voltou lá para o topo
        nav.classList.remove('nav-scrolled'); // Tira o vidro fosco
        
        // Reseta a logo e FAZ O TÍTULO PRINCIPAL DIGITAR DE NOVO!
        if (logoAnimada) {
            clearTimeout(logoH1.timeoutId); 
            logoH1.innerHTML = "Karllos Braga"; 
            logoAnimada = false; 
            
            // Digita o título principal de novo como você pediu
            efeitoDigitacao(tituloHero, "Bem Vindo(a),|me chamo Karllos Braga", 80);
        }
    }
});