import { LightningElement } from 'lwc';

export default class LifecycleHooksChild extends LightningElement {

    var1;
    error;
    stack;
   
    constructor(){
        super();
        let varElement = this.template;
        console.log("Child Constructor called!"+ varElement.isConnected);
    }

    connectedCallback(){
        let varElement = this.template;
        console.log("Child connectedCallback is called!"+ varElement.isConnected);
        this.var1 = "connectedCallback is fired!";
    }

    //Render Method
    // render(){
    //     console.log("Child render method is called! " + this.showContent);
    //     return; 
    // }

    renderedCallback(){
        console.log("Child Component renderCallback is called!");
    }
    //Unmounting Phase - disconnectedCallback
    disconnectedCallback(){
        console.log("Child Disconnected Callback is called!");
    }

    //error Phase - errorCallback
    errorCallback(error, stack){
        console.log('Parent errorCallback is called!');
        this.error = error;
        this.stack = stack;
    }
}