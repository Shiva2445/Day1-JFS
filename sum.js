function add(n,arr){
let even=0;
let odd=0;
for(let i=0;i<n;i++)
{
if(i%2==0)
{
    even=even+arr[i];
}
 else 
    odd=odd+arr[i];
}
console.log(even);
console.log(odd);
}
let arr=[10,11,12,13];
let n= arr.length;
(add(n,arr));
