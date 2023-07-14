import { LightningElement } from 'lwc';

export default class C2pSimpleEventChild extends LightningElement {

    closeHandler(){
        const closeEvent = new CustomEvent('apple',{
            bubbles: true,
            detail:"This is the details message from closeHandler. You successfully closed the Modal!"
        }); //prepare your custom event
        this.dispatchEvent(closeEvent); //dispatch your custom event.
    }

    footerHandler(){
        console.log("Footer handler called!");
    }

    divHandler(){
        console.log("You have done event bubbling and onclick event moved up to this div tag.");
    }
}