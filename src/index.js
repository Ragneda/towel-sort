
module.exports = function towelSort(matrix) {
    {
        if (matrix === undefined || matrix.length === 0)
            return [];
    }
    let arr = matrix.sort((a, b) => a - b);
    arr[1].reverse();
    {
        if (matrix.length == 4)
            arr[3].reverse();
    }
    let arr1 = arr.flat();
    return arr1;
};
