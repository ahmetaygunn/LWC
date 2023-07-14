public with sharing class ContactController {
    
   // Create an LWC Component and display 10 contacts who's mobile and email populated. Get them ordered by Last name and display the following fields in data table. Fields: First name, Last name, Title, Email, Mobile.

   @AuraEnabled(cacheable=true)
   public static List<Contact> getContacts(){
       return [SELECT Id, FirstName, LastName, Title, Email, MobilePhone
               FROM Contact
               WHERE MobilePhone != NULL AND Email != NULL
               WITH SECURITY_ENFORCED
               ORDER BY LastName ASC
               LIMIT 10];
   }


   //Use case: Please prepare an LWC component to search first name or lastname of the contacts. Please display 20 contacts in datatable. Please have the following fields as columns:First name, last name, email and title

   @AuraEnabled
   public static List<Contact> searchContacts(String searchKey){
       searchKey = '%' + searchKey + '%';  
       return [SELECT Id, FirstName, LastName, Email, Title
               FROM Contact
               WHERE FirstName LIKE:searchKey OR LastName LIKe:searchKey
               WITH SECURITY_ENFORCED
               ORDER BY FirstName ASC
               LIMIT 20];
   }
}