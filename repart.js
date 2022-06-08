function repeat(a,n){
    if(n==0||n==1)
    return n;
    var temp=new Array(n);
    var j=0;
    for(var i=0;i<n-1;i++)
    {
    if(a[i]!=a[i+1])
    temp[j+1]=a[i];
    temp[j+1]=a[n-1];
    for(var i=0;i<j;i++)
    a[i]=temp[i];
    return j;
}
var a=[1,5,5,1];
var n=a.length;
n=repeat(a,n);
for(var i=0;i<n;i++)
{
console.log(a[i]+"");
}
(repeat(a,n));
}