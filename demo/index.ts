//sample

import { DropDownList } from "../src/index";
// import { DropDownList } from "../src/DropDownList/Base/dropdownlist";
// import { DropDownList } from "../dist/bundle"; // after build
// import { ComponentBase } from "../../../node_modules/edc_base_ts/src/Base/component";

let dataSource: string[] = ['vasanthfdgfdgdjdyghgcghcudtrdcgfcxhgxh', 'gokul', 'kumar', 'pappitha'];

let sampleDD: DropDownList = new DropDownList({
  dataSource: dataSource,
  selectedIndex: 0,
  placeHolder: "Select the customer"
});
sampleDD.appendTo('dd');