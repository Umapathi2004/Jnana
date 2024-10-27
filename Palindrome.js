// var Data = "A man, a plan, a canal, Panama_-+!";
// Data = [...Data];
// var temp = Data.filter((data)=>{
//     if(!([" ",",",".","!","?","{","}","~","@","#","$","%","^","&","*","(",")","[","]","_","-","+"].includes(data))){
//         return data;
//     }
// })
// const length = temp.length;
// var j=length-1;
// console.log(temp);
// for(var i = 0 ; i<length-1; i++){
//     if(i==j){
//     console.log("true");
//     return true;
//     }
//     if(temp[i].toLowerCase()==temp[j].toLowerCase()){
//       j--;
//       continue;
//     }
//     else{
//         console.log("false");
//         return false;
//     }
// }

var Data = "A man, a plan, a canal, Panama_-+!";
var cleanedData = Data.replace(/[ ,.!?{}~@#$%^&*()_+\-]/g, '').toLowerCase();
var isPalindrome = cleanedData === cleanedData.split('').reverse().join('');
console.log(isPalindrome ? "true" : "false");
