const draw = (number)=>{
    let flag = 1;
    let string = "";
    if(number > 0 ){
        for( let i = 1 ; i < number +1 ; i++){
            if(i % 2 === 0){
                for (let j = 0; j < number; j++) {
                    (j === 0 || j === number -1) ? string += "@" : string +=" ";
                    (j === number -1) ? string += "\n" : string +=" ";
                } 
            }
            else if(flag % 2 === 0) {
                
                for( let j = 0; j < number; j++) {
                    (number-2 === j) ? string +=" " : string += "@";
                    (j === number-1) ? string += "\n" : string +=" ";
                }
                flag++;
                
            } else {
                
                for(let j = 0; j < number; j++) {
                     (j === 1) ? string +=" " : string += "@";
                     (j === number-1) ? string += "\n"  : string +=" ";
                }
                flag++;
                
            }
        }
        return string;
    }else {
        return "Input harus positive"
    }
}

console.log(draw(1))