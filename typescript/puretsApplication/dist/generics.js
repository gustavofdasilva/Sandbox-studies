"use strict";
const names = ["g", "h,", "i"];
const score = [];
function IdentityOne(value) {
    return true;
}
function IdentityTwo(val) {
    return val;
}
function IdentityThree(val) {
    return val;
}
function IdentityFour(val) {
    return val;
}
//IdentityFive<Bootle/*When refering a interface, we need to use it exactly name*/>({})
function IdentitySix(val) {
    return val[0];
}
const getSearchProducts = (val) => {
    return val[2];
};
function dualGenerics(valOne, valTwo) {
    return { valOne, valTwo };
}
dualGenerics(3, {
    connection: "",
    username: "",
    password: "",
});
