import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    /*
     To render HTML conditionally, 
    ✓Add the if:true={property} directive in a <template> tag. 
    ✓Or add if:false={property} directive in a <template> tag. 

    What is Directive?
    Directives are special HTML attributes. The LWC programming model has a few custom directives that let you manipulate the DOM using markup.
    In LWC, we have two special directives for conditional rendering.
	1. if:true
	2. if:false
    */
   showContent = true;
}