

//INHERITE USING CONSTRUCTOR FUNCTION
var car = function(name,color,isNew,wheels){
    this.name = name;
    this.color = color;
    this.isNew = isNew
    this.wheels = wheels;

}

var newCar   = new car("BMW","white",true,4);
// console.log(newCar)


var newDetailsCar = function(name,color,isNew,wheels,price){

    car.call(this,name,color,isNew,wheels)
    
    this.price = price
}

var addedDeatils = new  newDetailsCar("audi","red",false,2,120000);

console.log(addedDeatils)



//INHERITE USING THE CREATE.OBJECT();

var car = {
    name : "audi",
    price : 12000,
    innew :true,
    wheels : 4,
}

var newCar = Object.create(car);
newCar.name = "bmw"
console.log(newCar)