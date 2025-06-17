// const printBill =function (txt){
//     console.log("================");
//     console.log("Rs.",txt);
//     console.log("================");
// };
const printBillForAll =(txt)=>{
    console.log("================");
    console.log("Your Finall bill for All is")
    console.log("Rs.",txt);
    console.log("================");
};
const printBillForFoodsAndDrinks=(txt)=>{
    console.log("================");
    console.log("Your Finall bill for Foods and drinks is");
    console.log("Rs.",txt);
    console.log("================");
};
const printBillForFoods =(txt)=>{
    console.log("================");
    console.log("Your Finall bill for foods is");
    console.log("Rs.",txt);
    console.log("================");
};
const printBillForClothes =(txt)=>{
    console.log("================");
    console.log("Your Finall bill for clothes is");
    console.log("Rs.",txt);
    console.log("================");
};
const printBillForDrinks =(txt)=>{
    console.log("================");
    console.log("Your Finall bill for Drinks is");
    console.log("Rs.",txt);
    console.log("================");
};

// printBill(100);
const calculateBillAmountForFood=(price)=>{
    return price*1.05;
};
const calculateBillForDrinks=(price)=>{
    return price*1.20;
};
const calculateBillForClothes=(price)=>{
    return price*1.12;
};
const values=()=>{
    console.log(calculateBillAmountForFood(100));
    console.log(calculateBillForClothes(200));
    console.log(calculateBillForDrinks(300));
};
values();
const generateBill=(food,clothes,drinks,cb)=>{
    const foodBill =calculateBillAmountForFood(food);
    const clothesBill=calculateBillForClothes(clothes);
    const drinksBill=calculateBillForDrinks(drinks);
    const totalBill=foodBill+clothesBill+drinksBill;
    cb(totalBill);
};
generateBill(100,200,300,printBillForAll);
generateBill(100,0,300 ,printBillForFoodsAndDrinks);
generateBill(100,0,0,printBillForFoods);