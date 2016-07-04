var assert = require('chai').assert;
var User = require('../other/user.js');

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

            it('should be my third test', function () {
                assert.equal(3, 3);
            })
        });

    });
});

describe('Asynchronous tests suite with timeout', function () {
    it('should be asynchoronous', function (done) {
        setTimeout(function () {
            assert.equal(1, 1);
            done();
        }, 10);
    });

    describe('user', function () {
        describe('#save()', function () {
            it('should save without error', function (done) {
                setTimeout(done, 300);
                var user = new User('Luna');
                user.save(function (err) {
                    if (err) throw err;
                    done();
                });
            })
        });
    });
});