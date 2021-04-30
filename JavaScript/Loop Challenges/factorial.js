function multiplyValues(){
    var product = 1;
    var n = 1;
    while (product <= 1e8){
        n++;
        product *= n;
    }
    console.log(n);
    return n;
}
console.log(multiplyValues());