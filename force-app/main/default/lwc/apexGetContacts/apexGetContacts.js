import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    {label : "First Name", fieldName : "FirstName", type : "text"},
    {label : "Last Name", fieldName : "LastName", type : "text"},
    {label : "Title", fieldName : "Title", type : "text"},
    {label : "Email", fieldName : "Email", type : "email"},
    {label : "Mobile Number", fieldName : "MobilePhone", type : "phone"}
];
export default class ApexGetContacts extends LightningElement {

     // Create an LWC Component and display 10 contacts who's mobile and email populated. Get them ordered by Last name and display the following fields in data table. Fields: First name, Last name, Title, Email, Mobile.

    columns = COLUMNS;

    @wire(getContacts)
    contacts;
}