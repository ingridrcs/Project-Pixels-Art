let allcolors = document.getElementsByClassName('color');
// Resolução do requisito 7 em função da explicação do exercício durante a monitoria.
for(let select of allcolors) {
    select.addEventListener('click', function(event) {
        let selectColor = document.querySelector('.selected');
        selectColor.classList.remove('selected');
        event.target.classList.add('selected');
        console.log(event.target);
    } )

}