const friends = ['Tom Hanks', 'Tom curse', 'Tom Brady', 'Tom Jack', 'Tom Bobby'];
const friendsLength = friends.map(friend => friend.length);
// console.log(friendsLength);

const products = [{
        name: 'Water bottle',
        price: 500,
        color: 'white'
    },
    {
        name: 'mobile phone',
        price: 15000,
        color: 'green'
    },
    {
        name: 'laptop',
        price: 55000,
        color: 'black'
    },
    {
        name: 'sticky note',
        price: 55,
        color: 'pink'
    },
    {
        name: 'water glass',
        price: 15,
        color: 'white'
    }
];

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// products.map(product => console.log(product));
// products.forEach(p => console.log(p))   forEach will not return anything
// console.log(productName);
// console.log(productPrice);