var output = [];
var count = 0;
function fizzbuzz(){
     

    while(count<=100){

      count++;
      if(count%15==0){
          output.push("fizzbuzz");
      }
      else if(count%3==0)  
       {
        output.push("fizz");   
       }
       else if(count%5==0){
        output.push("buzz");   
       }
       else 
       {
          output.push(count);
       }



    }


    console.log(output);
            

};


fizzbuzz();
