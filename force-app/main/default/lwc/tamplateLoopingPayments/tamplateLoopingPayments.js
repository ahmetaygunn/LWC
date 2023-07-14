import { LightningElement } from 'lwc';

export default class TamplateLoopingPayments extends LightningElement {
    /* In this use case, I would like you to show some account payment information as below:
        
        Payment Information:
            Type: value
            Amount: value
            Paid? : Yes or No

    */
            payments = [
                {
                    id : 1,
                    type : 'Internet Allowance',
                    amount : 100.00,
                    paid : true
                },
                {
                    id : 2,
                    type : 'Work From Home Allowance',
                    amount : 5000.00,
                    paid : false
                },
                {
                    id : 3,
                    type : 'Well Being Allowance',
                    amount : 300.00,
                    paid : true
                },
                {
                    id : 4,
                    type : 'Professional Development Allowance',
                    amount : 2000.00,
                    paid : true
                }
            ];
}