
function remender(){
    const totalResult = document.getElementById("totalResult");
    // add the income array
    let addArray = array.reduce(function(a, b){
       return +a + +b;
   }, 0);
   // add the outcome
   let addArray1 = array1.reduce(function(a, b){
    return +a + +b;
    }, 0);
   // subtract total outcome from total income
    let save  =  addArray - addArray1 ;
    let percentage = (save/ addArray) * 100;
   // return diffrent sentences 
    if(save > 0){
        totalResult.innerHTML = "You can saved $" + save + " or " + percentage+'%' + " of your income"; 
        
        }else if(save === 0){
         totalResult.innerHTML = "You can not save ! you left $" + save + " or " + percentage + '%' + " of your income"; 
        }else{
       let save1 = -1 * save;
       totalResult.innerHTML = "Ooops you loan $" + save1; 
       }

}