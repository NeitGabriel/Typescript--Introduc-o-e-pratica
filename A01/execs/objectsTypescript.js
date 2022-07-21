"use strict";
const people = {
    name: 'Mario',
    age: 29,
    profission: 'Developer'
};
var profission;
(function (profission) {
    profission[profission["Developer"] = 0] = "Developer";
    profission[profission["Teacher"] = 1] = "Teacher";
    profission[profission["Atlet"] = 2] = "Atlet";
})(profission || (profission = {}));
const vanessa = {
    name: 'Vanessa',
    age: 18,
    profission: profission.Developer
};
const jessica = {
    name: 'Jessica',
    age: 17,
    profission: profission.Atlet,
    material: ['Nutrition', 'Racer', 'Calistenics']
};
function lista(list) {
    for (const item of list) {
        console.log('-' + item);
    }
}
lista(jessica.material);
