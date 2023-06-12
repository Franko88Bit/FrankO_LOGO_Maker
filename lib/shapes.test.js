const { Triangle, Square, Circle } = require("./shapes");

// green is my favorite color so will be testing the shapes with known properties and green color
describe("Circle test", () => {
    test("test for a circle with a green background", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="green" />'
        );
    });
});

describe("Square test", () => {
    test("test for a square with a green background", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="green" />'
        );
    });
});

describe("Triangle test", () => {
    test("test for a triangle with a green background", () => {
        const shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
        );
    });
});

