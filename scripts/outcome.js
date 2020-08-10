// create an empty array
let array1 = [];
const display3 = [];


function put1(){
    
    const display2 = document.getElementById("display2");
    const input1 = document.getElementById("input");
    const input3 = document.getElementById("input2");
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
  
    const object = {
               kind: input,
               money: input2
  }
    const arr = Object.values(object)
            .join("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0");  
      
    display3.push(arr);

    if(isNaN(input2) || input2 === " "  ){
          alert(`first please put only alphabet \n (name of income or outcome of your money) \n second put value of your money`)
          input3.value = " "
          input1.value= " "
          window.location = document.URL
          return false;
   }

   /* if(input < 0 ||input1 === " "){
          alert("Put valid number")
          input3.value = " "
          input1.value= " "
          window.location=document.URL
          return false;
   }*/


    var value = " "; // use for loop to display each and every input
  
    for(i = 0; i < display3.length; i++){
       value = value + display3[i] + "</br>";
    }
    display2.innerHTML = value;
    input1.value = " "
    input3.value = " "

    const values = object.money;
    array1.push(values);
}



function add1(){
       const result2 = document.getElementById("result2");
       let result = array1.reduce(function(a,b){ // to add the array
       return +a + +b
   }, 0)
     result2.innerHTML = "Total Income $" + result;
}  
