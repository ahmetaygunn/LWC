import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const COLUMNS = [
    {label : "Account Name", fieldName  : "Name", type : "text"},
    {label : "Account Type", fieldName  : "Type", type : "text"},
    {label : "Industry", fieldName  : "Industry", type : "text"},
    {label : "Annual Revenue", fieldName  : "AnnualRevenue", type : "currency"}
];

export default class ApexGetAccounts extends LightningElement {

    /* 
    Use-Case: Create an LWC Component and display the top 10 accounts based on their Annual Revenue by using Apex in LWC. Display the following fields: Name, Type, Industry, Annual Revenue.
​
    Step-1: import your Apex Method to your JS file.
    Step-2: import wire services and start using it. 
    Step-3: prepare the datatable requirements.(columns and data). First, prepare the columns, then data. 
    */

    columns = COLUMNS;

    @wire(getAccounts)
    accounts;
}