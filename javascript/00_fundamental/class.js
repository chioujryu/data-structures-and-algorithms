// object
let c1 = {
    radius: 5,
    getArea(){
        return Math.PI * this.radius * this.radius;
    },
};

let c2 = {
    radius: 10,
    getArea(){
        return Math.PI * this.radius * this.radius;
    },
};
console.log(c1.radius)
console.log(c1.getArea())


// class
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
}

let circle_1 = new Circle(5)
let circle_2 = new Circle(20) 

console.log(circle_1.getArea())
console.log(circle_2.getArea())