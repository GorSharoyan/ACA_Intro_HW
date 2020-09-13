// Exersise_1
function Replaceword (sentence,array){
    let counter = 0;
    let sentNew = '';
    for (let i = 0; i < sentence.length; i++) {
       if (sentence[i] === '_') {
           sentNew += array[counter];
           counter++;
       } else {
           sentNew += sentence[i];
       }
   }
   console.log(sentNew);
   }

// Exersice_2
function EvensOdds(array){
    let evens = [];
    let odds = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            if (array[i] % 2 === 0) {
                evens.push(array[i]);
            } else {
                odds.push(array[i]);
            }
        }
    }
    for (let j=0; j<odds.length;j++){
        evens.push(odds[j]);
            }
    let newArray=evens;
            console.log(newArray);
    }

//Exersice_3
function NumberString(array){
    let numbers=0;
    let strings=0;
    for(let i=0;i<array.length;i++){
     if(typeof array [i] === 'number'){
     numbers++;
    }else{
     strings++;
    }
    }
    console.log(numbers);
    console.log(strings);
    }
    NumberString([1,10,'hi',2,3])

//Exersice_5
function Sumarray (array){
   let counter=0;
  for(let i=0;i<array.length;i++){
    counter += array[i]; 
}
console.log(counter);
}
//Exersice_6
function ProductArray (array){
    let newarray=[];
       for(let i=0;i<array.length-1;i++){
       n=array[i]*array[i+1];
       newarray.push(n);
       }
    console.log(newarray);
    }