Feature: Login Feature
    
    Background: 
      Given I open the app
      And I am on the Landing page
      And I click on the options menu
      And I click on the login option
      

      Scenario: I Login With Locked User
       
        
        Given I am on the login page
        When I login with the locked user
        Then I should see an account locked message


      Scenario: I Login With not Match User
       
        
        Given I am on the login page
        When I login with no matching user
        Then I should see a no match message


      Scenario: I Login With No User Details
       
      
        Given I am on the login page
        When I login with no user details
        Then I should see an error message for no user details

      Scenario: I Login With No password
       
      
        Given I am on the login page
        When I login with no password
        Then I should see an error message for no password


      Scenario: I Login With Standard User
        
        Given I am on the login page
        When I login with a standard user
        Then I should see the products screen

        

     
    
