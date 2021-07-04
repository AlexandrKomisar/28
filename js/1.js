class Circle {
    constructor(r) {
        this.r = r;
    }

    get radius() {
        return this.r;
    }

    set radius(r) {
        this.r = r;
    }

    get d(){
        return this.r * 2;
    }

    area() {
        return Math.PI * this.r * this.r;
    }

    circumference(){
        return Math.PI * this.r *2;
    }
}

let circle = new Circle(7);
console.log(circle.radius);
console.log(circle.d);
console.log(circle.area());
console.log(circle.circumference());