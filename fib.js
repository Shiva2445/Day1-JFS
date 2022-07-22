function fib(a,b,n){
    var n1=[];
    n1.push(a);
    n1.push(b);
for(var i=2;i<=n;i++)
{
    let z=a+b;
    n1.push(z);
    a=b; 
    b=z;
    
}
console.log(n1);

}

fib(0,1,5);