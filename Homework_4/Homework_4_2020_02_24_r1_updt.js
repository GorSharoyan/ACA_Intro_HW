//Exersie_1
//Given a number n (n > 0). Print Fibonacci series up to n;
    function fibonacci (n){
        let result =[];
        let previous = 0;
        let next = 1;
        while (previous <= n) {
            let temp = previous;
            result.push(previous);
            previous = next;
            next = next + temp;
        }
        return result.join(',');
    }
    //way_2
    function fib(n){
        let result = [1,1];
        for(let i = 2 ; true ; i++){
          if(n<=result[i-2]+result[i-1]){
                return result;
          }
          result.push(result[i-2]+result[i-1]);
        }
        }
//Exersice_2
//Insert a number. 
//Calculate product and sum of the digits of the number. 
//If product is divisible by the sum, print the quotient, otherwise print the remainder.
    function prodsum(number){
        let sum = 0;
        let product = 1;
        while(number){
            sum+=number%10;
            product*=number%10;
            number=Math.floor(number/10);
            }
        if(product%sum===0){
            return 'Quotient is ' + product/sum;
                }else{
                return 'Reminder is ' + product%sum;
                }
        }
 //way_2
 let sumAndCalc = number =>{
    let numberStr = number + '';
    let sum = 0;
    let product=1;
   for(let i = 0 ; i<numberStr.length;i++){
     sum+=+numberStr[i];
     product*=numberStr[i];
   }
   if(product%sum===0){
     return product/sum;
   }else{
    return product%sum;
   }
   }
 
 let sumAndCalc = number =>{
    let numberStr = number + '';
    let sum = 0;
    let product=1;
   for(let i = 0 ; i<numberStr.length;i++){
     sum+=+numberStr[i];
     product*=numberStr[i];
   }
   if(product%sum===0){
     return product/sum;
   }else{
    return product%sum;
   }
   }
//Exersice_3_Given an array of numbers. 
//Find the maximum and minimum elements in array.
// Calculate their difference and check is there such an element in the array or not.
function maxmindiff (arr){
    let min =arr[0];
    let max =arr[arr.length-1];
    let diff=max-min;
//minimal value
 for(let j=0;j < arr.length; j++){
    if (min>arr[j]){
    min=arr[j];
    }
   }
//maximal value
for(let i=0 ;i < arr.length ; i++){
    if(max<arr[i]){
    max=arr[i];
    }
    }
//difference
for(let f=0;f<arr.length;f++){
if(arr[f]=== diff){
return 'true';
}
return 'false';
}
}
//Way_2
function maxmindiff (arr){
    let min =arr[0];
    let max =arr[0];
    let diff=max-min;
for(let i=0;i < arr.length; i++){
if (max<arr[i]){
    max=arr[i];
    }
 if(min>arr[i]){
    min=arr[i];
   }
   }
for(let f=0;f<arr.length;f++){
if(arr[f]=== diff){
return 'true';
}
return 'false';
}
}
//Exersice_4
function secondMaxIndex (arr){
    let clone = arr.slice(0);
for(let j=0;j<clone.length,i++){
 for(let i=0;i < clone.length-1; i++){
 if (clone[i]>clone[i+1]){
   let tmp =clone[i];
   clone[i] = clone[i+1];
   clone[i+1]=tmp;
    }
  }
}
let secondmax=clone[clone.length-2];
arr.indexOf(secondmax);
 }
//Way_2
function secondMaxIndex (arr){
    let clone = arr.slice(0);
    let isMoved= true;
while(isMoved){
   isMoved=false;
 for(let i=0;i < clone.length-1; i++){
  if (clone[i]>clone[i+1]){
   isMoved=true;
   let tmp =clone[i];
   clone[i] = clone[i+1];
   clone[i+1]=tmp;
    }
  }
}
let secondmax=clone[clone.length-2];
arr.indexOf(secondmax);
}
//Exersice_5
function asd(arr, pad ,rep ){
    let start =[],end=[],startRep=[],endRep=[];
    //es erku popoxakany petq en vor ban lini arrayneri mej push anelu 
    start=arr.slice(0,pad);
    end =arr.slice(arr.length-pad);
   for(let i=0;i<rep;i++){
       for(let j=0;j<pad;j++){
           startRep.push(start[j]);
           endRep.push(end[j]);  
   }
   }
   for(let i =0 ; i<arr.endRep.length; i++){
   arr.unshift(startRep[startRep.length-i-1]);
   arr.push(endRep[i]);
   
   }
   return arr;
   }
//Exersice_6
//Write a program to print rectangle pattern for given number using loop. 
function printCube(n) {
    let cube1 = '';
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n; j++) {
                cube1 += '*';
            }
          cube1 += '\n';
        }
    console.log(cube1);
    }
//Exersice_7
//Write a program to print rectangle pattern for given number using loop
function printcube2 (n) {
    let cube2 = '';
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            cube2 += ((i === 0 || i === (n - 1)) || (j === 0 || j === (n - 1))) ? '*' : ' ';
        }
        cube2 += '\n';
    }
    console.log(cube2);
}
//way_2
function res (n){
    let res ='';
    let rowChar= ' * '
    for(let i = 0 ; i<n ;i++){
      for(let j = 0 ; j<n ;j++){
       if(i===0||j===0||i===n-1||j===n-1){
        res+= ' * ';
    }else{
        res+= '   '; 
    }
    }
     res+='\n'
    }
    console.log(res);
    }
    //Exersice_8
    function nC (n){
        let str = n + '';
        let res= '' ;
      for(let i = 0 ; i<str.length ; i++){
        res +=i;
      }
       return res ;
      }
      function printP (n) {
       let res = '' ;
      for(let i = 0 ; i< n*2; i++){
        if(i<=n){
        res+=nC[i]+'\n';
      }else{
        res + = nC(n*2-i)+'\n';
      }
      }
      return res;
      }
     //w2
     function printP (n) {
        let res = '' ;
       for(let i = 1 ; i< n*2; i++){
         if(i<=n){
          for(let j = 1 ; j <=i;j++){
        res+=j;
       }
        res += '\n';
       }else{
         for(let j = 1 ; j <=2n-i;j++){
         res+=j;
       }
        res += '\n';
       }
       }
       console.log(res);
       }