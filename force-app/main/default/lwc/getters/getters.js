import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {

    names = ["Alexis", "Thomas", "Yavuz", "Isaac"];

    num1 = 10;
    num2 = 40;

    product2 = this.num1*this.num2;  //this was not preferred usage if there is any option to handle with getters.

    get multiplyNumbers(){
          var product = this.num1 * this.num2;
         return product;
         //return this.num1*this.num2;
    }

    get getNames(){
        return this.names[0];
    }



   
}