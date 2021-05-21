const string = 'Akhil Goyal';

const reverse = str => {

    if (!str || str.length < 2 || typeof (str) !== 'string') {
        return 'Error';
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');

}

const result = reverse(string);
console.log(result);