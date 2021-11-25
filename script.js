/* REQUISITO-7 - Resolução do exercício 7 em função da explicação do exercício durante a monitoria. */
const allcolors = document.getElementsByClassName('color');

for (const select of allcolors) {
  select.addEventListener('click', function (event) {
    const selectColor = document.querySelector('.selected');
    selectColor.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(select);
  });
}

/* REQUISITO-8 - Resolução do exercício 8 em função da explicação do exercício durante a monitoria.
Source: Tive dúdiva em como pegar o background-color da classe 'selected' e aplicar no pixel específico.
https://pt.stackoverflow.com/questions/392942/por-que-n%C3%A3o-consigo-recuperar-a-cor-de-fundo-com-o-dom
https://imasters.com.br/css/5-formas-de-interacao-de-css-e-javascript-que-voce-provavelmente-nao-conhece */

const allpixels = document.getElementsByClassName('pixel');
console.log(allpixels);

function putColor() {
  for (let i = 0; i < allpixels.length; i += 1) {
    allpixels[i].addEventListener('click', function (e) {
      const corAtual = document.querySelector('.selected');
      console.log(corAtual);
      const finalColor = window.getComputedStyle(corAtual).backgroundColor;
      e.target.style.backgroundColor = finalColor;
    });
  }
}
putColor();

/* REQUISITO-9 */

function clearAll() {
  const clear = document.querySelector('#clear-board');
  clear.addEventListener('click', function () {
    const eraseAll = document.getElementsByClassName('pixel');
    console.log(eraseAll);
    for (let i = 0; i < eraseAll.length; i += 1) {
      eraseAll[i].style.backgroundColor = 'white';
    }
  });
}
clearAll();
