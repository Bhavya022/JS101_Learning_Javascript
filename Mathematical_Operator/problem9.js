const discountPrice = 3999;
let billAmt = 4000;
if(billAmt>=discountPrice){
  console.log(billAmt-(billAmt*10/100));
} 
else{
  console.log("Not Eligible");
} 
