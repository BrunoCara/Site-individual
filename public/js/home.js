 window.onscroll = function () {
  if (window.scrollY < inicio.offsetHeight) {
        header.style = " background-color: black;";
        a_not.style = "color: white";
        a_cr.style = "color: white";
        a_vot.style = "color: white";
        a_result.style = "color: white";
    } 

   /*  else if (window.scrollY > dash.offsetHeight) {
      header.style = " background-color: white;  ";
      a_not.style = "color: black";
      a_cr.style = "color: black";
      a_vot.style = "color: black";
      a_result.style = "color: black";
  }
 */
    else if (window.scrollY > votacao.offsetHeight) {
      header.style = " background-color: black;";
        a_not.style = "color: white";
        a_cr.style = "color: white";
        a_vot.style = "color: white";
        a_result.style = "color: white";
  }

    else if (window.scrollY > curiosidades.offsetHeight) {
        header.style = " background-color: white;  ";
        a_not.style = "color: black";
        a_cr.style = "color: black";
        a_vot.style = "color: black";
        a_result.style = "color: black";
    }

  /* if (window.scrollY > dash.offsetHeight) {
    header.style = " background-color: white;  ";
        a_not.style = "color: black";
        a_cr.style = "color: black";
        a_vot.style = "color: black";
        a_result.style = "color: black";
}  */
}   

var lista_noticias = ["img/not1.jpg", "img/not2.jpg", "img/not3.jpg", "img/not4.jpg"]

var lista_titulo = ["Luka Doncic comanda vitória dos Mavericks Sobre os Warriors","Tatum se recupera, Celtics Empatam final do Leste","O que esperar da final entre Celtics X Warriors","Nikola Jokic é eleito o MVP da temporada da NBA"]

var lista_subtitulo = ["Armador tem a maior maior média de pontos da Liga em jogos de eliminação e entra para a história da NBA","Astro faz 31 pontos no jogo 4 depois de anotar 10 no jogo 3 Miami erra primeiros 14 arremessos e fica para trás já no primeiro quarto","Série decisiva começa na quinta-feira, 2 de junho; possível jogo 7 acontece no dia 19","Nikola Jokic é de novo MVP da NBA. o pivô do Denver Nuggets foi o escolhido na votação feita pela liga e receberá o prêmio pelo segundo ano consecutivo."]

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
  if  (sessionStorage.ID_USUARIO == undefined){
    alert("Faça login para acessar a noticia")
  }
  else {if (valor.toFixed() == 0){
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
  }}
  
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
  if  (sessionStorage.ID_USUARIO == undefined){
    alert("Faça login para acessar a curiosidade")
  }
  else {
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


function mandar_link() {
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  linkVar = input_link.value
  var fk_usuarioVar = sessionStorage.getItem('ID_USUARIO')
  // Enviando o valor da nova input
  fetch("/usuarios/mandar_link", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          linkServer: linkVar,
          fk_usuarioServer: fk_usuarioVar
      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);
      
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

var lista_link = []
function pegar_link(){
  fetch("/usuarios/pegar_link").then(function (resposta) {
    if (resposta.ok) {   
      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));
        for(var c = 0; c < resposta.length; c++){
          var link = resposta[c]
          lista_link.push(link.link)
        }
      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}

function plotar_usuario(){
  iframe.src = 'lista_link[0]'
}