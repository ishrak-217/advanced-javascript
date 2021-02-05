function sum(first, second) {
    let result = first + second;
    if (result > 9) {
        let mood = "happy";
        console.log(mood);
    }
    if (result > 9) {
        var what = "nothing";
        console.log(what);
    }
    console.log(what);
    // console.log(mood);
    return result;
}

const output = sum(3, 7);
console.log(output);