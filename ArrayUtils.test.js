const { TestScheduler } = require('jest');
const ArrayUtils = require('./ArrayUtils');

test("Test isEmpty when empty", () =>{
    let util = new ArrayUtils();
    let actual = util.isEmpty([]);
    let expected = true;
    expect(expected).toEqual(actual);
});

test("Test isEmpty when not empty", () =>{
    let util = new ArrayUtils();
    let actual = util.isEmpty([3]);
    let expected = false;
    expect(expected).toEqual(actual);
});

test("Test append", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 0;

    let actual = util.append(original, value);

    expect(value).toEqual(actual[actual.length + 1]);

});

test("Test clone", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];

    let clone = util.clone(original);

    for(let i = 0; i < original.length; i++){
        expect(clone[i]).toEqual(original[i])
    }

});

test("Test subarray", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let indexOne = 5;
    let indexTwo = 9;

    let result = util.subArray(original, indexOne, indexTwo);

    for(let i = indexOne; i < indexTwo; i++){
        expect(result[i-indexOne]).toEqual(original[i])
    }

});

test("Test equals when equal", () =>{
    let util = new ArrayUtils();
    let arrayOne = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let arrayTwo = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];

    let actual = util.equals(arrayOne, arrayTwo);
    let expected = true;

     expect(actual).toEqual(expected);

});

test("Test equals when different lengths", () =>{
    let util = new ArrayUtils();
    let arrayOne = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let arrayTwo = [4, 5, 1, 9, 7, 8, 2, 4];

    let actual = util.equals(arrayOne, arrayTwo);
    let expected = false;

    expect(actual).toEqual(expected);

});

test("Test equals when not equal", () =>{
    let util = new ArrayUtils();
    let arrayOne = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let arrayTwo = [5, 1, 9, 3, 6, 7, 8, 2, 4, 4];

    let actual = util.equals(arrayOne, arrayTwo);
    let expected = false;

    expect(actual).toEqual(expected);

});

test("Test fill", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 4;

    let actual = util.fill(original, value);

    for(let i = 0; i < original.length; i++){
        expect(actual[i]).toEqual(value)
    }

});

test("Test indexOf existing value", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 9;

    let actual = util.indexOf(original, value);
    let expected = 3;

    expect(actual).toEqual(expected);

});

test("Test indexOf missing value", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 0;

    let actual = util.indexOf(original, value);
    let expected = -1;

    expect(actual).toEqual(expected);

});

test("Test indexOf missing value", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 4;

    let actual = util.indexOf(original, value);
    let expected = 0;

    expect(actual).toEqual(expected);

});

test("Test remove missing value", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 0;

    let actual = util.remove(original, value);

    expect(actual).toEqual(original);

});

test("Test remove existing value", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 9;

    let actual = util.remove(original, value);
    let expected = [4, 5, 1, 3, 6, 7, 8, 2, 4];

    expect(actual).toEqual(expected);

});

test("Test remove duplicate value", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 4;

    let actual = util.remove(original, value);
    let expected = [5, 1, 9, 3, 6, 7, 8, 2, 4];

    expect(actual).toEqual(expected);

});

test("Test reverse", () =>{
    let util = new ArrayUtils();
    let original = [4, 5, 1, 9, 3, 6, 7, 8, 2, 4];
    let value = 4;

    let actual = util.remove(original, value);
    let expected = [4, 2, 8, 7, 6, 3, 9, 1, 5, 4];

    expect(actual).toEqual(expected);

});
