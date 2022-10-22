//sample

// import { DropDownList } from "../src/DropDownList/Base/dropdownlist";
import { DropDownList } from "../src/DropDownList/Base/dropdownlist";

let dataSource: string[] = ['vasanth', 'gokul', 'kumar', 'pappitha'];

let sampleDD: DropDownList = new DropDownList({
  dataSource: dataSource
  // selectedIndex: 2,
  // placeHolder: "Select the customer..."
});
sampleDD.appendTo('dd');