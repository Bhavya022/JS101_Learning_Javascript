for(let x=1;x<=5;x++){
  console.log("Hello World");
} 
for(let x=1;x<=5;x++){
  console.log(x);
} 
//code to print from 10 to 1
for(let i=10;i>=1;i--){
  console.log(i);
}  
let no="";
for(let i=10;i>=1;i--){ 
  no+=i+" ";
} 
console.log(no);  
let odd="";
for(let i=1;i<=20;i++){
  if(i%2!=0){ 
    odd+=i+" ";
  } 
} 
console.log(odd); 
let star = "";
for(let i=1;i<=4;i++){
  star+=i+"-*";
} 
console.log(star); 
let sum =0;
for(let i=1;i<=15;i++){
  if(i%2==0||i%5==0){
    sum+=i; 
    
  }
} 
console.log(sum); 
let fac=1;
for(let i=1;i<=5;i++){
 fac*=i;
} 
console.log(fac); 
let avg = 0;
for(let i=1;i<=50;i++){ 
  if(i%2==0){
    avg+=i;
  }

} 
console.log(avg/25); 
