/*var a=[2,3,1,4];
var b=[];
for(let i=0;i<=a.length;i++)
{
    if(a[i]+a[i+1]==5)
    b.push(a[i],a[i+1]);

}
console.log(b);*/
/*let a=[1,0,1,0]
for(let i=0;i<=a.length;i++){
    if(a[i]==0)
    {
      a.push(a[i]);
      a.unshift(0);
    }
    console.log(a);
}*/
let n=5;
let string="";
for(let i=0;i<n;i++){
  for(let j=0;i<n;j++){
    if(i!=0||i!=n-1){
      string+="*";
      }
else{
  if(j!=0||j!=n-1){
      string+="*";
  }
  else{
          string+=" ";

  }
      
}
    }
        string+="\n";}
        console.log(string);
