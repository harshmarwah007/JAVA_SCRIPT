var list = new Array();

var fibonacci = (n)=>{
    var i=1;
    var a = 0;
    var b = 1;
    var feb = 0;
    while(i<=n){ 
        //list.push(b);
        list.push(feb);
        
        a = b;         
        b = feb;
        feb = a+b;
         i++;

    }   
    return list;
}

console.log(fibonacci(10));