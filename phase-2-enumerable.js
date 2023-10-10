// Your code here
Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.myMap = function(callback) {
    let newArray = []
    this.myEach(function(element){
        newArray.push(callback(element))
    });
    return newArray
}

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = 0;
    let array = this

    if (initialValue !== undefined){
        accumulator = initialValue
    }else{
        accumulator = this[0]
        array.shift()
    }

    array.myEach(function(element){ accumulator = callback(accumulator, element)});
    return accumulator
}

const addr = function(accumulator, element){ return accumulator + element}
const array = [1,2,2,3,46,64]
console.log(array.myReduce(addr))


