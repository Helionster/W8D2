Array.prototype.uniq = function(array) {
    let result = []
    for(let i = 0; i < this.length; i++) {
        if (!result.includes(this[i])) {
            result.push(this[i]);
        }
    }

    return result;
}

[1,2,2,3,3,3].uniq()

Array.prototype.twoSum = function(array) {
    let result = [];

    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if ((this[i] + this[j] === 0) && (j > i)) {
                result.push([i,j]);
            }
        }
    }

    return result;
}

[-1, 0, 2, -2, 1].twoSum()

Array.prototype.transpose = function(array) {
    let result = [];
    let i = 0;

    while (i < this.length) {
        let newRow = [];
        let current_row = this[i]

        for(let j = 0; j < current_row.length; j++) {
            newRow.push(this[j][i]);
        }
        result.push(newRow);
        i++;
    }

    return result
}

[[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()

Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

[1,2,3,4,5,6,7].myEach(function (element) {console.log(element)});

Array.prototype.myMap = function(callback) {
    
}

