//sample

// import { DropDownList } from "../src/DropDownList/Base/dropdownlist";
import { DropDownList } from "../src/DropDownList/Base/dropdownlist";
// import { ComponentBase } from "../../../node_modules/edc_base_ts/src/Base/component";

let dataSource: string[] = ['vasanth', 'gokul', 'kumar', 'pappitha'];

let sampleDD: DropDownList = new DropDownList({
  dataSource: dataSource
  // selectedIndex: 2,
  // placeHolder: "Select the customer..."
});
sampleDD.appendTo('dd');