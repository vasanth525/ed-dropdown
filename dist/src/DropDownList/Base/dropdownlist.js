define(["require", "exports", "edc_base_ts"], function (require, exports, edc_base_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DropDownList = void 0;
    //component
    class DropDownList extends edc_base_ts_1.ComponentBase {
        element;
        dropDown;
        constructor(sampleObj, element) {
            super(element);
            this.element = element;
            this.dropDown = sampleObj;
        }
        render() {
            this.createDD();
        }
        createDD() {
            let divElement = document.createElement("div");
            let selectTag = document.createElement('select');
            let downIconTag = document.createElement("i");
            divElement.setAttribute("class", "edc-ddl");
            selectTag.setAttribute('name', 'customers');
            // selectTag.setAttribute('size', '2');
            selectTag.setAttribute("class", "edc-slctag");
            selectTag.setAttribute('id', 'customers');
            if (this.dropDown.selectedIndex === -1) {
                let optionTag = document.createElement('option');
                optionTag.setAttribute('value', '');
                optionTag.setAttribute('selected', "");
                optionTag.setAttribute('disabled', "");
                optionTag.setAttribute('hidden', "");
                if (this.dropDown.placeHolder) {
                    optionTag.innerText = this.dropDown.placeHolder;
                }
                selectTag.appendChild(optionTag);
            }
            for (let i = 0; this.dropDown && this.dropDown.dataSource && i < this.dropDown.dataSource.length; i++) {
                let optionTag = document.createElement('option');
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
    exports.DropDownList = DropDownList;
});
// Write TypeScript code!
