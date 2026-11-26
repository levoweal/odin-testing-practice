import "./styles.css";

export function cap(string) {
    return string[0].toUpperCase() + string.slice(1);
};

export function rev(string) {
    return string.split('').reverse().join('');
}

export const calculator = {
    add(a, b) {return a + b},
    sub(a, b) {return a - b},
    div(a, b) {return a / b},
    mul(a, b) {return a * b}
}

export function caesar(string, shift) {
    const trueShift = ((shift % 26) + 26) % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const map = {};
    for (let i = 0; i < 26; i++) {
        map[alphabet[i]] = alphabet[(i + trueShift) % 26];
    }

    return string.replace(/[a-z]/gi, letter => {
        const newLetter = map[letter.toLowerCase()];
        return letter === letter.toUpperCase() ?  newLetter.toUpperCase() : newLetter;
    })
}

export function analArr(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
        average: Math.round(arr.reduce((acc, num) => acc + num, 0) / arr.length),
        length: arr.length
    }
}