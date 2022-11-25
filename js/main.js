// trocar titulo p binario

var title = document.querySelector('#title')

if (title) {

  title.addEventListener('mouseover', function (evento) {
    title.innerHTML = ('01101100 01100001 01111001 01101100 01100001');
  })

  title.addEventListener('mouseout', function (evento) {
    title.innerHTML = ('LAYLA');
  })
}

// Parabéns

if (final) {

  final.addEventListener('mouseover', function (evento) {
    final.innerHTML = ('Parabéns!');
  })

  final.addEventListener('mouseout', function (evento) {
    final.innerHTML = ('70 61 72 61 62 26 41 74 69 6C 64 65 3B 26 63 6F 70 79 3B 6E 73!');
  })
}

// aumentar e diminuir a fonte

tamanho = 16;
function diminuir() {
  tamanho--;
  document.body.style.fontSize = tamanho + "px";
}
function aumentar() {
  tamanho++;
  document.body.style.fontSize = tamanho + "px";
}

//constraste preto

var b_constraste_preto = document.querySelector('#contraste_preto')

function contrasteParaPreto() {
  var todas = document.querySelectorAll('*')
  todas.forEach(function (tag) {
    tag.style.backgroundColor = 'black';
    tag.style.color = 'white';
    tag.style.borderColor = 'white';
  })
}

b_constraste_preto.addEventListener('click', contrasteParaPreto)

// constraste branco

var b_constraste_branco = document.querySelector('#contraste_branco')

function contrasteParaBranco() {
  var todas = document.querySelectorAll('*')
  todas.forEach(function (tag) {
    tag.style.backgroundColor = 'white';
    tag.style.color = 'black';
    tag.style.borderColor = 'black';
  })
}

b_constraste_branco.addEventListener('click', contrasteParaBranco)

// validação das perguntas 

function validar() {
  let acertos = 0
  let resposta = document.querySelector('#resposta')
  if (resposta = correto) {
    tag.style.backgroundColor = 'green';
    acertos = acertos++
  } else {
    tag.style.backgroundColor = 'red';
  }
}
