import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    name = "Alex";
    title = "Salesforce Developer";

    changeHandler(event){
        this.title = event.target.value;
        this.name = event.target.value;

    }
}