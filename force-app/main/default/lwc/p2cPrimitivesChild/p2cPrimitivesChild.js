import { LightningElement,api } from 'lwc';

export default class P2cPrimitivesChild extends LightningElement {
    //I have three local properties and then I made them public property by adding @api decorator in front of them. When they become public property, now, they will be accessible by other components.
    
    @api fullName;
    @api age;
    @api title;
    
}