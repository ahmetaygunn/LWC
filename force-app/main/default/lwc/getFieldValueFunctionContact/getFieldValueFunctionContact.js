import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACC_NUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

const FIELDS = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE_FIELD,ACC_NUMBER_FIELD,RATING_FIELD];



export default class GetFieldValueFunctionContact extends LightningElement {

recordId = '0016e00003Kjh5oAAB';
@wire(getRecord,{recordId:'$recordId', fields:FIELDS})
accounntInfo(data,error){
    if(data){
        console.log(data);

    }
    if(error){
        console.log(error);

    }
}
}