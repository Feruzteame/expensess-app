
function remender(){
    const totalResult = document.getElementById("totalResult");
    const percent = document.getElementById("circle");
    const result1 = document.getElementById("result1");
    const result2 = document.getElementById("result2");
    
    // add income
         let sum = array.reduce(function(a, b){
           return +a + +b;
           }, 0);
          result1.innerHTML = "Total income $" + sum;
    // add outcome
      let sum1 = array1.reduce(function(a, b){
              return +a + +b;}, 0);
      result2.innerHTML = "Total Outcome $" + sum1;
    
   // subtract total outcome from total income
    let save  =  sum - sum1 ;
    let percentage = (Math.floor((save/ sum)* 100));
   // return diffrent sentences 
    if(save > 0){
        totalResult.innerHTML = `You can saved $${save} ` 
        percent.style.backgroundColor = "green";
        percent.innerHTML = ` ${percentage} % of your income`;
        
    }else if(save === 0){
         totalResult.innerHTML = `You can not save ! you left $" ${save}`;
         percent.style.backgroundColor = "orange";
         percent.innerHTML = ` ${percentage} % WARNING`;
        
        }else{
          let save1 = -1 * save;
          totalResult.innerHTML = `Ooops you loan $${save1}`; 
          percent.style.backgroundColor = "red";
          percent.innerHTML = `WARNING `;
        
       }

}