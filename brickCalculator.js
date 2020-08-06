function brickCalculator(height){
    if(height < 0 || !(Number.isInteger(height))){
        return "error! height can not be negative or fraction."
    }
    else{
        if(height < 11){
            var result = (15*height)*1000;
            return result;
        }
        else if(height < 21){
            var extraHeight = height - 10;
            var result = (15*10 + 12*extraHeight)*1000;
            return result;
        }
        else{
            var extraHeight = height - 20;
            var result = (15*10 + 12*10 + 10*extraHeight)*1000;
            return result;
        }
    }
}

var height = 27;
var brickCount = brickCalculator(height);
console.log(brickCount);