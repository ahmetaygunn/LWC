import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordFunctionCase extends LightningElement {

    recordId = '0036e00004H000BAAR';

    changeHandler(event){
        this.recordId = event.target.value;
    }

    deleteCaseRecord(){
        deleteRecord(this.recordId)
            .then(result=>{
                console.log(result);
                this.successMessage();
                this.template.querySelector('form.deleteCaseForm').reset();
            })
            .catch(error =>{
                console.log(error);
                this.errorMessage();
            })
    }

    successMessage(){
        const showSuccessMsg = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : " The Case record has been Deleted successfully!!!",
            variant : "success",
            mode : "sticky"
        });
        this.dispatchEvent(showSuccessMsg);
    }

    errorMessage(){
        const showErrorMsg = new ShowToastEvent({
            title : "ERRORR!!!",
            message : " The Case record has NOT been deleted. Please check your code and console for details!!!",
            variant : "error",
            mode : "sticky" 
        });
        this.dispatchEvent(showErrorMsg);
    }
}