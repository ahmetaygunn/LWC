import { LightningElement } from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent';


import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';


export default class RecordEditFormOpportunity extends LightningElement {
    recordId = '0066e00001pYBCrAAO';
    objectName = OPPORTUNITY_OBJECT;
    fields = {
        name : NAME_FIELD,
        stage : STAGE_FIELD,
        account : ACCOUNT_FIELD,
        amount : AMOUNT_FIELD,
        closeDate : CLOSEDATE_FIELD
    }

    successHandler(){
        const succsesToastMsg = new showToastEvent({
            title : 'SUCCESS!!!',
            message : 'The opportunity record has been saved!!!',
            variant : 'success',
            mode : 'pester'
        });
        this.dispatchEvent(succsesToastMsg);

    }


}