function min(num) {
    return Math.min(num)
}

// console.log(min([1, 3, 2]))

const cube = x => x * x * x;
// console.log(cube(2))

const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);


const {
    x,
    y,
    z
} = {
    x: 1,
    y1: 2,
    z: 3
};

// console.log(y);


const num = [1, 2, 3, 4, 5];
let output = num.filter(n => n % 2);
// console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];

const f = friends.find(friend => friend.length == 5);
console.log(f);