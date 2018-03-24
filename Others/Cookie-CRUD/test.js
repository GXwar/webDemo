function show(name,age){
  this.name=name;
  this.age=age;
}
show.prototype.say=function(){

  console.log("my name is:"+this.name);

}
var p=new show("acorn",23);
var p1=Object.create(p)
console.log({}.__proto__)
console.log(Object.prototype);