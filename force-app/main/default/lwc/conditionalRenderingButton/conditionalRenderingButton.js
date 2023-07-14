import { LightningElement } from 'lwc';

export default class ConditionalRenderingButton extends LightningElement {
    /* Please create a lightning button. When we click on it, it will give us information.
    */
   showContent =false;

   handleClick(){
    this.showContent =true;
   }
   hideHandleClik(){
    this.showContent =false;

   }
}