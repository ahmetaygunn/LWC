import { LightningElement, track } from 'lwc';

export default class TrackProperty extends LightningElement {

   @track contact = {
        name : "Tom Hanks",
        location : "United States",
        company : "Hollywood"
    }

    changeHandler(event){
        this.contact.location = event.target.value;
    }
}