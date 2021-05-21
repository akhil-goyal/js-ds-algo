let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['m', 'n', 'o', 'p'];

const checkContainment = (arr1, arr2) => {

    let map = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }

    return false;
}

const result = checkContainment(array1, array2);

console.log(result);