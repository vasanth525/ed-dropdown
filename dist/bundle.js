define(['exports', 'edc_base_ts', 'edc_popup_ts', 'edc_input_ts'], (function (exports, edc_base_ts, edc_popup_ts, edc_input_ts) { 'use strict';

    // import { ComponentBase } from "../../Base/component";
    //component
    class DropDownList extends edc_base_ts.ComponentBase {
        element;
        dropDownObj;
        constructor(sampleObj, element) {
            super(element);
            this.element = element;
            this.dropDownObj = sampleObj;
        }
        render() {
            this.createDD();
        }
        createDD() {
            let divElement = document.createElement("div");
            divElement.classList.add("edc-ddl");
            divElement.id = "dd_input";
            let inputValue;
            let selectTag;
            let optionTags;
            let downIconTag = document.createElement("i");
            if (this.tempId && this.isNullOrUndefined(this.dropDownObj.dataSource)) {
                selectTag = document.getElementById(this.tempId);
                selectTag.style.display = "none";
                divElement.appendChild(selectTag);
                this.tempId = divElement.id;
                optionTags = selectTag.querySelectorAll("option");
                let tempData = [];
                for (let i = 0; i < optionTags.length; i++) {
                    tempData.push(optionTags[i].innerText);
                }
                this.dropDownObj.dataSource = tempData;
            }
            else if (document.getElementById(this.tempId) instanceof HTMLSelectElement && !this.isNullOrUndefined(this.dropDownObj.dataSource)) {
                selectTag = document.getElementById(this.tempId);
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
            let inputElement = new edc_input_ts.Input({
                value: inputValue
            });
            inputElement.appendTo(divElement);
            inputElement.addClassList(["edc-ddl-input"]);
            downIconTag.setAttribute("class", "fa-solid fa-chevron-down edc-ddl-icon");
            divElement.appendChild(downIconTag);
            let this_1 = this;
            divElement.addEventListener("click", function () {
                this_1.ddClickHandler(this);
            });
            this.element = divElement;
        }
        popupOptionClickHandler(liSelectedElement) {
        }
        ddClickHandler(element) {
            if (element.classList.contains("edc-icon-anim")) {
                element.classList.remove("edc-icon-anim");
                let popupElement = document.getElementById("dd_popup");
                popupElement.remove();
            }
            else {
                element.classList.add("edc-icon-anim");
                let divElement = document.createElement("div");
                divElement.style.width = element.clientWidth + 2 + "px";
                divElement.id = "dd_popup";
                let ulElement = document.createElement("ul");
                for (let i = 0; this.dropDownObj && this.dropDownObj.dataSource && i < this.dropDownObj.dataSource.length; i++) {
                    let liElement = document.createElement("li");
                    let this_1 = this;
                    liElement.addEventListener("click", function () {
                        this_1.popupOptionClickHandler(this);
                    });
                    liElement.innerText = this.dropDownObj.dataSource[i];
                    ulElement.appendChild(liElement);
                }
                divElement.appendChild(ulElement);
                let popup = new edc_popup_ts.PopUp({
                    height: this.dropDownObj.popUpHeight
                }, divElement);
                popup.appendTo(divElement);
                document.body.appendChild(divElement);
            }
        }
    }
    // Write TypeScript code!

    exports.DropDownList = DropDownList;

}));
