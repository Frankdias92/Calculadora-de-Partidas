document.addEventListener('DOMContentLoaded', function () {
  let newDiv = document.createElement('section')
  newDiv.setAttribute('id', 'mySection')
  document.body.appendChild(newDiv)

  let div1 = document.createElement('h1')
  div1.innerHTML = '👋 Olá, Seja bem vindo ' + playerName + '!'

  let div2 = document.createElement('div')
  div2.setAttribute('id', 'container')
  creatNewElements()

  let div3 = document.createElement('div')
  div3.setAttribute('id', 'placarPlayer')

  newDiv.appendChild(div1)
  newDiv.appendChild(div2)
  newDiv.appendChild(div3)
  styleSheed()

  function creatNewElements() {
    div2.innerHTML =
      '<label for="takeWin">' +
      'Insira suas Vitorias' +
      '</label>' +
      '<input type="number" name="takeWin" id="takeWin" placeholder="0 a 100...">' +
      '<label for="takeLoss">' +
      'Insira suas Derrotas' +
      '</label>' +
      '<input type="number" name="takeLoss" id="takeLoss" placeholder="0 a 100...">' +
      '<input type="button" value="Calcular Seu Placar" id="takeCount" onclick="calcularPlacar()">' +
      '</input>'
  }

  function styleSheed() {
    let bodySection = document.querySelector('body')
    bodySection.style.fontFamily = 'Segoe UI, Roboto, Arial, sans-serif'

    let section = document.querySelector('#mySection')
    section.style.display = 'flex'
    section.style.flexDirection = 'column'
    section.style.alignItems = 'center'
    section.style.marginTop = '15rem'

    let container = document.querySelector('#container')
    container.style.display = 'flex'
    container.style.flexDirection = 'column'
  }
})


let playerName = prompt('Qual seu nome player?')

function calcularPlacar() {
  
  let win = document.querySelector('#takeWin').value
  let losses = document.querySelector('#takeLoss').value
  let resultado = win - losses

  /*  */
  placarFinal(resultado)
}


const placarFinal = ( resultado, playerName ) => {
  let result = '';

  if ( resultado <= 10) {
    result = "Ferro"
  } else if ( resultado >= 11 && resultado <= 20 ) {
    result = "Bronze"
  } else if ( resultado >= 21 && resultado <= 50 ) {
    result = "Prata"
  } else if ( resultado >= 51 && resultado <= 80 ) {
    result = "Ouro"
  } else if ( resultado >= 81 && resultado <= 90 ) {
    result = "Diamante"
  } else if ( resultado >= 91 && resultado <= 100 ) {
    result = "Lendário"
  } else {
    result = "Imortal"
  }

  document.querySelector('#placarPlayer').innerHTML = 'Sua classificação é ' + result;
}

