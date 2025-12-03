import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');

const ids = input.split(',');

let invalidtotal = 0;

function hasDouble(num) {
    const str = num.toString();
    const half = str.length / 2;
    const firstHalf = str.slice(0, half);
    const secondHalf = str.slice(half);

    return firstHalf === secondHalf;
}

for (const id of ids) {
    const start = id.split('-')[0];
    const end = id.split('-')[1];

    for (let i = Number(start); i <= Number(end); i++) {
        const digits = String(i).split('')
        if (hasDouble(i)) {
            invalidtotal += i;
        }
    }
}

console.log(invalidtotal);