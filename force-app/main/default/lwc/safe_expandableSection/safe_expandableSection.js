import { LightningElement, api } from 'lwc';

export default class Safe_expandableSection extends LightningElement {

    @api open;
    @api label;

    get sectionClass() {
        return this.open ? 'slds-section slds-is-open' : 'slds-section';
    }

    connectedCallback() {
        if (typeof this.open === 'undefined') this.open = true;
    }

    handleClick() {
        this.open = !this.open;
    }
}