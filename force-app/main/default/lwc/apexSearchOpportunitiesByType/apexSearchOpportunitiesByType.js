import { LightningElement} from 'lwc';
import getOpportunitiesByType from '@salesforce/apex/OpportunityController.getOpportunitiesByType';
export default class ApexSearchOpportunitiesByType extends LightningElement {


    selectedType;
    opportunities = [];

    changeHandler(event){
       this.selectedType = event.target.value;

        getOpportunitiesByType({type:this.selectedType})
           .then(result=>{
                console.log(result);
                this.opportunities = result;
           })
           .catch(error=>{
                console.log(error);
           })
       
    }

    get typeOptions(){
        return [
            {label: "Existing Customer - Upgrade", value: "Existing Customer - Upgrade"},
            {label: "Existing Customer - Replacement", value: "Existing Customer - Replacement"},
            {label: "Existing Customer - Downgrade", value: "Existing Customer - Downgrade"},
            {label: "New Customer", value: "New Customer"}
        ]
    }

    
}