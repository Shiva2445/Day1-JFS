const readline = require ("readline-sync");
let emp=[{
    Id:"1",Name:"a",Role:"x",salary:"000"},
    {
    Id:"2",Name:"b",Role:"y",salary:"111"},
    {
    Id:"3",Name:"c",Role:"z",salary:"222"},
    {
    Id:"4",Name:"d",Role:"p",salary:"333"}];

function emp(){
    let newemp ={
        1:function Showallemployees(){ 
            console.log(emp);
            },
        
        2:function addemployees(){
            readline.question("enter emp ID");
            let id=nextInt();
            readline.question("enter emp Name");
            let name=next();

            readline.question("enter emp Role");
            let role=next();

            readline.question("enter emp salary");
            let sal=nextInt();

            let added=newemp.push(id,name,role,sal);
            console.log(added);
        
        },


          3:function remove(){
              let newemp=emp.pop(Id==3);

          } ,
          4:function search(){
              let newemp ={Name:"a"};
              function check(newemp)
              console.log(newemp);
          }

        }
          function displayoptions(){
              console.log("1-show all Employees");
              console.log("2-Add employee");
              console.log("3-Remove employee");
              console.log("4-Search employee");
              console.log("-1-exit");
              console.log();}
function notcase(option){
    if (option>4||option ==0||option <0){
        console.log("Wrong");
        console.log();
        return false;
    }
    return true;
}

function init() {
    let option;
    while(true)
    {
        displayoptions();
       option= readline.question("enter your choice: ");
       if(notcase(option)) {
        emp[option]();

       }
       if(option==-1){
           console.log("OK")
           break;
       }}
       }
    init();
}
newemp();