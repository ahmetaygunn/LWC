import { LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';

export default class RecordViewFormContact extends LightningElement {

    /*Use-Case:
    Component Name: recordViewFormContact    
    Object: Contact    
    Record-Id: Pick the same record of recordFormContact component
    Fields: FirstName, LastName, AccountId, title, Email, Phone, Department
​
    */
    showContent = false;
    recordId = '0036e00004GzzzwAAB';
    objectName = CONTACT_OBJECT;
    fields ={
        fname : FIRST_NAME_FIELD,
        lname : LAST_NAME_FIELD,
        accId : ACCOUNT_FIELD,
        title : TITLE_FIELD,
        email : EMAIL_FIELD,
        phone : PHONE_FIELD,
        dept : DEPARTMENT_FIELD
    }

    toggleFields(){
        this.showContent = this.showContent;
    }
}