import { LightningElement } from 'lwc';

export default class LifecycleHooksParent extends LightningElement {

    error;
    stack;
  
    //Mounting Phase - constructor Hook
    constructor(){
        super(); //calling constructor of LightingElement
        let varElement = this.template;
        console.log("Parent Constructor called!"+varElement.isConnected);
        this.template.querySelector('div'); // it is not possible
    }

    //Mounting Phase - connectedCallback
    connectedCallback(){
        let varElement = this.template;
        console.log("Parent connectedCallback is called! "+varElement.isConnected);
    }

    //Render Method
    // render(){
    //     console.log("Parent render method is called!" + this.showContent);
    //     return;
    // }

    //Mounting Phase - RenderedCallback
    renderedCallback(){
        console.log("Parent Component renderCallback is called!");
    }

    //Unmounting Phase - disconnectedCallback
    disconnectedCallback(){
        console.log("Parent Disconnected Callback is called!");
    }

    //error Phase - errorCallback
    errorCallback(error, stack){
        console.log('Parent errorCallback is called!');
        this.error = error;
        this.stack = stack;
    }
}