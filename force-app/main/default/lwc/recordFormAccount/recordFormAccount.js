import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class RecordFormAccount extends LightningElement {

    objectName = ACCOUNT_OBJECT;
    recordId = '0016e00003Kjh5jAAB';
    fields = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,REVENUE_FIELD,RATING_FIELD];

    showSuccessMessage(){
        const successToastMsg = new ShowToastEvent({ //get the instance of your ShowToastEvent
            title : 'SUCCESS!!!',
            message : 'The Account record has been saved successfully!',
            variant : 'success',
            mode : 'sticky'    
        });
        this.dispatchEvent(successToastMsg);
    }

    showErrorMessage(){
        const errorToastMsg = new ShowToastEvent({
            title : 'ERROR!!!',
            message : 'An error occurred while saving the record. Please check your validation rules.',
            variant : 'error',
            mode : 'sticky'
        });
        this.dispatchEvent(errorToastMsg);
    }

    showSubmitMessage(){
        const infoToastMsg = new ShowToastEvent({
            title : 'INFORMATION - ATTENTION',
            message : 'you have just submitted a record to be saved',
            variant : 'info',
            mode : 'sticky'
        });
        this.dispatchEvent(infoToastMsg);
    }
}