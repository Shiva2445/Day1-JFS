/*let a={
    Name:"a",
    place:"Hyderabad"
}
//console.log(a.hasOwnProperty("place"));
function Emp(name,sal,designation){
this.name=name;
this.sal=sal;
this.designation=designation;
}
let obj=new Emp("Shiva",111,"ASE")
//console.log(obj);
const b=Object.entries(obj);
//console.log(b);
let z=Object.create(a);
console.log(z.place);
const c={
"Day":"Thus"
}
c.Day="Fri";
//console.log(c);*/
var t={
    a:1,b:2
}
var s={
    b:4,c:3
}
var result=Object.assign(s,t);
console.log(result);
