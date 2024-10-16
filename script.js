function calcBill(total){
    return function(tax){
        return function(discount){
            return (total + tax) - discount;
        }
    }
}

console.log(calcBill(20)(10)(5));