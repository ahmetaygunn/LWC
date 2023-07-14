import { LightningElement } from 'lwc';
import searchContacts from '@salesforce/apex/ContactController.searchContacts';

const COLUMNS = [
    {label : "First Name", fieldName : "FirstName", type : "text"},
    {label : "Last Name", fieldName : "LastName", type : "text"},
    {label : "Email", fieldName : "Email", type : "email"},
    {label : "Title", fieldName : "Title", type : "text"}
];

export default class P2cParentActionParent extends LightningElement {

    columns = COLUMNS;
    contacts = [];
    selectedValue;

    changeHandler(event){
         this.selectedValue = event.target.value;

         searchContacts({searchKey:this.selectedValue})
            .then(result=>{
                console.log(result);
                this.contacts = result;
            })
            .catch(error=>{
                console.log(error);
            })
    }
}