"use strict";
let x = 10;
// nếu không set type cho biến thì typescript sẽ tự động nhận dạng.
let a = 1 + 2;
let b = a + 3;
let c = b + 4;
let d = {
    apple: a,
    lemond: b
};
let y = {
    apple: a,
    lemond: b
};
console.log(a === a);
console.log(a === 3);
console.log({} === {});
console.log(d === y);
//# sourceMappingURL=index.js.map