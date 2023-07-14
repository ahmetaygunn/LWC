import { LightningElement, wire } from 'lwc';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';

const COLUMNS = [
    {label : "Created Date", fieldName : "CreatedDate", type : "date"},
    {label : "Account Name", fieldName : "Name", type : "text"},
    {label : "Account Type", fieldName : "Type", type : "text"},
    {label : "Industry", fieldName : "Industry", type : "text"},
    {label : "Annual Revenue", fieldName : "AnnualRevenue", type : "currency"}
];

export default class P2cNonprimitives2Parent extends LightningElement {

    columns = COLUMNS;

    @wire(getRecentAccounts)
    accounts;
}