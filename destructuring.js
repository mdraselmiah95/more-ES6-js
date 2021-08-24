const fish = {
    id: 55,
    name: 'King Elisha',
    price: 7000,
    phone: '09373255',
    address: 'Padma',
    dress: 'Golden'
};

/* const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id;
 */

const {
    phone,
    name,
    price,
    id,
    dress
} = fish;

// console.log(phone);
// console.log(name);
// console.log(price);
// console.log(id);
// console.log(dress);

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

// const work = company.web.work;
// const framework = company.web.framework;

const {
    work,
    framework
} = company.web;

const {
    food
} = company.ceo;
const {
    first,
    second
} = company.web.tech;

console.log(work);
console.log(food);
console.log(first);
console.log(second);