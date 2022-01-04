 
class Movie {

    constructor(MovieName,StudioName,Rating){
        this.MovieName= MovieName;
        this.StudioName=StudioName;
        this.Rating = "PG" && Rating;
        
        
    }

//     getpg(){
//          if(typeof this.Rating=== "undefined"){
// return this.Rating = "PG"
//         }
//         else{
//             return this.Rating = this.Rating;
//         }
//     }


}


const movie1 = new Movie("X-Men","DC_Studio",)
const movie2 = new Movie("Avathar","Fox Studios","PG-13")
const movie3 = new Movie("Avenger","Marval_Studio","G")
const movie4 = new Movie("SpiderMan","Marval_Studio",)

console.log(movie1.Rating);
// Convert the UML diagram to Typescript class. - use number for double

class Circle {

constructor(radius,color){
    this.radius = 1.0;
    this.color = "red";

}

circle() {return `radius:${this.radius}color${this.color}`}
getRadius(){return this.radius}
setRadius(value){return value = this.radius}
getColor(){return this.color}
setColor(value){ return value = this.color}
toString(value){ return value}
getArea(radius)
{
this. radius = radius;

this. area = function ()
{
return Math. PI * this. radius * this. radius;
};
getCircumfrance(radius){
    this.radius = radius;
    this.area = function (){
        return 2 * Math.PI * radius
    }



// Write a “person” class to hold all the details

class PersonalDetails{
    constructor(FirstName,LastName,Age,Mobile,State){
    this.FirstName= FirstName
    this.LastName = LastName
    this.Age = Age
    this.Mobile = Mobile
    this.State = State
}

}

const person1 = new PersonalDetails("Mukesh",".M",21,  9715165290 , "Tamilnadu")
 console.log(person1);


// Calculate uber Price

class Price{
    constructor (Name,Bill){
        this.Name = Name;
        this.Bill = Bill;

    }
getPrice(value){
  value =  value * 18//per  kilomete 18 Rs/
   return  this.Bill = value
}

}
const name = new Price("Mukesh");
console.log(name.getPrice(5));