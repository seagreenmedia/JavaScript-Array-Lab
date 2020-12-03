class ArrayUtils {

    let ArrayUtils = ["Peace", "Love", "Light"];

    //isEmpty
    let isEmpty = [];
    isEmpty === ArrayUtils;

    //append
    ArrayUtils.push("Freedom");

    //clone
    identity = (x) => x;
    ArrayUtilsCopy = ArrayUtils.map(identity);

    //subArray
    let y = +prompt("Pick a number between 0 and 2");
    let z = +prompt("Pick another number between 0 and 2");
    subArray = ArrayUtils.slice(y, z + 1);

    //equals
    function arraysEqual(arr1, arr2) {
        if (arr1 === arr2)
            return true;
        if (arr1 == null || arr2 == null)
            return false;
        if (arr1.length !== arr2.length)
            return false;
    }

    //fill
    ArrayUtils.fill(prompt("What's your favorite color?"));

    //indexOf
    ArrayUtils.indexOf("Love");

    //remove

    return ArrayUtils;
    remove(original, value); { return original; };


    //reverse
    reverse(original); {};