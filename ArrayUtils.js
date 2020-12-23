class ArrayUtils {

    constructor(original, array, value) {
        this.original = original;
        this.array = array;
        this.value = value;
    }

    isEmpty(array) {
        if (array[""]) {
            return false;
        } else {
            return true;
        }
    }

    append(value) {
        return original.push(value);
    }

    getClone() {
        let identity = (original) => original
        let ArrayUtilsCopy = ArrayUtils.map(identity);
        return ArrayUtilsCopy;
    }

    getSubArray(y, z) {
        let y
        let z
        let subArray = ArrayUtils.slice(y, z + 1);
        return subArray;
    }

    arraysEqual(arr1, arr2) {
        if (arr1 === arr2)
            return true;
        else if (arr1 == null || arr2 == null)
            return false;
        else(arr1.length !== arr2.length)
        return false;
    }

    fillArray(original, value) {
        return ArrayUtils.fill(value);
    }

    indexOf(original, value) {
        return ArrayUtils.indexOf(value);
    }

    remove(original, value) {
        let copy = stats;
        for (let i = 0; i < copy.length; i++) {
            if (copy[i] === value) {
                copy.splice(i, 1);
            }
        }
        let value = 6;
        stats.slice(value);
        console.log(stats);
    }

    reverseArray([original]) {
        let newArray = [];
        for (let i = original.length - 1; i >= 0; i--) {
            newArray += original.charAt([i]);
        }
        return newArray;
    }
}