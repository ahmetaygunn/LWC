import { LightningElement } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountController.searchAccounts';

export default class ApexSearchAccounts extends LightningElement {

    //Imperative approach: Get all the accounts whose name contains the given searchKey.
    
    searchWord; //bu
    accounts = [];
    displayError;

    searchHandler(event){
        this.searchWord = event.target.value;
    
        searchAccounts({searchKey:this.searchWord})
            .then(result=>{
                console.log(result);
                this.accounts = result;
            })
            .catch(error=>{
                console.log(error);
                this.displayError = error;
            })
    }
}
