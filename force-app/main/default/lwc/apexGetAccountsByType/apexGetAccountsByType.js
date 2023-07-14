import { LightningElement, wire } from 'lwc';
import getAccountsByType from '@salesforce/apex/AccountController.getAccountsByType';

const COLUMNS = [
    {label : "Account Name", fieldName : "Name", type : "text"},
    {label : "Account Type", fieldName : "Type", type : "text"},
    {label : "Industry", fieldName : "Industry", type : "text"},
    {label : "Annual Revenue", fieldName : "AnnualRevenue", type : "currency"}
];
export default class ApexGetAccountsByType extends LightningElement {

    columns= COLUMNS;
    rowOffset = 0 ;
    displayData = [];
    accountType = 'Customer - Direct';

    @wire(getAccountsByType,{type:'$accountType'})
    accounts({data,error}){
    if(data){
        console.log(data);
        this.displayData = data;
    }
    if(error){
        console.log(error);
    }
    };
}