//Exersice_1
//Given a sentence with missing words and an array of words. Replace all ‘_’ in a
//sentence with the words from the array.
function ReplaceWord(sent,arr){
    let counter=0
    let result ='';
 for(let i=0;i<sent.length;i++){
if(sent[i]==='_'){
result+=arr[counter];
counter++;
}else{
    result+=sent[i];
}
 }   
 return result ;
 }
 //Exersice_2
 //Given mixed array of numbers, strings, booleans, nulls and undefineds.
//Get all the numbers in a separate array. Arrange them such as from the beginning are
//the odds and from the ending the evens. (Hint: you can use Array.concat() method).
function EvensOdds(arr){
    let newarr=[];
 for(let i=0;i<arr.length;i++){
if(typeof(arr[i])==='number'){
 if(arr[i]%2!==0){
newarr.push(arr[i]);
 }
 }
 }
 for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])==='number'){
     if(arr[i]%2===0){
    newarr.push(arr[i]);
     }
     }
     }
 return newarr;
}
//Exersice_3
//Given an array of strings and numbers. Print the number of integers and the number of
//strings in the array.
function StringNumb(arr){
    let numbers=0;
    let strings=0;
for(let i=0;i<arr.length;i++){
 if(typeof(arr[i])==='number'){
     numbers++;
 }else{
     strings++;
 }
}
console.log('Strings: '+strings);
console.log('Numbers: '+strings);
}
//Exersice_4
//Given an array of strings. Find the strings with maximum and minimum lengths in array.
//Print the sum of their lengths
function MaxMin(arr){
        let min=arr[0].length;
        let max=arr[1].length;
     //Minimal_Value
    for(let i=0;i<arr.length;i++){
        if(min>=arr[i].length){
        min=arr[i].length;
        }
     //Maximal_value
    for(let i=0;i<arr.length;i++){
        if(max<=arr[i].length){
            max=arr[i].length;
            }
    }
     }
     //Sum
    let sum=Number(max+min);
    return sum;
    }
    //Exersice_5
    //Given an array of numbers. 
    //Print the sum of the elements in array
function elementsum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
      sum+=arr[i];
    }
 return sum;
}
//Exersice_6
//Create the array which elements are products between two neighbours
function Products(arr){
    let newarr=[];
      for(let i=0;i<arr.length-1;i++){
   let element= arr[i]*arr[i+1];
   newarr.push(element);
      } 
      return newarr; 
   }