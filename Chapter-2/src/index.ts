let x : number = 10;
// nếu không set type cho biến thì typescript sẽ tự động nhận dạng.
let a = 1 + 3;
let b = a + 3;
let c = b + 4;
let d = {
    apple : a,
    lemond : b
}
let y = {
    apple : a,
    lemond : b
}
console.log(a === a); // true
console.log(a === 3); // true
console.log({} === {}); // false
console.log(d === y); // false




