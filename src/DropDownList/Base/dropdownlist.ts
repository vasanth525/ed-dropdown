// import { ComponentBase } from "../../Base/component";
import { ComponentBase } from "edc_base_ts";
import { PopUp } from "edc_popup_ts";
import { Input } from "edc_input_ts";
import { IDropDown } from "./interface";

//component

export class DropDownList extends ComponentBase {
  public dropDownObj: IDropDown;
  constructor(sampleObj: IDropDown, public element?: HTMLElement) {
    super(element);
    this.dropDownObj = sampleObj;
  }

  public render() {
    this.createDD();
  }
  
  private createDD() {
    let divElement: HTMLElement = document.createElement("div");
    divElement.classList.add("edc-ddl");
    divElement.id = "dd_input";
    let inputValue: string | number | undefined;
    let selectTag: HTMLSelectElement | null;
    let optionTags: NodeListOf<HTMLElement>;
    let downIconTag: HTMLElement = document.createElement("i");

    if (this.tempId && this.isNullOrUndefined(this.dropDownObj.dataSource)) {
      selectTag = document.getElementById(this.tempId) as HTMLSelectElement;
      selectTag.style.display = "none";
      divElement.appendChild(selectTag);
      this.tempId = divElement.id;
      optionTags = selectTag.querySelectorAll("option");
      let tempData: string[] = [];
      for (let i: number = 0; i < optionTags.length; i++) {
        tempData.push(optionTags[i].innerText);
      }
      this.dropDownObj.dataSource = tempData;
    }
    else if (document.getElementById(this.tempId as string) instanceof HTMLSelectElement && !this.isNullOrUndefined(this.dropDownObj.dataSource)) {
      selectTag = document.getElementById(this.tempId as string) as HTMLSelectElement;
      selectTag.style.display = "none";
      divElement.appendChild(selectTag);
      this.tempId = divElement.id;
    }

    if (this.dropDownObj.selectedIndex != undefined && this.dropDownObj.selectedIndex != null && this.dropDownObj.dataSource) {
      inputValue = this.dropDownObj.dataSource[this.dropDownObj.selectedIndex];
    }
    else if (this.dropDownObj.placeHolder) {
      inputValue = this.dropDownObj.placeHolder;
    }
    let inputElement: Input = new Input({
      value: inputValue
    });
    inputElement.appendTo(divElement);
    inputElement.addClassList(["edc-ddl-input"]);
    downIconTag.setAttribute("class", "fa-solid fa-chevron-down edc-ddl-icon");
    divElement.appendChild(downIconTag);
    let this_1 = this;
    divElement.addEventListener("click", function() {
      this_1.ddClickHandler(this)
    });
    this.element = divElement;
  }

  private popupOptionClickHandler(liSelectedElement: HTMLElement) {

  }
  
  private ddClickHandler(element: HTMLElement) {
    if (element.classList.contains("edc-icon-anim")) {
      element.classList.remove("edc-icon-anim");
      let popupElement: HTMLElement = document.getElementById("dd_popup") as HTMLElement;
      popupElement.remove();
    }
    else {
      element.classList.add("edc-icon-anim");
      let divElement: HTMLElement = document.createElement("div");
      divElement.style.width = element.clientWidth + 2 + "px";
      divElement.id = "dd_popup";
      let ulElement: HTMLElement = document.createElement("ul");
      for (let i: number = 0; this.dropDownObj && this.dropDownObj.dataSource && i < this.dropDownObj.dataSource.length; i++) {
        let liElement: HTMLElement = document.createElement("li");
        let this_1 = this;
        liElement.addEventListener("click", function() {
          this_1.popupOptionClickHandler(this)
        });
        liElement.innerText = this.dropDownObj.dataSource[i] as string;
        ulElement.appendChild(liElement);
      }
      divElement.appendChild(ulElement);
      let popup: PopUp = new PopUp({
        height: this.dropDownObj.popUpHeight
      }, divElement);
      popup.appendTo(divElement);
      document.body.appendChild(divElement);
    }
  }
}

// Write TypeScript code!
