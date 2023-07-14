public with sharing class OpportunityController {
    
    //Get all Opportunities where their Stage name is Closed Won and display the following fields in data table. Opportunity Name, Amount, Type, Stage Name,.
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunitiesByStage(String stage){
        return [SELECT Id, Name, Amount, Type, StageName
                FROM Opportunity
                WHERE StageName LIKE:stage
                WITH SECURITY_ENFORCED
                ORDER BY Amount DESC];
    }

    //Get all the opportunities which type matches with the given input
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunitiesByType(String type){
        return [SELECT Id, Name, Type, Amount, StageName
                FROM Opportunity
                WHERE Type LIKE:type
                WITH SECURITY_ENFORCED
                ORDER BY Amount DESC
                LIMIT 10];
    }
}