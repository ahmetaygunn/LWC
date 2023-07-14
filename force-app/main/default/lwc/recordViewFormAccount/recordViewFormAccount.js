import { LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';


export default class RecordViewFormAccount extends LightningElement {
    recordId = '0016e00003Kjh5jAAB';
    objectName = ACCOUNT_OBJECT;
    fields= {
        name : NAME_FIELD,
        type: TYPE_FIELD,
        industry : INDUSTRY_FIELD,
        revenue: REVENUE_FIELD,
        rating: RATING_FIELD,
    }


}