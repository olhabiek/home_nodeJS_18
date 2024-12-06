var car = {
    make: "Toyota",
    model: "Corolla",
    engine: {
        type: "Hybrid",
        horsepower: 121,
    },
    year: 2020,
};
var car1 = {
    make: "Subaru",
    model: "Forester",
    engine: {
        type: "Crossover",
        horsepower: 150,
    },
};
function printCarInfo(car) {
    console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(car.make, "\n    \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(car.model, "\n    \u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: ").concat(car.engine.type, "\n    \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: ").concat(car.engine.horsepower, " \u043B.\u0441."));
    if (car.year) {
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(car.year));
    }
    else {
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
    }
}
printCarInfo(car);
printCarInfo(car1);
