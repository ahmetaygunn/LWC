import { LightningElement } from 'lwc';
import searchContacts from '@salesforce/apex/ContactController.searchContacts';

const COLUMNS = [
    {label : "First Name", fieldName : "FirstName", type : "text"},
    {label : "Last Name", fieldName : "LastName", type : "text"},
    {label : "Email", fieldName : "Email", type : "email"},
    {label : "Title", fieldName : "Title", type : "text"}
];
export default class ApexSearchContacts extends LightningElement {


    keyWord;
    columns = COLUMNS;
    contacts = [];

    searchContactHandler(event){
        this.keyWord = event.target.value;

        searchContacts({searchKey:this.keyWord})
            .then(result=>{
                console.log(result);
                this.contacts = result;
            })
            .catch(error=>{
                console.log(error);
            })



    }


}