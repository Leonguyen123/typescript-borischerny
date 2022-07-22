function squareOf(n : number){
    return n * n;
}
squareOf(2) // 4
// squareOf('x') //'Number of string cannot assign to parameter type number.

/** Type */
/** unknown  */
let a : unknown = 30;
let c : number = 30;
if(typeof a === 'number'){
    // chỉ khi bạn thực sự biết unknown là gì thì nó mới cho phép bạn sử dụng.
    let d = c + a;
}
let b : object = {
    item1 : a
};
