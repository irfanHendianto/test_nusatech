const draw= (number)=>{
    let flag = 1;
    let string ="";
    if(number > 0){
        for (let i = 1; i < number + 1; i++) {
            for (let j = 1; j < number + 1; j++) {
                if( i % 2 === 0){
                    (j === 1 || j === number) ? string += "@" : string +=" ";
                    (j === number) ? string += "\n" : string +=" ";
                }else if (flag % 2 === 0){
                    (number-1 === j) ? string +=" " : string += "@";
                    (j === number) ? (string += "\n" , flag ++)  : string +=" ";
                }else {
                    (j === 2) ? string +=" " : string += "@";
                    (j === number) ?  (string += "\n" , flag ++) : string +=" ";
                }
                
            }
            
        }
        return string;
    }else{
        return "Input harus positive";
    }
}

console.log(draw(15))


