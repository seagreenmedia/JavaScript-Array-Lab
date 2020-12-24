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

    append(original, value) {
        return original.push(value);
    }

    getClone(original) {
        clone = [...original];
        return clone;
    }

    getSubArray(original, y, z) {
        let subArray = original.slice(y, z + 1);
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
        return original.fill(value);
    }

    indexOf(original, value) {
        return original.indexOf(value);
    }

    remove(original, value) {
        let copy = original;
        for (let i = 0; i < copy.length; i++) {
            if (copy[i] === value) {
                newCopy += copy.splice(i, 1);
            }
        }
        return newCopy;
    }

    reverseArray([original]) {
        let newArray = [];
        for (let i = original.length - 1; i >= 0; i--) {
            newArray += original.charAt([i]);
        }
        return newArray;
    }
}