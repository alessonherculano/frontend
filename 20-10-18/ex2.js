const ages =[18, 21, 32, 10, 12, 09];
const beer = ['petra', 'stella', 'Pura Malte'];

//Arry.very()
let test = ages.every(function(age) {
    age > 18

    
})
console.log(test);

//Array.include()
let possui = beer.includes('Petra');
console.log(possui);

//Arry.map()
let start = ages.map((age) => age + 1);

console.log(start);
