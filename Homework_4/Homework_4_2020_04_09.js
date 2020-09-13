//Exersice_1
//Given a number n ( n > 0 ). Print Fibonacci series up to n.
function fibonacci (n) {
    let previous=0;
    let next=1;
    let result=[];
    while (next<=n){
     let temp =previous;
    result.push(previous);
    previous=next;
    next=next+temp;
    }
   return result.join(',');
   }
//Exersice_2
//Insert a number. Calculate product and sum of the digits of the number. 
//If product is divisible by the sum, print the quotient, otherwise print the remainder.
function Division(num){
    let str=String(num);
    let sum=0;
    let prod=1;
    if(num!==0){
    for(let i=0;i<str.length;i++){
      sum+=Number(str[i]);
      prod*=Number(str[i]);
    }
  if(prod%sum===0){
    let quotient=prod/sum
    return 'Quotient is:'+quotient;
  }else{
      let reminder=prod%sum;
    return 'Reminder is :'+ reminder; 
  }
  }else{
    return 'Cannot Calculate!'  
  }
  }
 //Exersice_3
 //Given an array of numbers. 
 //Find the maximum and minimum elements in array.
 //Calculate their difference and check is there such an element in the array or not.
function checkDiff(arr){
let min=arr[0];
let max=arr[1];
//Minimum_Value
    for(let i=0;i<arr.length;i++){
     if(min>arr[i]){
         min=arr[i];
     }
    }
//Maximum_Value
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
       }
//Difference_Calculation_and_check
let diff=max-min;
for(let i=0;i<arr.length;i++){
    if(arr[i]=diff){
return true;
    }else{
return false;        
    }
}       
}
//Exersice_4
//Given an array of numbers. Find the index of the second maximum element 
function secondMaxIndex(arr){
    let clone=arr.slice();
    for(let j=0;j<clone.length;j++){
        for(let i=0;i<clone.length;i++){
            if(clone[i]>clone[i+1]){
                let tmp=clone[i];
                clone[i]=clone[i+1];
                clone[i+1]=tmp;
            }
        }
    }
    return arr.indexOf(clone[clone.length-2]);
}
//Exersice_5
//Given an array of numbers, padding amount and repeat count. Pad the array in the following way: 
//the padding amount specifies how many elements should be taken from the array edges,the repeat amount 
//specifies how many times the pad should be repeated
//Also, you should check that  padding amount <= length of array.

function paddinArray(arr,p,r){
    let newarr=[];
    let counter1=1;
    let counter2=1;
    if(p>arr.length){
    return 'Invaild padding amount';
    }else{
    //front
    for(let i=0;i<p;i++){
     while(counter1<=r){
     newarr.push(arr[i]);
     counter1++;
     }
    }
    //Center
    for(let i=p;i<arr.length-p;i++){
    newarr.push(arr[i]);
    }
    //back
    for(let i=arr.length-p;i<arr.length;i++){
     while(counter2<=r){
     newarr.push(arr[i]);
     counter2++;
      }
     }
     return newarr;
    }
    }
//Exersice_6
//Write a program to print rectangle pattern for given number using loop. (in this example n = 5)

function PrintCube(n){
    let res='';
        for(let i=0;i<n;i++){
         for(let j=0;j<n;j++){
         res+='*';
         }
         res+='\n';
        }
        console.log(res);
        }
 //Exersice_7
 //Write a program to print rectangle pattern for given number using loop. (in this example n = 5)
 function PrintCube2(n){
    let cube='';
    for(let i=0;i<=n;i++){
     for(let j=0;j<=n;j++){
      if((i==0||i==n)||(j==0||j==n)){
    cube+='*';
    }
    else{
    cube+=' ';
    }
    }
    cube+='\n';
    }
    console.log(cube);
    }
 //Exersice_8
 //Print the following number pattern.
 function numberPattern(n){
    let result ='';
    for(let i=0;i<2*n;i++){
        //Before_the_n_th_row
      if(i<=n){
       for(let j=1;j<=i;j++){
        result+=j;
       }
        result+='\n';
      }else{
          //After_the_n_th_row
          for(let j=1;j<2*n-i;j++){
              result+=j;
          }
          result+='\n';
      }
    }
  console.log(result);
  }