import { LightningElement, wire } from 'lwc';
import getOpportunitiesByStage from '@salesforce/apex/OpportunityController.getOpportunitiesByStage'

const COLUMNS = [
    {label : "Opportunity Name", fieldName : "Name", type : "text"},
    {label : "Amount", fieldName : "Amount", type : "currency"},
    {label : "Type", fieldName : "type", type : "text"},
    {label : "Satge Name", fieldName : "stageName", type : "type"}
]

export default class ApexGetOpportunitiesByStage extends LightningElement {
    columns = COLUMNS;
    stageName;

    @wire(getOpportunitiesByStage,{stage:'$stageName'})
    getOpportunitiesByStage;

   
    }
    
