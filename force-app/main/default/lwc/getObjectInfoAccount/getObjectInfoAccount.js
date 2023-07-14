import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetObjectInfoAccount extends LightningElement {

/* By using getObjectInfo adapter, please get the Account Object metadata records
*/
    defaultRtId;
    objName;


    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    accountInfo({data,error}){
        if(data){
            console.log(data);
            this.defaultRtId = data.defaultRecordTypeId;
            this.objName = data.apiName;
        }
        if(error){
            console.log(error);
        }  
    }
}