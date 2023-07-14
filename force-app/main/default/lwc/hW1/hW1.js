import { LightningElement } from 'lwc';


export default class HW1 extends LightningElement {
    num1;
    num2;

    num1EventHandler (event){
        this.num1 = event.target.value;
    }
    num2EventHandler (event){
        this.num2 = event.target.value;
    }
    get getSum (){
        var product = Number(this.num1)+Number(this.num2);
        return product;
    }
}