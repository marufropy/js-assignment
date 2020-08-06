function feetToMile(feet){
    if(feet < 0){
        return "error! length can not be negative."
    }
    else{
        var result = feet/5280;
        return result.toFixed(2);    
    }
}

var foot = 5280;
var mile = feetToMile(foot);
console.log(mile);