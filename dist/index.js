"use strict";
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
;
let mysize = size.large;
function calctax(income, taxyr = 2022) {
    if (taxyr < 2022)
        return income * 1.2;
    return income * 1.3;
}
calctax(10000);
let employee = {
    id: 1,
    name: 'mods'
};
//# sourceMappingURL=index.js.map