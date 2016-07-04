var myClass = function () {
};

myClass.prototype.Method1 = function () {
    console.log('inside method');
    return true;
};

var mySubclass = function () { };

mySubclass.prototype = new myClass();

mySubclass.prototype.Method2 = function () {
    console.log('inside method 4');
    return 'something';
};

function SpyOn(classToSpyOn) {
    for (var key in classToSpyOn) {
        classToSpyOn[key] = createSpyPassThrough(key, classToSpyOn, classToSpyOn[key]);
    };
};

function createSpyPassThrough(key, context, origfunction) {
    var passThroughSpy = function (){
        console.log('I am a passthrough spy for ' + key);
        return origfunction.apply(context, arguments);
    };
    return passThroughSpy;
};

var mysubclass = new mySubclass();
SpyOn(mysubclass);

mysubclass.Method1();
mysubclass.Method2();
