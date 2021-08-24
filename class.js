class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const asif = new Support('Asif khan', 'BD');
const rohim = new Support('Rohim', 'Uk');

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');

console.log(aamir, salman, sharuk, akshay);

asif.startSession();
rohim.startSession();
// console.log(asif);
// console.log(rohim);