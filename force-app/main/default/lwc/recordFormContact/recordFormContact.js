import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';

export default class RecordFormContact extends LightningElement {
    /*Use-Case:
    Component Name: recordFormContact    
    Object: Contact    
    Record-Id: Pick one
    Fields: FirstName, LastName, AccountId, title, Email, Phone, Department
    OnSuccess: Show green color banner with a success message.
    */
   objectName = CONTACT_OBJECT;
   recordId= '0036e00004GzzzwAAB';
   fields = [FIRST_NAME_FIELD,LAST_NAME_FIELD, ACCOUNT_FIELD,TITLE_FIELD,EMAIL_FIELD,PHONE_FIELD,DEPARTMENT_FIELD];

   successMessage(){
    const successToastMsg = new ShowToastEvent({
        title : 'SUCCESS!!!',
        message : 'You have successfully saved your contact',
        variant : 'success',
        mode : 'pester'
    });
    this.dispatchEvent(successToastMsg);
   };
}