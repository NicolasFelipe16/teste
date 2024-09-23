//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do pongi
let bolabatendobebe
let pontoaaaaaaaaaaaaaaaa
let trilha

function preload () {
  trilha = loadSound ("trilha.m4a")
  pontoaaaaaaaaaaaaaaaa = loadSound ("pontoaaaaaaaaaaaaaaaa.m4a")
  bolabatendobebe = loadSound ("bolabatendobebe.m4a")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop ()
}

function draw() {
    background(0);
    mostraBolinha();
   movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete,yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar ()
  marcaPonto ()
}
function mostraBolinha() {
   fill (color (255,255,0))
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
   fill (color (46,139,87))
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1
      bolabatendobebe.play ()
  }
}

function movimentaRaqueteOponente() {
     if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}
function incluiPlacar (){
  textAlign (CENTER)
  textSize (25)
  fill (color (46,139,87))
  rect (230, 10, 40, 20)
  fill (260)
  text (meusPontos, 250, 28)
   fill (color (46,139,87))
  rect (370, 10, 40, 20)
  fill (260)
  text (pontosOponente, 391, 28)
}
function marcaPonto (){
  if (xBolinha > 590) {
    meusPontos += 1
    pontoaaaaaaaaaaaaaaaa.play ()
  }
  if (xBolinha < 10){
    pontosOponente += 1
    pontoaaaaaaaaaaaaaaaa.play ()
  }
}