describe('Spies', function(){
    it('should spy on a callback', function(){
        var spy = sinon.spy();
        mySystemUnderTest.callCallback(spy);
        expect(spy.called).toBe(true);
    });
    it('should call a real implementation if given a real function to spy on ', function(){
        var spy = sinon.spy(realCallback);
        var returnValue = mySystemUnderTest.callCallbackWithReturnValue(spy);
        expect(spy.called).toBe(true);
        expect(returnValue).toBe(4);
    }); 

    it('should spy on a method of an object', function(){
        var spy = sinon.spy(myDep, 'someMethod'); //  method from myDep
        var returnValue = mySystemUnderTest.callDependencyBetter(myDep);
        expect(spy.called).toBe(true);
        expect(returnValue).toBe(10);
    })
});