"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({
        email: 'adf',
        password: 'asdfs'
    });
})();
