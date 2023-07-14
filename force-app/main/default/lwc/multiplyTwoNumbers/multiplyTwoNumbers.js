import { LightningElement } from 'lwc';

export default class MultiplyTwoNumbers extends LightningElement {
    /*
     Multiple two numbers entered by the user and show the result on the screen.
        Steps:
        Create 2 local property to hold the numbers.
        Create 2 lightening input.
        Create 2 event handler methods to get the entered value of the inputs
        Create a getter method that returns the sum of num1 and num2
        Call the getter function in html template
        save and deploy your code and check in the UI.
    */
   num1;
   num2;

   num1EventHandler(event){
    this.num1 = event.target.value;
   }
    num2EventHandler(event){
    this.num2 = event.target.value;
   }
   get multiplyNumbers(){
    var product = Number(this.num1)*Number(this.num2);
    return product;
   }

}