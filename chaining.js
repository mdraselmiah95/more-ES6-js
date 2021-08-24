//declare variable based on the name of an object property

const myObject = {
    x: 2,
    y: 50,
    z: 599,
    a: 23,
    b: 99
};
const {
    x,
    b
} = myObject;
// console.log('myObject.p', myObject ? .p ? );
console.log('myObject', myObject?.p?.q);
// console.log(x);
// console.log(b);

//destructing array
const [p, q, s, t] = [23, 45, 984, 22, 9];
// console.log(p, q, s, t);


const [best, bad] = ['Al amin', 'Asif'];
// console.log(best, bad);

const {
    sky,
    color,
    money
} = {
    sky: 'Blue',
    soil: 'Gray',
    color: 'Pink',
    money: 999
};

// console.log(sky, money);

//chaining

const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'Azmol',
        food: 'fish',
        Fplace: 'usa'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'HTML',
            second: 'CSS',
            third: 'JS',
            last: 22
        }
    }
};
// console.log(company.web.tech.second);
// console.log(company?.backend?.tech.third);