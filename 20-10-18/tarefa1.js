let btnNovo = document.querySelector('.js-btnNovo');
let inputTarefa = document.querySelector('.js-inputTarefa');
let list = document.querySelector('.js-list');
let countTxt = document.querySelector('.js-count');
let count = 0;
countTxt.innerHTML = count;

btnNovo.addEventListener('click', () => {
    if(inputTarefa.value === ''){
        alert('Não pode vazio');
    }else{
        let listItem = document.createElement('li');
        let textNode = document.createTextNode(inputTarefa.value);
        
        listItem.appendChild(textNode);
        list.appendChild(listItem);
        countTxt.innerHTML = list.childNodes.length;
        
        inputTarefa.value = '';
    }
    

});