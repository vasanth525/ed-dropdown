// import { ComponentBase } from "../../Base/component";
import { ComponentBase } from "edc_base_ts";
import { IDropDown } from "./interface";

//component

export class DropDownList extends ComponentBase {
  public dropDown: IDropDown;
  constructor(sampleObj: IDropDown, public element?: HTMLElement) {
    super(element);
    this.dropDown = sampleObj;
  }

  public render() {
    this.createDD();
  }

  private createDD() {
    let selectTag: HTMLElement = document.createElement('select');
    selectTag.setAttribute('name', 'customers');
    selectTag.setAttribute("class", "edc-ddl");
    selectTag.setAttribute('id', 'customers');
    if (!this.dropDown.selectedIndex) {
      let optionTag: HTMLElement = document.createElement('option');
      optionTag.setAttribute('value', '');
      optionTag.setAttribute('selected', 'selected');
      if (this.dropDown.placeHolder) {
        optionTag.innerText = this.dropDown.placeHolder;
      }
      selectTag.appendChild(optionTag);
    }
    for (let i: number = 0; this.dropDown && this.dropDown.dataSource && i < this.dropDown.dataSource.length; i++) {
      let optionTag: HTMLElement = document.createElement('option');
      optionTag.setAttribute('value', this.dropDown.dataSource[i] + "");
      if (this.dropDown.selectedIndex && this.dropDown.selectedIndex === i) {
        optionTag.setAttribute('selected', 'selected');
      }
      optionTag.innerText = this.dropDown.dataSource[i] + "";
      selectTag.appendChild(optionTag);
    }
    this.element = selectTag;
  }
}

// Write TypeScript code!
