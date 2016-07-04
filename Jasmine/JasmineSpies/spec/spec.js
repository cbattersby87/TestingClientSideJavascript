function callMyCallback(callback){
    callback();
}

describe('Spies', function(){
    it('should spy on a callback', function(){
        var spyCallback = jasmine.createSpy('myspy');
        callMyCallback(spyCallback);
        expect(spyCallback).toHaveBeenCalled();
    });
});

var myObj = {
    save: function(){
        //...
    },
    getQuantity: function (){
        return 5;
    }
};

describe('SpyOn existing functions', function(){
    it('should spy on save', function(){
        var spy = spyOn(myObj, 'save');
        myObj.save();
        expect(spy).toHaveBeenCalled();
    });
    it('should spy on getQuantity', function(){
        var spy = spyOn(myObj, 'getQuantity').and.returnValue(10);
        expect(myObj.getQuantity()).toEqual(10);

    });
    it('should spy on getQuantity fake', function(){
        var spy = spyOn(myObj, 'getQuantity').and.callFake(function(){
            console.log('returning 20');
            return 20;
        });
        expect(myObj.getQuantity()).toEqual(20);
    });

});

describe('Spy on Custom Object', function(){
    it('should verify arguments', function(){
        var spy = jasmine.createSpy('mySpy');
        spy(1);
        spy(2);
        spy(1, 1);
        expect(spy).toHaveBeenCalledWith(1);
    });
    it('should verify arguments that werent called', function(){
        var spy = jasmine.createSpy('mySpy');
        spy(1);
        spy(4, 1);
        spy(4);
        expect(spy).toHaveBeenCalledWith(4);
    });
    xit('should work with metadata', function(){
        var myObj = spyOn(myObj, "method");
        myObj.method(1);
        myObj.method(2);
        myObj.method(3);
        expect(spy.calls[0].args[0]).toEqual(1);
    })
});