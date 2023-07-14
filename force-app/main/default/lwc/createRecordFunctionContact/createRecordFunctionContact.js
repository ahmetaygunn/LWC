import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateRecordFunctionContact extends LightningElement {

    /* Use-Case: By using createREcord Function, prepare an LWC component to create a Contact record with the following fields.
    FirstName - LastName - Title - Email - Department
    */

    //What do I need to do first in JS?

    /*Step-1: 
        I will use createRecord Function and I need to know what is the parameters to pass in this function.
        recordInput: A recordInput object is used to create the record. This object takes object apiName and fields as property input. (Note: Prepare a formData object from EventHandler and pass it to recordInput Object’s fields property like below.)
        	const recordInput = {
                                    apiName: ImportedObject.objectApiName,
                                    fields : this.formData
                                }
        1. Import your object
        2. Prepare your formData Object: This is the object that you need to pass to fields property in the recordInput object. 
    */

        formData ={};

        /* End product of formData looks like
            formData = {
                fieldApiName : value,
                name : value
​
                FirstName : Jennifer,
                LastName : Thomas,
                Title : Sales Manager,
                Email : jennifer@thomas.com,
                Department : Sales
            }
        */
       /*
       Note for eventHandler: If the variable name and the target's final name is the same, JS property will drop the final notation and keep it as below. 
            const name = event.target
            const value = event.target
       */
        changeHandler(event){
            //const name = event.target.name;
            //const value = event.target.value;
            //const name = event.target;
            //const value = event.target;
            const{name,value} = event.target;
            this.formData[name] = value;
        }

        /*
            Note for createRecords Function:
            When your variable name and your input name is the same, ignore one of them and Js will take care as below
            //createRecord({recordInput:recordInput})
        */
        createContactHandler(){
            const recordInput = {
                apiName : CONTACT_OBJECT.objectApiName,
                fields : this.formData
            }
            createRecord(recordInput)
                .then(result =>{
                    console.log(result);
                    //show me the success message: ShowToastEvent Success
                    this.successMessage();
                    this.template.querySelector('form.contactForm').reset();
                    this.formData = {};
                })
                .catch(error =>{
                    console.log(error);
                    //show me the error toast message in the UI. 
                    this.errorMessage();
                })
        }

        cancelContactHandler(){
            this.template.querySelector('form.contactForm').reset();
            this.formData = {};
            this.infoMessage();

        }


        successMessage(){ // this is a method contains success toast message
            const showSuccessToastMsg = new ShowToastEvent({
                title : "SUCCESS!!!!",
                message : 'The Contact record has been created successfully!',
                variant :"success",
                mode : "sticky"
            });
            this.dispatchEvent(showSuccessToastMsg);
        }

        errorMessage(){ // this is a method contains error toast message. 
            const showErrorToastMsg = new ShowToastEvent({
                title : "ERROR!!!!",
                message : 'Error Occurred. The Contact record has NOT been created!',
                variant :"error",
                mode : "sticky"
            });
            this.dispatchEvent(showErrorToastMsg);
        }

        infoMessage(){ // this is a method contains error toast message. 
            const showInfoToastMsg = new ShowToastEvent({
                title : "INFORMATION!!!!",
                message : 'The record save process has been cancelled. The Contact record has NOT been created!',
                variant :"info",
                mode : "sticky"
            });
            this.dispatchEvent(showInfoToastMsg);
        }
}