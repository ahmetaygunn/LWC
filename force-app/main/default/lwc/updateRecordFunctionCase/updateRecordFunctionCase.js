import { updateRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateRecordFunctionCase extends LightningElement {

//Use-Case: Create an LWC component and update the following fields of the Case Object. Subject, Description, Origin

recordId = '5006e00001yNowZAAS';
formData = {};

//Prepare your formData Object. 
changeHandler(event){
    //const name = event.target.name;
    //const value = event.target.value;

    //const name = event.target;
    //const value = event.target;
    const {name,value} = event.target;

    this.formData['Id'] = this.recordId;
    this.formData[name] = value;
}

updateCase(){
    const recordInput = {
        fields : this.formData
    }
    updateRecord(recordInput)
        .then(result=>{
            console.log(result);
            this.successMessage();
            this.template.querySelector('form.caseForm').reset();
            this.formData = {};
        })
        .catch(error=>{
            console.log(error);
            this.errorMessage();
        })
}

cancelUpdateCase(){
    this.template.querySelector('form.caseForm').reset();
    this.cancelMessage();
}

successMessage(){
    const showSuccessMsg = new ShowToastEvent({
        title : "SUCCESS!!!",
        message : " The Case record has been updated successfully!!!",
        variant : "success",
        mode : "sticky"
    });
    this.dispatchEvent(showSuccessMsg);
}

errorMessage(){
    const showErrorMsg = new ShowToastEvent({
        title : "ERRORR!!!",
        message : " The Case record has NOT been updated. Please check your code and console for details!!!",
        variant : "error",
        mode : "sticky" 
    });
    this.dispatchEvent(showErrorMsg);
}

cancelMessage(){
    const showInfoMsg = new ShowToastEvent({
        title : "Information!!!",
        message : " The Case record update process has been canceled",
        variant : "info",
        mode : "sticky" 
    });
    this.dispatchEvent(showInfoMsg);
}

}