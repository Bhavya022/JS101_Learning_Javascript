let count =0; 
let n =23;
for(let i=2;i<=n;i++){
  if(n%i==0){
  count ++;
  } 
  console.log(count);
} 
if(count>1){
    console.log(" not Prime");
  } 
  else{
    console.log(" prime");
  }