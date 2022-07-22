// Generic types a.

let a = 1;
// T sẽ bound (giói hạn) phạm vi của type

// first way
type Filter1 = {
    <T>(array : T[], f: (item: T) => boolean) : T[]
}
let filter : Filter1 = (s, x) => [];

type Filter11 = <T>(array : T[], f: (item: T) => boolean) => T[];
let filter11 : Filter11 = (a, f) => [];


// second way, khai báo kiểu ở đầu phạm vi
type Filter2<T> = {
    (array : T[], f: (item: T) => boolean) : T[]
}
let filter2 : Filter2<String> = (a) => [];

type Filter22<T> = (array : T[]) => T[];
let filter22 : Filter22<String> = (a) => [];

