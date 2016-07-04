var mySystemUnderTest = {
    callCallback: function(callback){
        callback();
    },
    
    callCallbackWithReturnValue: function(callback){
        return callback();
    },

    callDependency: function(){
        return myDep.someMethod();
    },

    callDependencyBetter: function(dep){
        return dep.someMethod();
    }
}

var myDep = {
    someMethod: function(){ 
        return 10;
    }
}

function realCallback(){
    return 4;
}