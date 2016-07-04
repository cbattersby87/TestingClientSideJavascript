var assert = require('chai').assert;

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    })
})

describe('my first test', function () {
    it('should be my first test', function () {
        var result = 1;
        assert.equal(result, 1);

        describe('should be a nested describe', function () {
            it('should be my second test', function () {
                assert.equal(2, 2);
            });

            it('should be my third test', function(){
                assert.equal(3, 3);
            })
        });

    });
});

describe('Asynchronous test suite', function(){
    
})