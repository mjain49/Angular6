"use strict";
exports.__esModule = true;
var collection = [];
var add = function (data) {
    collection.push(data);
};
var remove = function (index) {
    collection.splice(index - 1, 1); //previous ka next means the data to be deleted
};
var searchById = function (id) {
    for (var _i = 0, collection_3 = collection; _i < collection_3.length; _i++) {
        var data = collection_3[_i];
        if (data.id == id)
            return data;
    }
};
var p1 = { id: 1, name: "Pepsi", price: 30 };
add(p1);
console.log("Add");
for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
    var data = collection_1[_i];
    console.log(data);
}
console.log("remove");
remove(1);
for (var _a = 0, collection_2 = collection; _a < collection_2.length; _a++) {
    var data = collection_2[_a];
    console.log(data);
}
console.log("Search");
add(p1);
console.log(searchById(1));
