// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let split=companyName.split("")


for(let i=split.length-1;i>=0;i--){
 reversedCompanyName+=split[i]
}
console.log(reversedCompanyName);


// function reverseWord (str){
//     let split = str.split('');
//     let reverseResult='';
// for(let i=split.length-1 ; i>=0;i--){
//     reverseResult+= split[i]   
// }
// return reverseResult
// }
// console.log(reverseWord('test'))
