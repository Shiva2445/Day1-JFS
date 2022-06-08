function duplicate(a){
    let b=[];
    for(let i of a){
        if(b.indexOf(i)==-1){
            b.push(i);
        }
    }
    console.log(b);
}
var Array=[1,2,1,2];
duplicate(Array);