//Exersice_1
//Find the sign of product of three numbers without multiplication operator. 
//Display the specified sign.
function sign(n,n1,n2){
    let v1=prompt(n);
    let v2=prompt(n1);
    let v3=prompt(n2);
    let counter=0;
    let str=String(v1+v2+v3);
     if((v1==='0')||(v2==='0')||(v3==='0')){
        return 'unsigned';
       }else {
           for(let i=0;i<str.length;i++){
           if(str[i]==='-'){
              counter++;
       }
             }
    if(counter===1){
        return '-';
      }else{
        return '+';
      }
      
       }
   }
//Exersice_2
//2.	Insert a digit and a number. 
//Check whether the digits contains in the number or not.

   function  diginumb(n,m){
   let str=String(m);
   for(let i =0;i<=str.length;i++){
       if(str[i]==n){
         return 'Yes';

       }else{
         return 'No';
       }

   }

   }
//Exersice_3
//Enter a number. Reverse its first and last digits. Print the new number
function reverse(n){
  let str=String(n);
  let newstr='';
  if(str.length==1){
  return n;
  }
  if(str.length==2){
  newstr+=str[str.length-1];
  newstr+=str[0];
  return Number(newstr);
  }
  if(str.length>=3){
  newstr+=str[str.length-1];
  for(let i=1;i<=str.length-1;i++){
  newstr+=str[i];
  }
  newstr+=str[0];
  return Number(newstr);
  }
  }
//Exersice_4.
//Given three numbers. Sort them by the ascending order

//Way_1_arrays
function assending (n,n1,n2){
  let arr=[n,n1,n2];
  for(let j=0;j<arr.length;j++){
   for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
    let tmp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=tmp;
    }
  }
  }
  return arr;
  }
  //Way_2_IFs

  function assending (n,n1,n2){
    debugger;
    let v=Number(prompt(n));
    let v1=Number(prompt(n1));
    let v2=Number(prompt(n2));
    //Element_1_V
    if(v>v2){
     if(v2>v1){
    console.log(v1,v2,v);
    }else{
    console.log(v2,v1,v);
    }
    }
    //Element_2_V1
    if(v1>v){
     if(v>v2){
    console.log(v2,v,v1);
    }else{
    console.log(v,v2,v1);
    }
    }
    //Element_3_V2
    if(v2>v1){
     if(v1>v){
     console.log(v,v1,v2);
    }else{
     console.log(v1,v,v2);
    }
    }
    }
 //Exersice_6
//Write a function with using only 2 ifs.
      function twoifs(n){
        let i=0;
        let j=0;
        if((n%2===0)&&(!Math.floor(n/10))){
        i++;
        }
        if((n%3===0)&&(n%10===1)){
        j++;
        }
        console.log(i);
        console.log(j);
        }
//Exersice_7
 //Rectangle or triangle area
    function area(name,a,b){
      if(String(name)==='triangle'){
      let area=a*b/2;
      return area;
      }
      if(name==='rectangle'){
      let area=a*b;
      return area;
      }
      }
//Exersice_8
//(***) Enter a number.
//Find the difference between its biggest and smallest digits.
        function digidiff(n){
          debugger;
          let str=String(n);
          let max=str[0];
          let min=str[1];
          
          //Maximal
          for(let i=0;i<str.length;i++){
          if(max<str[i]){
          max=str[i];
          }
          }
          //Minimal
          for(let i=0;i<str.length;i++){
          if(min>=str[i]){
          min=str[i];
          }
          }
          //Difference
          let diff=Number(max-min);
          return diff;
          }