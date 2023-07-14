public with sharing class AccountController {
    
  //Create an LWC Component and display the top 10 accounts based on their Annual Revenue by using Apex in LWC. Display the following fields: Name, Type, Industry, Annual Revenue.

  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts(){
      return [SELECT Id, Name, Type, Industry, AnnualRevenue
              FROM Account
              WHERE AnnualRevenue != NULL
              WITH SECURITY_ENFORCED
              ORDER BY AnnualRevenue DESC
              LIMIT 10];
  }


  //Get all the Accounts where their Type is a given type like Prospect, Customer-Direct or Customer-channel…etc
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountsByType(String type){
      return [SELECT Id, Name, Type, Industry, AnnualRevenue
              FROM Account
              WHERE Type LIKE:type
              WITH SECURITY_ENFORCED
              ORDER BY Name ASC]; // It will show the fields based on the field level permission per user.
  }


  //Imperative approach: Get all the accounts whose name contains the given searchkey.
  @auraEnabled(cacheable=true)
  public static List<Account> searchAccounts(String searchKey){
      searchKey = '%'+ searchKey + '%';   //est -->  test, best, yest, zest, bestsy, 
      return [SELECT Id, Name, Type, Industry, AnnualRevenue, AccountNumber
              FROM Account
              WHERE Name LIKE :searchKey
              WITH SECURITY_ENFORCED
              ORDER BY Name ASC];
  }

  //create methode to give us most recent account then display them in a datable by using p2c communication
  @AuraEnabled(cacheable=true)
  public static List<Account> getRecentAccounts(){
    return [SELECT Id, Name, Industry, AnnualRevenue
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY CreatedDate DESC
            LIMIT 10];
    

}
}