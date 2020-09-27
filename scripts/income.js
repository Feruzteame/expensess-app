let array = [];

 function put(){
   const input1 = document.getElementById("input");
   const input = document.getElementById("input").value;
   const display1 = document.getElementById("display1");
    
   // avoid input 0, " ", string
   if(input < 0 || input === " " ){
      alert("put valid number.");
      input1.value = " "
      return false;
      }
   if(isNaN(input)){
      alert("Put valid number.");
      input1.value = " "
      return false;
      }
   
   // put the input value in the empty array
   array.push(input);
   var value = " ";
   // use for loop to display each and every input      
   for(i = 0; i < array.length; i++){
   value = value + array[i] + "</br>";
   }
   // display the array   
   display1.innerHTML = value; 
   input1.value = " "
 }