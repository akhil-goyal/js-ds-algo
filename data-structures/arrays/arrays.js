const dataSet = [1, 2, 3, 6, 4, 3, 6, 7];

// METHOD 1 ::: O(n^2)

// const checkRepeat = data => {

//     for (let i = 0; i < data.length; i++) {
//         for (let j = 1; j < data.length; j++) {
//             if (data[i] === data[j]) {
//                 return data[i];
//             }
//         }
//     }
//     return undefined;
// }

// const result = checkRepeat(dataSet);

// console.log(result);

// --------------------------------------------------------

// METHOD 2 (Using Hash Tables)

const checkRepeat = data => {

    let map = {};

    for (let i = 0; i < data.length; i++) {
        if (map[data[i]] !== undefined) {
            return data[i]
        } else {
            map[data[i]] = i;
        }
    }
    return undefined;
}

const result = checkRepeat(dataSet);

console.log(result);