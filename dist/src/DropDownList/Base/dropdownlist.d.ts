import { ComponentBase } from "edc_base_ts";
import { IDropDown } from "./interface";
export declare class DropDownList extends ComponentBase {
    element?: HTMLElement | undefined;
    dropDown: IDropDown;
    constructor(sampleObj: IDropDown, element?: HTMLElement | undefined);
    render(): void;
    private createDD;
}
