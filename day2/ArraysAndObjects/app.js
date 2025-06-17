// const cse010Name = "Probodh";
// const cse010Address = "Rourkela,OD";
// const cse010bloodGroup = "B+";
//object store key value pair and keys must be string or symbols
// const cse011={
//     name:"klaus",
//     address:"New Orleans",
//     bloodGroup:"B+",
// };
// console.log(cse011);
// //Read the Value
// const studentName=cse011.name;
// console.log("Student Name:",studentName);
// //Update the value
// cse011.bloodGroup="A+";
// //Add a key value pair
// cse011.college="LPU";
// //Delete a key value pair
// delete cse011.address;
// console.log(cse011);
//Object is a non primitive data type
//what are primitives and what are non primitives
//Primitives: string, number, boolean, null, undefined, symbol
//Non Primitives: object, array, function   
//Object is a collection of key value pairs
//Object is a reference type    
//Object is mutable, we can change the value of the object
//Object is dynamic, we can add or remove key value pairs
//when we do const temp = cse011 it creates a shallow copy of the object
//Shallow copy means it copies the reference of the object, not the value

// const person ={
//     name:'Probodh',
//     height:1.8,
//     weight:75,
//     college:'LPU',
//     rollno:'CSE010',
//     getBMI : function(){
//         const bmi = (this.weight/(this.height**2)).toFixed(2);
//         console.log(`BMI of ${this.name} is ${bmi} `);
//         if(bmi<20){
//             console.log("not fit");
//         }else if(bmi>=20 && bmi<25){
//              console.log("fit");
//         }else if(bmi>=25 && bmi<30 ){
//              console.log("obverweight");
//         }else{
//              console.log("not fit");
//         }
//     },
// };
// person.getBMI();
// person.weight=90;
// person.getBMI();
// const allkeys= Object.keys(person);
// console.log("allkeys",allkeys);
// const allvalues= Object.values(person);
// console.log("allvalues",allvalues);
// const allentries = Object.entries(person);
// console.log("allkeys",allentries);
// const person ={
//     name:'Probodh',
//     height:1.8,
//     weight:75,
//     college:'LPU',
//     rollno:'CSE010',
// };
// const clg =person.college;
// console.log(clg);

// const whichKey = prompt("enter choice:");
// const choice= person[whichKey];
// console.log(whichKey,":", choice);
// const person2=person;
// person.name="dufus";
// console.log("person2",person2);
// console.log("person",person);

//destructuring
// const {weight,college}=person;
// console.log(weight,college);
//===================================================================================================
// const person ={
//     name:'Probodh',
//     height:1.8,
//     weight:75,
//     college:'LPU',
//     rollno:'CSE010',
//     marks:{
//         Evs:42,
//         maths:36,
//     },
// };
// const person2={...person};
// person2.name="dufus";
// person2.marks.maths=45;
// console.log(person);
// console.log(person2);
//=========================================================================================================
