import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');

const instructions = input.split('\r\n');

let pos = 50;
let count = 0;

for (const inst of instructions) {
    const direction = inst[0];
    const num = Number(inst.slice(1));
    console.log(direction, num, count);

    if (direction === 'R') {
        for(let i = 0; i < num; i++) {
            pos = (pos + 1) % 100;
            if (pos === 0) {
                count++;
            }
        }
    } else if (direction === 'L') {
        for(let i = 0; i < num; i++) {
            pos = (pos - 1) % 100;
            if (pos < 0) pos += 100;
            if (pos === 0) {
                count++;
            }
        }
    }
}

console.log(count);