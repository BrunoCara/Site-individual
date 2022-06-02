/* window.onscroll = function () {
    if (window.scrollY < inicio.offsetHeight) {
        header.style = " background-color: rgba(0, 0, 0, 0); ";
    }
    if (window.scrollY >= inicio.offsetHeight) {
        header.style = " background-color: black;  ";
    }
}   */ 

var lista_noticias = ["img/not1.jpg", "img/not2.jpg", "img/not3.jpg", "img/not4.jpg"]

var lista_titulo = ["Luka Doncic comanda vitória dos Mavericks Sobre os Warriors","Tatum se recupera, Celtics Empatam final do Leste","O que esperar da possivel final entre Celtics X Warriors","Nikola Jokic é eleito o MVP da temporada da NBA"]

var lista_subtitulo = ["Armador tem a maior maior média de pontos da Liga em jogos de eliminação e entra para a história da NBA","Astro faz 31 pontos no jogo 4 depois de anotar 10 no jogo 3 Miami erra primeiros 14 arremessos e fica para trás já no primeiro quarto","Curry vai amassar o tatum chora jp chora jp chora jp chora jp chora jp chora jp","Nikola Jokic é de novo MVP da NBA. o pivô do Denver Nuggets foi o escolhido na votação feita pela liga e receberá o prêmio pelo segundo ano consecutivo."]

var c = 0
var c1 = 0
var c2 = 0

var interval_imagem = setInterval(function () {trocar_imagem()}, 7000)

function trocar_imagem(){
  carrosel.src = lista_noticias[c]
  input_trocar.value = c
  c++
  if(c == 4){
    c = 0
  }
}

var interval_titulo = setInterval(function () {trocar_titulo()}, 7000)
function trocar_titulo(){
  titulo_noticia.innerHTML = lista_titulo[c1]
  input_trocar.value = c1
  c1++
  if(c1 == 4){
    c1 = 0
  }
}

var interval_subtitulo = setInterval(function () {trocar_subtitulo()}, 7000)
function trocar_subtitulo(){
  sub_titulo.innerHTML = lista_subtitulo[c2]
  input_trocar.value = c2
  c2++
  if(c2 == 4){
    c2 = 0
  }
}

function trocar(){
 var valor = Number(input_trocar.value)
    carrosel.src = lista_noticias[valor.toFixed()]
    titulo_noticia.innerHTML = lista_titulo[valor.toFixed()]
    sub_titulo.innerHTML = lista_subtitulo[valor.toFixed()]
    clearInterval(interval_imagem)
    clearInterval(interval_titulo)
    clearInterval(interval_subtitulo)
}

function mudar_tela(){
  var valor = Number(input_trocar.value)
  if (valor.toFixed() == 0){
    window.location.href = "noticia1.html"
  }
  else if (valor.toFixed() == 1){
    window.location.href = "noticia2.html"
  }
  else if (valor.toFixed() == 2){
      window.location.href = "noticia3.html"
    }
  else if (valor.toFixed() == 3){
      window.location.href = "noticia4.html"
  }
}

var lista_curiosidade = ["img/cr1.jpg", "img/cr2.jpg", "img/cr3.jpg", "img/cr4.jpg"]

var lista_titulo_curiosidade = ["Camisa rara dos Lakers usada por Kobe Bryant pode valer R$ 24 milhões em leilão","Stephen Curry completa graduação em Sociologia depois de 13 anos na NBA","NBA House terá espaço temático para os fãs na série final","Antetokounmpo ganha mural impressionante de 16m em rua americana"]

var lista_subtitulo_curiosidade = ["Em seu ano de estreia na NBA, o astro usou a famosa dourada com roxo em cinco jogos, incluindo dois de playoffs","Armador dos Warriors retornou para completar a graduação de Bacharel de Artes com especialização em Sociologia","Além de assistir aos jogos decisivos, o fã do basquete poderá ver de perto a Bola de Diamante","Pivô dos Bucks é homenageado por prefeito de Milwaukee: Não tem outro melhor para nos representar."]

var co = 0
var co1 = 0
var co2 = 0

