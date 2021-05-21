# Big O Notation

```
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');

function findNemo2(fish) {

    let t0 = performance.now();

    for (let i = 0; i < fish.length; i++) {
        if (fish[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }

    let t1 = performance.now();

    console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");

}

findNemo2(large);
```

1. O(n) --> Linear Time : It means that the number of operations is equal the number of data elements.
 
    For example, in the code above, the loop will run 100 times for large array.


```
const compressBox = (boxes) => {
    console.log(boxes[0]);
}

compressBox(boxes);
```

2. O(1) --> Constant Time : It means that there's only one operation that will be performaed, no matter the size of data.

    For example, in the code above, only the first elements of array will be displayed irrespective of the array size.

```
function anotherFunChallenge(input) {

    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)

    for (let i = 0; i < input; i++) {
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }

    for (let j = 0; j < input; j++) {
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }

    let whoAmI = "I don't know"; // O(1)
    
}
```

3. BIG O(4 + 5n)

```
const boxes = ['a', 'b', 'c', 'd', 'e'];

const logAllPairs = (array) => {
    for(let i=0; i < array.length; i++){
        for(j=0; j< array.length; j++){
            console.log(array[i], array[j]);
        }
    }
}

logAllPairs(boxes);
```

4. O(n * n) = O(n ^ 2) : Quadratic Time

    For the nested loops, we multiply instead of adding n.

## Rules

- The worst case is taken into consideration.
- Remove constants.
- Different terms for input.
- Drop non dominants.

## Big O material

    https://www.bigocheatsheet.com/