// create an empty array
let array = [];
const display = [];



   function put(){
       const input1 = document.getElementById("input");
       const input3 = document.getElementById("input2");
       const input = document.getElementById("input").value;
       const input2 = document.getElementById("input2").value;
       const display1 = document.getElementById("display1");
   
      const object = {
           kind: input,
           money: input2
       } 
      const arr = Object.values(object)
             .join("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")
      display.push(arr);

     if(isNaN(input2) || input2 === " " ){
              alert("Put valid number");
              input3.value = " "
              input1.value= " "
              window.location = document.URL
              return false;
       }

      if(input < 0 || input1 === " " ){
             alert("Put valid number ");
             input3.value = " "
             input1.value= " "
             window.location = document.URL
            return false;
     }


      var value = " "; // use for loop to display each and every input
         
      for(i = 0; i < display.length; i++){
          value = value + display[i] + "</br>";
       }
      display1.innerHTML = value;
      input1.value = " "
      input3.value = " "

     const values = object.money;
     array.push(values);
}
function add(){
      const result1 = document.getElementById("result1");
      let result = array.reduce(function(a,b){ // to add the array
      return +a + +b
      }, 0)
      result1.innerHTML = "Total Income $" + result;
   }
