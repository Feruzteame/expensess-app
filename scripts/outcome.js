// create an empty array
let array1 = [];

function put1(){
    const input1 = document.getElementById("input");
    const input = document.getElementById("input").value;
    const display2 = document.getElementById("display2");
    
     // avoid input 0, " ", string
    if(input < 0 || input === " " ){
       alert("put valid number");
       input1.value = " "
       return false;
        }
    if(isNaN(input)){
       alert("Put valid number");
       input1.value = " "
       return false;
    }
 // put the input value in the empty array
    array1.push(input);
    var value1 = " ";
    // use for loop to display each and every input        
    for(i = 0; i < array1.length; i++){
        value1 = value1 + array1[i] + "</br>";
    }  
     // display the array   
    display2.innerHTML = value1;
    input1.value = " "
  }
   // function which used to add the array
  function  add1(){
      const result2 = document.getElementById("result2");
      let sum1 = array1.reduce(function(a, b){
              return +a + +b;}, 0);
      result2.innerHTML = "Total Outcome $" + sum1;
    }