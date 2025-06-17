// const arr=["tata","mahindra","suzuki","hyundai"];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr["1"]);
// const company2 =arr[1];
// console.log(company2);

// const [a,b,c]=arr;
// console.log(b,c);
//-------------------------------------------------------------------------------------
//ADD A NEW VALUE TO THE ARRAY
// const arr=["tata","mahindra","suzuki","hyundai"];
// arr.push("Honda");
// arr.pop();
// arr.shift();
// arr.unshift("Toyota");
// arr.splice(2,1,"KIA","Renault");

// arr.splice(1,1);
// arr.splice(1,0,"bmw");
// console.log(arr);
// console.log(arr.indexOf("suzuki"));

// const arr =[{name:"Likhilesh",city:"Delhi"},
//     {name:"Abhinav",city:"Kanpur"},
//     {name:"Sumedh",city:"Mumbai"},
// ];
// console.log(arr.indexOf({name:"Abhinav",city:"Delhi"}));
// console.log(arr.indexOf({name:"Abhinav",city:"Kanpur"}));
// if({name:"Raj"}=={name:"Raj"}){
//     console.log("TRUE");
// }else{
//     console.log("FALSE");

// }
// const per1={name:"RAJ"};
// const per2={...per1};
// if(per1==per2   ){
//     console.log("TRUE");
// }else{
//     console.log("FALSE");
//}
// const arr=["ab","ads","rt","re"];
// if(arr.includes("ab")){
//     console.log("ab is present in the array");
// } else {
//     console.log("ab is not present in the array");
// }
// const myFunc=(a,b,c)=>{
//     if(a=='mn')return true;
//     else return false;
// };
// const arr=["ab","xy","mn","ab","pq"];
// const elem = arr.find(myFunc);
// console.log(elem);
// const myFunc=(a)=>{
//     if(a.name=='Abhinav' && a.city=="Kanpur")return true;
//     else return false;
// }

// const arr =[{name:"Likhilesh",city:"Delhi"},
//     {name:"Abhinav",city:"Kanpur"},
//     {name:"Sumedh",city:"Mumbai"},
// ];
// const elem=arr.find(myFunc);
// console.log(elem);
const arr =[{name:"Likhilesh",city:"Delhi",score:33},
    {name:"Abhinav",city:"Kanpur",score:22},
    {name:"Sumedh",city:"Mumbai",score:44},
];
const myFunc=(elem)=>{
    if(elem.score>25){
        return {...elem, remarks:"pass"}
    }else{
        return {...elem, remarks:"fail"}
    }
};
const resArr=arr.map(myFunc);
console.log("resArr",resArr);