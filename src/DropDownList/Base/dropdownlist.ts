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
    let divElement: HTMLElement = document.createElement("div");
    let selectTag: HTMLElement = document.createElement('select');
    let downIconTag: HTMLElement = document.createElement("i");
    divElement.setAttribute("class", "edc-ddl")
    selectTag.setAttribute('name', 'customers');
    // selectTag.setAttribute('size', '2');
    selectTag.setAttribute("class", "edc-slctag");
    selectTag.setAttribute('id', 'customers');
    if (this.dropDown.selectedIndex === -1) {
      let optionTag: HTMLElement = document.createElement('option');
      optionTag.setAttribute('value', '');
      optionTag.setAttribute('selected', "");
      optionTag.setAttribute('disabled', "");
      optionTag.setAttribute('hidden', "");
      if (this.dropDown.placeHolder) {
        optionTag.innerText = this.dropDown.placeHolder;
      }
      selectTag.appendChild(optionTag);
    }
    for (let i: number = 0; this.dropDown && this.dropDown.dataSource && i < this.dropDown.dataSource.length; i++) {
      let optionTag: HTMLElement = document.createElement('option');
      optionTag.setAttribute("class", "edc-ddl-opt");
      optionTag.setAttribute('value', this.dropDown.dataSource[i] + "");
      if (this.dropDown.selectedIndex && this.dropDown.selectedIndex === i) {
        optionTag.setAttribute('selected', 'selected');
      }
      optionTag.innerText = this.dropDown.dataSource[i] + "";
      selectTag.appendChild(optionTag);
    }
    downIconTag.setAttribute("class", "fa-solid fa-chevron-down edc-ddl-icon");
    divElement.appendChild(selectTag);
    divElement.appendChild(downIconTag);
    this.element = divElement;
  }
}

// Write TypeScript code!
