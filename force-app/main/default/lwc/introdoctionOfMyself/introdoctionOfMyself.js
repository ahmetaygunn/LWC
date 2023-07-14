import { LightningElement } from 'lwc';
export default class Introduction extends LightningElement {
     /*  Usa-Case: Please display the following sentence dynamically in the template.
        Hello World!
        My name is Isaac and I have 3 certifications in salesforce. 
        I am from USA and I live in Houston, TX, 54350.
        My favorite color is blue and I like swimming.
    */
        name = 'Isaac';
        certification = 3;
    
        location = {
            city : "Houston",
            state : "TX",
            country : "USA",
            zipCode : 54350
        }
        //please add an object to your hs file named as exta 
        extra={
            color : "blue",
            food : "kebab",
            sports : "gym"
        }
}