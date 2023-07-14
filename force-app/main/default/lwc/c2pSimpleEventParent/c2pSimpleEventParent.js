import { LightningElement } from 'lwc';

export default class C2pSimpleEventParent extends LightningElement {

    showModal=false;
    message;
    msg;

    clickHandler(){
        this.showModal = true;
    }

    closeModalHandler(){
        this.showModal = false;
        this.msg = event.detail;
        this.message = "You have just close the Modal Handler!!";
       
    }
}