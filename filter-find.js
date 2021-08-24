const numbers = [4, 55, 99, 12, 33, 12, 88, 7, 21, 10, 19];
const bigNumbers = numbers.filter(num => num > 20);
const smallNumbers = numbers.filter(num => num < 20);
// console.log(smallNumbers);
// console.log(bigNumbers);


const products = [{
        name: 'water bottle',
        price: 50,
        color: 'yellow'
    },
    {
        name: 'mobile phone',
        price: 15000,
        color: 'black'
    },
    {
        name: 'smart watch',
        price: 3000,
        color: 'black'
    },
    {
        name: 'sticky note',
        price: 30,
        color: 'pink'
    },
    {
        name: 'water glass',
        price: 3,
        color: 'white'
    }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const black = products.filter(product => product.color == 'black');
// console.log(black);
/* 
[{
        name: 'mobile phone',
        price: 15000,
        color: 'black'
    },
    {
        name: 'smart watch',
        price: 3000,
        color: 'black'
    }
] */


const whiteItem = products.find(item => item.color == 'black');
console.log(whiteItem); //{ name: 'sticky note', price: 30, color: 'pink' }




//filter will give an array and if not match it will give []
//other side find will give specific element if not it will give undefined and also find will give the first element if matches