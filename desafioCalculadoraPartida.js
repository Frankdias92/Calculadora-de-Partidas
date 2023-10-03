document.addEventListener('DOMContentLoaded', function () {
  
  
  let div1 = document.createElement('h1')
  div1.innerHTML = '👋 Olá, Seja bem vindo ' + playerName + '!'
  document.body.appendChild(div1)
  
  let newDiv = document.createElement('section')
  newDiv.setAttribute('id', 'mySection')
  document.body.appendChild(newDiv)


  let div2 = document.createElement('div')
  div2.setAttribute('id', 'container')
  creatNewElements()

  let div3 = document.createElement('div')
  div3.setAttribute('id', 'placarPlayer')
  div3.innerHTML = '<input type="button" value="Calcular Seu Placar" id="takeCount" onclick="calcularPlacar(), placarOponente()">' +
  '</input>'
  document.body.appendChild(div3)

  let div4 = document.createElement('p')
  div4.setAttribute('id', 'placarPlayer')

  let div5 = document.createElement('p')
  div5.setAttribute('id', 'container2')


  
  newDiv.appendChild(div2)
  newDiv.appendChild(div4)
  newDiv.appendChild(div5)
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
      '<input type="number" name="takeLoss" id="takeLoss" placeholder="0 a 100...">';
  }

  function styleSheed() {
    let bodySection = document.querySelector('body')
    bodySection.style.fontFamily = 'Segoe UI, Roboto, Arial, sans-serif'
    bodySection.style.display = 'block'
    bodySection.style.marginTop = '15rem'

    let section = document.querySelector('#mySection')
    section.style.display = 'flex'
    section.style.flexDirection = 'row'
    section.style.justifyContent = 'center'
    section.style.height = '120px'
    section.style.width = '720px'
    section.style.margin = 'auto'
    section.style.gap = '1.5rem'
  

    let container = document.querySelector('#container')
    container.style.display = 'flex'
    container.style.flexDirection = 'column'

    let styleH1 = document.querySelector('h1')
    styleH1.style.color = 'red'
    styleH1.style.display = 'flex'
    styleH1.style.justifyContent = 'center'

    let takeCount = document.querySelector ( '#takeCount' )
    takeCount.style.display = 'flex'
    takeCount.style.justifyContent = 'center'
    takeCount.style.marginTop = '1.5rem'
    takeCount.style.margin = 'auto'

  }
})


let playerName = prompt('Qual seu nome player?')





function calcularPlacar() {
  
  let win = document.querySelector('#takeWin').value;
  let losses = document.querySelector('#takeLoss').value;
  let resultado = win - losses;

  placarFinal(resultado);
}


function calculoPlacar (resultado) {
  let result = ""

  if ( resultado <= 10) {
    result = "Ferro";
  } else if ( resultado >= 11 && resultado <= 20 ) {
    result = "Bronze";
  } else if ( resultado >= 21 && resultado <= 50 ) {
    result = "Prata";
  } else if ( resultado >= 51 && resultado <= 80 ) {
    result = "Ouro";
  } else if ( resultado >= 81 && resultado <= 90 ) {
    result = "Diamante";
  } else if ( resultado >= 91 && resultado <= 100 ) {
    result = "Lendário";
  } else {
    result = "Imortal";
  }
  
  return result;
}

const placarFinal = ( resultado ) => {
  let result = calculoPlacar (resultado);

  document.querySelector('#container2').innerHTML = 'Sua classificação é ' + result;
  document.querySelector('#placarPlayer').innerHTML = 'Sua classificação é ' + result;
}

function placarOponente () {
  let number1 = '';
  let number2 = '';

  for ( let i = 0; i < 2; i++) {
    let randomValue = Math.floor(Math.random() * 160) + 1;

    if ( i === 0) {
      number1 = randomValue;
    } else {
      number2 = randomValue;
    }
  }
  
  showOponente(number1, number2);
}

const showOponente = (number1, number2) => {
  let oponenteWin = calculoPlacar (number1);
  let oponenteLoss = calculoPlacar (number2);

  console.log (oponenteWin);
  document.querySelector ( '#container2' ).innerHTML = 'A categoria do seu oponente é ' + oponenteWin;
}
