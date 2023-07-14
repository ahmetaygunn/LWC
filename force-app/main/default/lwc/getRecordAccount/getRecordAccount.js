import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACC_NUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

const FIELDS = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE_FIELD,ACC_NUMBER_FIELD,RATING_FIELD];

export default class GetRecordAccount extends LightningElement {
/* Use-Case: Display the following Account Fields by using getRecord Wire Adapter.
Name - Type - Industry - AnnualRevenue - Account Number - Rating
*/
accName;
accType;
accIndustry;
accAnnualRevenue;
accNumber;
accRating;
recordId = '0016e00003Kjh5oAAB';
@wire(getRecord,{recordId:'$recordId',fields:FIELDS})
accountInfoRecords({data,error}){
    if(data){
        console.log(data);
           this.accName = data.fields.Name.value;
           this.accType = data.fields.Type.displayValue;
           this.accIndustry = data.fields.Industry.value;
           this.accAnnualRevenue = data.fields.AnnualRevenue.displayValue;
           this.accNumber = data.fields.AccountNumber.value;
           this.accRating = data.fields.Rating.value;
    }
    if(error){
        console.log(error);
    }
    
}


}