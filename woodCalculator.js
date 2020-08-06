function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0 || !(Number.isInteger(chair)) || !(Number.isInteger(table)) || !(Number.isInteger(bed))){
        return "error! amount can not be negative or fraction."
    }
    else{
        result = (chair*1) + (table*3) + (bed*5);
        return result;    
    }
}

var chair = 1;
var table = 1;
var bed = 1;
var wood = woodCalculator(chair, table, bed);
console.log(wood);