// Regular Func
function addOne(num: number) {
    return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow Func Annotations
const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);

// Also notice, TypeScript will give you warning if you provide more or less arguments than you specify in your parameter area.

// double(2, 10, 20); // 👈 Warning