import { LightningElement } from 'lwc';

export default class P2cCallingChildMethodParent extends LightningElement {

    message="You have NOT reset the slider yet!!!";
    
    sliderHandler(){
        this.template.querySelector('c-p2c-calling-child-method-child').resetSlider();
        this.message="You have just reset the slider";
    }
}