Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for(let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                sorted = false;
                let temp = this[i + 1];
                this[i + 1] = this[i]; 
                this[i] = temp;
            }
        }
    }

    return this
};

[2,3,7,8,4].bubbleSort();

String.prototype.substrings = function() {
    let result = []
}