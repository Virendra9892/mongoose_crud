// let promise = new Promise((resolve,reject)=>{
//     let num = 20;
//     if(num>10){
//         resolve(num)
//     }
//     else{
//         reject("error")
//     }
// })

// promise.then((v)=>{return v})
// .catch((er)=>{console.log("virendra"); return {a:9999,er}})
// .then((va)=>{console.log("dsvcghdsc",va);throw 88})
// .catch((v)=>{console.log(v);return 1234}).then((va)=>{return va;});

// second largest element in an array

// let ar = [12,10,13,28,25,45,19];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0; i<ar.length; i++){
//     if(ar[i]>max1){
//         max2=max1;
//         max1=ar[i];
//     }
//     else if(ar[i]>max2 && max2!=ar[i]){
//         max2=ar[i];
//     }
// }
// console.log(max2);

// insert an element in given position

// let arr = [1,2,3,5,8,9]
// let position = 3;
// let newEl = 100;
// for(let i = arr.length-1; i>=0; i--){
//     if(arr[i]>=arr[position]){
//         arr[i+1]=arr[i]
//     }
//     if(position==arr[i]){
//         arr[position]=newEl
//     }
// }
// console.log(arr);

// find second elemenmt in an array

// let arr = [2,13,4,56,7,8]
// let min1 = arr[0];
// let min2 = arr[1];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<min1){
//         min1=arr[i];
//     }
//     else if(arr[i]!==min1 && arr[i]<min2){
//         min2=arr[i]
//     }
// }
// console.log(min2);


// middleware in node js

// const express = require("express");
// const app = express();

// app.use("/",(req,res,next)=>{
//     if(req.params==1)
//     next();
// })   

// let arr = [1,2,3,5]
// let total = ((arr.length+1)*(arr.length+2))/2;
// for(let i = 0; i<arr.length; i++){
//       total = total-arr[i];
// }
// console.log(total);

