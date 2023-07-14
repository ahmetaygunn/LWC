import { LightningElement, api } from 'lwc';

export default class HelloWord extends LightningElement {
    name = "Alex Thomas"; //variable: But this variable called local property in JavaScript(Js)
   @api nickName = "Super Alex"; // nickName becomes public property now with the power of @api decorator. We will learn @api later on in this chapter. Public property means this variable can be accessed by the other components and Html files.
   // HTML is only able to communicate with Js thorough these public and local properties.

    experience = 3;
    fruits = ["Apple","Grapes", "Bananas","WaterMelon"];
    experiences = [3,4,5,6,7,8];

    location = {
        city :"Atlanta",
        state : "GA",
        country : "USA",
        postalCode : 34560
    }
}