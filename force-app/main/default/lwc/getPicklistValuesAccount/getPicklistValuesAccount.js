import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class GetPicklistValuesAccount extends LightningElement {
    /*
    Create a component that shows the picklist values of the Industry field for Vendor Record Type on the Account object.
    */

    //Step-1: In order to display any picklist values, we need the recordTypeId and field apiName. To get the dynamic recordTypeId, I need to use getObjectInfo adapter first.
    
    vendorRtId;
    customerRtId;
    selectedValueCustomer;
    selectedValueVendor;
    industryOptionsCustomer = [];
    industryOptionsVendor = [];

    //getObjectInfo Adapter
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    accountInfo({data,error}){
        if(data){
            console.log(data);
            //get vendor rtId. Grab your map where your vendor rtId resides.
            const recordRtIds = data.recordTypeInfos;
            //next, get your vendor rtId.
            this.vendorRtId = Object.keys(recordRtIds).find(w=>recordRtIds[w].name==='Vendor');
            //get Customer rtId
            //My customer record type is my default record type.
             this.customerRtId = data.defaultRecordTypeId;
             //long way: Object.keys(recordRtIds).find(w=>recordRtIds[w].name==='Customer');
        }
        if(error){
            console.log(error);
        }
    }

    //getPickListValues Adapter for Vendor rtId
    /*
        Note: to make your local property as reactive in Wire services, you need to put them inside a single quotation and put $ in front of your local property like this: '$localPropertyName'.
    */
    @wire(getPicklistValues,{fieldApiName:INDUSTRY_FIELD, recordTypeId:'$vendorRtId'})
    pickListHandlerV({data, error}){
        if(data){
            console.log(data);
            this.industryOptionsVendor = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }

    //getPickListValues Adapter for Customer rtId
    @wire(getPicklistValues,{fieldApiName:INDUSTRY_FIELD, recordTypeId:'$customerRtId'})
    pickListHandlerC({data,error}){
        if(data){
            console.log(data);
           this.industryOptionsCustomer = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }

    picklistGenerator(data){
        return data.values.map(item=>({
            label : item.label,
            value : item.value
        }));
    }


    customerEventHandler(event){
        this.selectedValueCustomer = event.target.value;
    }

    vendorEventHandler(event){
        this.selectedValueVendor = event.target.value;
    }


}