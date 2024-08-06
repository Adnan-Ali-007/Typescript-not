// let sale:number=123456789;
// let course:string='Typscript';
// //tuple 
// let user:[number,string]=[1,'Mosh'];
// enum 
enum size{small,medium,large};
let mysize:size=size.large;
//function
function calctax(income:number,taxyr=2022):number{
   if(taxyr<2022)
      return income*1.2;
   return income*1.3
}
calctax(10_000);
// let employee:{
//    readonly id:number,
//    name:string
// }={id:1, 
//    name:'mods',
 
// };
// we can use type alias
type Employee={
   readonly id:number,
   name:string,
   // retire:(date:Date)=>void
}
let employee:Employee={
   id:1, 
   name:'mods'
   // retire:(date:Date)=>{
   //    console.log(date)
   // }
};
//intersection
type draggable={
   drag:()=>void
}
type Resizable={
   resize:()=>void
}
type UiWidget=draggable&Resizable
let textbox:UiWidget={
   drag:()=>{},
   resize:()=>{}
}
//option chaining
type Cust={
   brday:Date
}
function getbrday(id:number):Cust | null{
   return id===0?null:{birthday:new Date()}
}