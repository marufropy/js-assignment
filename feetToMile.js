function feetToMile(feet){
    if(feet < 0){
        return "error! length can not be negative."
    }
    else{
        var result = feet/5280;
        return result.toFixed(6);//for handling fraction input   
    }
}

var foot = 5279.99;
var mile = feetToMile(foot);
console.log(mile);
