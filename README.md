# gaultmillau-api

In order to share data with potential partners but also among G&M products, we need to setup a reliable, standard and secure API.

Usage examples:

=> Fetch restaurant data in Gault&Millau - Restaurant app

=> Allow directories to display toques or the beginning of the review

=> Develop the G&M widget


## Add API in your project

### With bower

`bower install gaultmillau-api`

Include the file `min/api_token.js` or `min/api_token.min.js` in your HTML file.

In your file JavaScript add the following line with correct parameters:

`var my_client = new gmClient(app_id, secret, env);`

This line is used to initialize the API.

### With file JavaScript

You can download the script JavaScript on this page: https://fr.gaultmillau.com/admin/apps

## Use Gault&Millau API

In Gault&Millau API you can use the method 'GET'.

The method takes 4 arguments in parameters:
  - **establishment_url**: The url of the establishment whose data we want to retrieve.
  - **params**: Json with parameters.
  - **callback_success**: Define the callback if the API call successful.
    
    Example:
    
      ```
      function (response) {
        console.log("Success");
      }
      ```
  - **callback_error**: Define the callback if the API call failed.
  
    Example:
      ```
      function (error) {
        console.log("Error");
      }
      ```

The following line is used to call the API with method GET:

`my_client.get(establishment_url, params, callback_success, callback_error)`
