//sample
define(["require", "exports", "../src/DropDownList/Base/dropdownlist"], function (require, exports, dropdownlist_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let dataSource = ['vasanth', 'gokul', 'kumar', 'pappitha'];
    let sampleDD = new dropdownlist_1.DropDownList({
        dataSource: dataSource
        // selectedIndex: 2,
        // placeHolder: "Select the customer..."
    });
    sampleDD.appendTo('dd');
});
