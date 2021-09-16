import { LightningElement, api } from 'lwc';

export default class Safe_einsteinSentiment extends LightningElement {
    @api positivePercentage;
    @api neutralPercentage;
    @api negativePercentage;
}