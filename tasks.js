"use strict";

// ! At Method 

//?  const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = 2;
// let fruit = fruits[2];
// console.log(fruit)


// const oldStreamers = [
//     "Jahrein",
//     "Wtcn", 
//     "Zeonn", 
//     "PintiPanda",
//     "HZ.Yasuo"];


// const newStreamers = [
//   "Kcp",
//   "Jrokez",
//   "Killayda",
//   "Elraenn",
//   "pqueenn",
// ];

// !  Concat Method


// let allStreamers = [];
// const concatStreamers = () => {
//   console.log((allStreamers = [...oldStreamers, ...newStreamers]));
// };
// concatStreamers();

//! Entries Method

// ? const esportTeams = {
//     tsm: "reltuC",
//     Thieves: "Ssumday",
//     Liquid: "soulcas",
//     FaZe : "Twistzz",
//     Cloud9 : "Blaber",
//     Fnatic :  "Boaster",
//     Gen: "Doğa Rutkay Deniz",
//   };
  
//   const entriesTeams = () => {
//     for (const key in esportTeams) {
//       console.log(key, esportTeams[key]);
//     }
//   };
  
//   entriesTeams();

// ! Join Method

//? const phoneNumber = {
//     prefix : "994",
//     number : "51",
//     number2 : "335",
//     number3 : "35",
//     number4 : "35"
// }

// const add = "-"
// console.log(phoneNumber);
//  console.log(phoneNumber.prefix + `${add}` + phoneNumber.number + `${add}` + phoneNumber.number2 + `${add}` + phoneNumber.number3 + `${add}`  + phoneNumber.number4)

// ! Slice Method


// const mySlice = (arr, num1 , num2) => {
//   num1 < num2 

//   num1++
// } 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log (1,4)


// ! Values Method

// ? const obj = {
//     a: 1, 
//     b: 2,
//     c: 3 };

// function getValues(obj) {
//     const result = [];
//     for (const key in obj) {
//       result.push(obj[key]);
//     }
//     return result;
//   }
  
//   const values = getValues(obj);
//   console.log(values); 

// ! Keys Method
// const obj = { a: 1, b: 2, c: 3 };

// function getKeys(obj) {
//     const result = [];
//     for (const key in obj) {
//       result.push(key);
//     }
//     return result;
//   }
  
//   const keys = getKeys(obj);
//   console.log(keys); 

// ! ------------Pop()
// function series (array) {

//   let deleted = array[array.length - 1];array=array.length-1

// return deleted;
// }
// console.log(series(["Fringe","Peaky Blinders","HIMYM","Breaking Bad"]));

// !-------------Push()

// const streamers = ["Elraenn", "Wtcn","Jahrein","ZeusIdious"]

// const newStreamer = "Kcp"

// function stream(array , series) {
  
//    array[array.length] = series



//          return array; 
// }
// console.log(stream(["Elraenn","Wtcn","Jahrein","ZeusIdious"], newStreamer))

// !--------------Shift()

// const myShift =(array) => {
//   let removed = array[0];
//   for (let i = 0; i < array.length; i++) {
//    array[i] = array[i+1];
      
//   }
//    array.length = array.length - 1;

//   return removed;
// }

//!--------------Unshift()

// const myUnshift = (array , value) => {
//   for (let i = array.length; i >= 0; i--) {
//       array[i] = array[i-1];
      
//    }    array[0] = value;

//    return array;
// }