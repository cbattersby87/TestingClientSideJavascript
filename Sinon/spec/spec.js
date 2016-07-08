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

describe.skip('combat attack', function(){
    it(' should damage the defender if the hit is successful', function(){
        var combat = new Combat();
        var defender = sinon.stub(new Character());
        var attacker = sinon.stub(new Character());
        attacker.damage = 5;
        attacker.calculateHit.returns(true);

        combat.attack(attacker, defender);
        expect(defender.takeDamage.called).toBe(true);
        expect(defender.takeDamage.getCall(0).calledWith(5)).toBe(true);
    });
});