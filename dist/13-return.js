"use strict";
(() => {
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString();
    };
    const rta = calcTotal([1, 2, 1, 1, 1, 1]);
    console.log(rta);
})();
