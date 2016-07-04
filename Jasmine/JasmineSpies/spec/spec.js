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

});