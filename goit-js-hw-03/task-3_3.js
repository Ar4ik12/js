"use strict";

const findBestEmployee = function (employees) {
    const keys = Object.keys(employees);
    let maxProdusts = 0;
    let nameMaxProducts;
    for (const key of keys) {
        if (maxProdusts < employees[key]) {
            maxProdusts = employees[key]
            nameMaxProducts = key
        }
    }
    return nameMaxProducts;
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux