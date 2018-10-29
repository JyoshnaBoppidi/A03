QUnit.test('Testing the new add function with four sets of inputs', function (assert) {
    assert.equal(palin("hello"), "Wrong", "works with the string");
    assert.equal(palin("abc"), "Wrong", "prints the wrong");
    assert.equal(palin(""), "Right", "works with two same letters");
    assert.equal(palin("aaa"), "Right", "prints the palindrome");
    // assert.equal(add(-3, -3, -2), -8, "works with three negative integers");
    // assert.equal(add(2.5, 2.5, 2.5, 2.5), 10, "works with four positive real numbers");
    // assert.equal(add(10, -10), 0, "works with a positive and a negative");
});