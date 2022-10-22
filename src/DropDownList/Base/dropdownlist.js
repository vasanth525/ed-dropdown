define(["require", "exports", "../../../node_modules/edc_base_ts/src/Base/component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DropDownList = void 0;
    //component
    class DropDownList extends component_1.ComponentBase {
        constructor(sampleObj, element) {
            super(element);
            this.element = element;
            this.dropDown = sampleObj;
        }
        render() {
            this.createDD();
        }
        createDD() {
            let selectTag = document.createElement('select');
            selectTag.setAttribute('name', 'customers');
            selectTag.style.width = '300px';
            selectTag.style.height = '40px';
            selectTag.style.border = 'none';
            selectTag.setAttribute('id', 'customers');
            if (!this.dropDown.selectedIndex) {
                let optionTag = document.createElement('option');
                optionTag.setAttribute('value', '');
                optionTag.setAttribute('selected', 'selected');
                if (this.dropDown.placeHolder) {
                    optionTag.innerText = this.dropDown.placeHolder;
                }
                selectTag.appendChild(optionTag);
            }
            for (let i = 0; this.dropDown && this.dropDown.dataSource && i < this.dropDown.dataSource.length; i++) {
                let optionTag = document.createElement('option');
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
    exports.DropDownList = DropDownList;
});
// Write TypeScript code!
