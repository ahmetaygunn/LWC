import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';

import CONTRACT_OBJECT from '@salesforce/schema/Contract';
import CON_TYPES_FIELD from '@salesforce/schema/Contract.Contract_Types__c';
import STATUS_FIELD from '@salesforce/schema/Contract.Status';
import CONTRACT_TYPES_UPDATED_FIELD from '@salesforce/schema/Contract.Contract_Types_Updated__c';


export default class GetPicklistValuesContract extends LightningElement {

    selectedValueNewContract;
    selectedValueRenewalContract;

    newContractOptions = [];
    renewalContractOptions = [];

    newContractRtId;
    renewalContractRtId;


    /*
    Go to Contract object and Create two Record Types	1. New,	2. Renewal
    Go to contract Object Setup and Create a picklist field and name it “Contract Types” with the following picklist options Long Term, Mid Term, and Short Term.
    Have the New Record Type all these picklist values and Have the Renewal Record Type Long Term and Short Term only.
    Create a component and have a combobox and show the Renewal Record Type picklist options. Once the Option is selected display a message under the Combobox like below: The selected Contract Type is {……} in a div.
    */

    //Step-1: use getObjectInfo adapter to get the record type ids.
    @wire(getObjectInfo,{objectApiName:CONTRACT_OBJECT})
    contractInfo({data,error}){
        if(data){
            console.log(data);
            //get your New rtId(recordType Id)
            this.newContractRtId = data.defaultRecordTypeId;
            //get your Renewal rtId. First get the map where it is in.
            const recordTypeIds =  data.recordTypeInfos;
            this.renewalContractRtId = Object.keys(recordTypeIds).find(w=>recordTypeIds[w].name === 'Renewal');
            console.log(this.newContractRtId);
            console.log(this.renewalContractRtId);
        }
        if(error){
            console.log(error);
        }
    }
   

    //Step-2: use getPicklistValues Adapter for New RecordType
    @wire(getPicklistValues, {fieldApiName:CONTRACT_TYPES_UPDATED_FIELD, recordTypeId:'$newContractRtId'})
    picklistNewContract({data,error}){
        if(data){
            console.log(data);
            this.newContractOptions = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }


    //Step-3: use getPicklistValues Adapter for New RecordType
    @wire(getPicklistValues,{fieldApiName:CONTRACT_TYPES_UPDATED_FIELD, recordTypeId:'$renewalContractRtId'})
    picklistRenewalContract({data,error}){
        if(data){
            console.log(data);
           this.renewalContractOptions = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }

    picklistGenerator(data){
        return data.values.map(w=>({
            label : w.label,
            value : w.value
        }));
    }


    changeHandlerNewContract(event){
        this.selectedValueNewContract = event.target.value;
    }

    changeHandlerRenewalContract(event){
         this.selectedValueRenewalContract = event.target. value;
    }
}