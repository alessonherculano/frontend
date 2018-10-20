let beer = ['item 1', 'item2', 'item3']

let texto = '<ul>';

for(let i = 0; i <beer.length; i++){
    texto += '<li>'+beer[i]+'</li>';

}
texto += '</ul>';

document.querySelector('body').innerHTML = texto;
console.log(texto);