var interval_imagem_curiosidade = setInterval(function () {trocar_imagem_curiosidade()}, 7000)

function trocar_imagem_curiosidade(){
  carrosel_curiosidade.src = lista_curiosidade[co]
  input_trocar_curiosidade.value = co
  co++
  if(co == 4){
    co = 0
  }
}

var interval_titulo_curiosidade = setInterval(function () {trocar_titulo_curiosidade()}, 7000)
function trocar_titulo_curiosidade(){
  titulo_curiosidade.innerHTML = lista_titulo_curiosidade[co1]
  input_trocar.value = co1
  co1++
  if(co1 == 4){
    co1 = 0
  }
}

var interval_subtitulo_curiosidade = setInterval(function () {trocar_subtitulo_curiosidade()}, 7000)
function trocar_subtitulo_curiosidade(){
  sub_titulo_curiosidade.innerHTML = lista_subtitulo_curiosidade[co2]
  input_trocar.value = co2
  co2++
  if(co2 == 4){
    co2 = 0
  }
}

function trocar_curiosidade(){
 var valor_curiosidade = Number(input_trocar_curiosidade.value)
    carrosel_curiosidade.src = lista_curiosidade[valor_curiosidade.toFixed()]
    titulo_curiosidade.innerHTML = lista_titulo_curiosidade[valor_curiosidade.toFixed()]
    sub_titulo_curiosidade.innerHTML = lista_subtitulo_curiosidade[valor_curiosidade.toFixed()]
    clearInterval(interval_imagem_curiosidade)
    clearInterval(interval_titulo_curiosidade)
    clearInterval(interval_subtitulo_curiosidade)
}

function mudar_tela_curiosidade(){
  var valor_curiosidade = Number(input_trocar_curiosidade.value)
  if (valor_curiosidade.toFixed() == 0){
    window.location.href = "curiosidade1.html"
  }
  else if (valor_curiosidade.toFixed() == 1){
    window.location.href = "curiosidade2.html"
  }
  else if (valor_curiosidade.toFixed() == 2){
      window.location.href = "curiosidade3.html"
    }
  else if (valor_curiosidade.toFixed() == 3){
      window.location.href = "curiosidade4.html"
  }
}

function trocar_noticia1() {
  window.location.href = "noticia1.html"
}
function trocar_noticia2() {
  window.location.href = "noticia2.html"
}
function trocar_noticia3() {
  window.location.href = "noticia3.html"
}
function trocar_noticia4() {
  window.location.href = "noticia4.html"
}

function trocar_curiosidade1() {
  window.location.href = "curiosidade1.html"
}
function trocar_curiosidade2() {
  window.location.href = "curiosidade2.html"
}
function trocar_curiosidade3() {
  window.location.href = "curiosidade3.html"
}
function trocar_curiosidade4() {
  window.location.href = "curiosidade4.html"
}

function time(){
  var conferencia = conf.value
  if (conferencia == '0'){
    conf_leste.style.opacity = 0;
    conf_leste.style.zIndex = -1;
    conf_leste.style.position = 'absolute';
    conf_oeste.style.opacity = 0;
    conf_oeste.style.zIndex = -1;
    conf_oeste.style.position = 'absolute';
  }
  else if (conferencia == '1'){
    lucas.style.opacity = 0;
    lucas.style.zIndex = -1;
    lucas.style.position = 'absolute';
    conf_leste.style.opacity = 1;
    conf_leste.style.zIndex = 1;
    conf_leste.style.position = 'absolute';
    conf_oeste.style.opacity = 0;
    conf_oeste.style.zIndex = -1;
    conf_oeste.style.position = 'absolute';
  }
  else if (conferencia == '2'){
    lucas.style.opacity = 0;
    lucas.style.zIndex = -1;
    lucas.style.position = 'absolute';
    conf_oeste.style.opacity = 1;
    conf_oeste.style.zIndex = 1;
    conf_oeste.style.position = 'absolute'; 
    conf_leste.style.opacity = 0  ;
    conf_leste.style.zIndex = -1;
    conf_leste.style.position = 'absolute';
  }
}

function desabilitar(){
  if (teste == true){
    teste1.disable
  }
}