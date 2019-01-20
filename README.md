# Shopping Cart Application

## Problem definition

In this example application we have some business rules, find them listed below:

- Basic sales tax is applicable at a rate of 10% on all goods, except books, food,
  and medical products that are exempt.
- Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.
- When I purchase items I receive a receipt that lists the name of all the items and
  their price (including tax), finishing with the total cost of the items, and the total
  amounts of sales tax paid.
  The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains np/100 rounded up to the nearest 0.05 amount of sales tax.

### INPUT:

    Input 1:
    	1 book at 12.49
    	1 music CD at 14.99
    	1 chocolate bar at 0.85

    Input 2:
    	1 imported box of chocolates at 10.00
    	1 imported bottle of perfume at 47.50

    Input 3:
    	1 imported bottle of perfume at 27.99
    	1 bottle of perfume at 18.99
    	1 packet of headache pills at 9.75
    	1 box of imported chocolates at 11.25

### OUTPUT:

    Output 1:
    	1 book : 12.49
    	1 music CD: 16.49
    	1 chocolate bar: 0.85
    	Sales Taxes: 1.50
    	Total: 29.83

    Output 2:
    	1 imported box of chocolates: 10.50
    	1 imported bottle of perfume: 54.65
    	Sales Taxes: 7.65
    	Total: 65.15

    Output 3:
    	1 imported bottle of perfume: 32.19
    	1 bottle of perfume: 20.89
    	1 packet of headache pills: 9.75
    	1 imported box of chocolates: 11.85
    	Sales Taxes: 6.70
    	Total: 74.68

## Solution

Implemented a simple shopping cart application , which can load shopping cart data from the static file, caluclate total and sales tax and show purchase receipt.

## Assumption

1. Shopping cart data will be stored temporarily
2. Implementation can be done using any latest technology and this solution uses spring framework
3. Require maven to run this application
4. The following assumption is made from the input requirement
   a. System will decide whether a product is imported or not based on imported token from the product description
   b. Every line item in the input data will use this format <Qty> <imported> <desc> at <price>
   c. Exempt items are determined from these text chocolate, pills, book
5. Sales tax percentage should be a configuration parameter

To get started, please complete the following steps:

1. Download/checkout project
2. Extract the file to a folder
3. Go to the exracted project root folder
4. Run this command from Terminal/Command Line - "run mvn clean install mvn jetty:run" and wait for server to start successfully
5. Open any browser and go to this url - http://<server address>:<port>/shoppingcart/

## Technology Used

Spring 3.2,maven, Apache commons, jackson JSON API, bootstrap and AngularJS

## Services Details

Variables

- Server address <localhost>, for example localhost
- Service port <port>, for example 8080

1. Loads bucket to shopping cart
   URL Pattern - GET http://<server address>:<port>/shoppingcart/loadcart/{bucket}
   Sample URL - GET http://<server address>:<port>/shoppingcart/loadcart/1
   Bucket values : 1, 2, 3

   Response - HTTP 200

2. GET http://<server address>:<port>/shoppingcart/viewcart

3. View Bucket input data

   URL Pattern - GET http://<server address>:<port>/shoppingcart/viewbucketinput?bucket={bucket}
   Sample URL - GET http://<server address>:<port>/shoppingcart/viewbucketinput?bucket=1

   Bucket values : 1, 2, 3

   Sample Response

   ```json
   ["1 book at 12.49", "1 music CD at 14.99", "1 chocolate bar at 0.85"]
   ```

4) View purchase receipt ( this service will return data that is currently stored in shopping cart)

   URL pattern - http://<server address>:<port>/shoppingcart/report/purchase

   Sample Response

   ```json
   {
     "lineItems": [
       {
         "product": {
           "id": 0,
           "description": "book",
           "price": 12.49,
           "imported": false
         },
         "quantity": 1,
         "amount": 12.49,
         "totalCost": 12.49
       },
       {
         "product": {
           "id": 0,
           "description": "music CD",
           "price": 14.99,
           "imported": false
         },
         "quantity": 1,
         "amount": 14.99,
         "totalCost": 16.49
       },
       {
         "product": {
           "id": 0,
           "description": "chocolate bar",
           "price": 0.85,
           "imported": false
         },
         "quantity": 1,
         "amount": 0.85,
         "totalCost": 0.84
       }
     ],
     "salesTax": 1.5,
     "total": 29.83
   }
   ```

5) Add new line items to shopping cart -
   URL Pattern - POST http://<server address>:<port>/shoppingcart/addcart
   Request payload sample

   ```text
   1 music MP3 CD1 at 20.00
   ```

   After adding data, please use http://<server address>:<port>/shoppingcart/report/purchase to view data in shopping cart

6) Error response - In case of exception, exception object will be converted to ErrorResponse object and return appropriate HTTP error code back to client. Sample invalid ERROR URL - http://<server address>:<port>/shoppingcart/loadcart/4

   Sample Error response

   ```json
   {
     "errorReferenceId": "81db7119-4a75-4cbb-a0aa-4b64211afeef",
     "name": null,
     "type": "NOT_FOUND",
     "message": "class path resource [data/input11] cannot be opened because it does not exist"
   }
   ```
