function even(limit) {
    var sum = 0; array = [0,1],total = 0;
    for (var i = 0; i < limit; i++) {
        sum = array[0] + array[1];
        array.push(sum);
       // console.log(sum, array);
        if (array.length == 3) {
            for (i = 2; i < limit; i++) {
                sum = array[i] + array[i - 1];
                array.push(sum);
                //console.log(array);
            }
        }
        for (var j = 0; j < array.length; j++) {
            if (array[j] % 2 == 0) {
                total = total + array[j];
            }
        }
        return total;
    
    }
    
}
console.log(even(4000));


