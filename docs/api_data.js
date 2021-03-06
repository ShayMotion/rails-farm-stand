define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/shop/login",
    "title": "Consumer Login Request",
    "name": "Consumer_Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Welcome\",\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmonk.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\",\n   \"city_id\": 1,\n   \"state_id\": 1\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/shop/register",
    "title": "Consumer Register Request",
    "name": "Consumer_Register",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"message\": \"Welcome\",\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmail.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\",\n   \"city_id\": 1,\n   \"state_id\": 1\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"email\": \"example@gmonk.com\",\n\t\"password\": \"password\",\n\t\"city_id\": \"1\",\n\t\"state_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/farmer/login",
    "title": "Farmer Login Request",
    "name": "Farmer_Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmonk.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\",\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/farmer/register",
    "title": "Farmer Register Request",
    "name": "Farmer_Register",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"message\": \"Welcome\",\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmail.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\"\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"email\": \"example@gmonk.com\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/docs/main.js",
    "group": "C__Users_arman_Documents_Back_End_docs_docs_main_js",
    "groupTitle": "C__Users_arman_Documents_Back_End_docs_docs_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_arman_Documents_Back_End_docs_main_js",
    "groupTitle": "C__Users_arman_Documents_Back_End_docs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/consumers/:id",
    "title": "Get Consumer By Id -C",
    "name": "GetConsumerById",
    "group": "Consumers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User_Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>User City_Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>User State_Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\": 1,\n \"username\": \"consumer_1\",\n \"email\": \"consumer_1@gmail.com\",\n \"password\": \"password\",\n \"city_id\": 1,\n \"state_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Consumers"
  },
  {
    "type": "get",
    "url": "/api/:consumerId/orders",
    "title": "Get Consumer Order History -C",
    "name": "GetConsumerOrders",
    "group": "Consumers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Consumer Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "orders",
            "description": "<p>array of a consumers past orders</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"recent_orders\": [\n   {\n     \"shipping_address\": \"Example Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": false,\n     \"item_purchased\": \"corn\",\n     \"quantity\": 18,\n     \"seller\": \"A.R. Farms\"\n   },\n   {\n     \"shipping_address\": \"Example Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": false,\n     \"item_purchased\": \"potato\",\n     \"quantity\": 5,\n     \"seller\": \"Organic Farms\"\n   },\n   {\n     \"shipping_address\": \"Example Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": false,\n     \"item_purchased\": \"potato\",\n     \"quantity\": 6,\n     \"seller\": \"Blueberry Farms\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Consumers"
  },
  {
    "type": "get",
    "url": "/api/consumers/farms/:cityId/:stateId",
    "title": "Get Local Farms -C",
    "name": "GetLocalFarms",
    "group": "Consumers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cityId",
            "description": "<p>City_Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stateId",
            "description": "<p>State_Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "farms",
            "description": "<p>array of farm objects near consumer location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"name\": \"A.R. Farms\",\n   \"address\": \"2213 Orchard Rd.\",\n   \"year_founded\": 1908,\n   \"bio\": \"We are a farm.\",\n   \"id\": 2\n },\n {\n   \"name\": \"Blueberry Farms\",\n   \"address\": \"21576 Albers Rd.\",\n   \"year_founded\": 1963,\n   \"bio\": \"Locally Grown Produce.\",\n   \"id\": 4\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Consumers"
  },
  {
    "type": "post",
    "url": "/api/farms/:farmerId",
    "title": "Add Farm -F",
    "name": "AddFarm",
    "group": "Farm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "farm",
            "description": "<p>Farm farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"id\": 5,\n  \"name\": \"J.W. Farms\",\n  \"address\": \"23528 Milnes Rd.\",\n  \"year_founded\": 1894,\n  \"bio\": \"Locally Grown Produce.\",\n  \"farmer_id\": 3,\n  \"city_id\": 2,\n  \"state_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"name\": \"Example Farm\",\n \"address\": \"23528 Example Rd.\",\n \"year_founded\": \"1894\",\n \"bio\": \"Locally Grown Produce.\",\n \"city_id\": 2,\n\t\"state_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farm_router.js",
    "groupTitle": "Farm"
  },
  {
    "type": "delete",
    "url": "/api/farms/:farmId",
    "title": "Delete A Farm -F",
    "name": "DeleteFarm",
    "group": "Farm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Message message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farm_router.js",
    "groupTitle": "Farm"
  },
  {
    "type": "get",
    "url": "/api/farms/:farmId",
    "title": "Get Farm By Id -F",
    "name": "GetFarmByID",
    "group": "Farm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "farm",
            "description": "<p>Farm farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\": 1,\n \"name\": \"Organic Farms\",\n \"address\": \"1213 Dairy Rd.\",\n \"year_founded\": 1955,\n \"bio\": \"We sell only the best.\",\n \"farmer_id\": 1,\n \"city_id\": 1,\n \"state_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farm_router.js",
    "groupTitle": "Farm"
  },
  {
    "type": "get",
    "url": "/api/farms/:farmId/order",
    "title": "Get Farm Orders -F",
    "name": "GetFarmOrders",
    "group": "Farm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Orders array of order items for a farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"shipping_address\": \"Example Rd.\",\n   \"purchase_date\": \"2019-10-07\",\n   \"delivered\": true,\n   \"item_purchased\": \"potato\",\n   \"quantity\": 5,\n   \"buyer\": \"example_user2122\"\n },\n {\n   \"shipping_address\": \"Example Rd.\",\n   \"purchase_date\": \"2019-10-07\",\n   \"delivered\": true,\n   \"item_purchased\": \"potato\",\n   \"quantity\": 5,\n   \"buyer\": \"example_user2122\"\n },\n {\n   \"shipping_address\": \"Example Rd.\",\n   \"purchase_date\": \"2019-10-07\",\n   \"delivered\": true,\n   \"item_purchased\": \"potato\",\n   \"quantity\": 5,\n   \"buyer\": \"example_user7\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farm_router.js",
    "groupTitle": "Farm"
  },
  {
    "type": "put",
    "url": "/api/farms/:farmId",
    "title": "Update Farm -F",
    "name": "UpdateFarm",
    "group": "Farm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "farm",
            "description": "<p>Farm farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\": 5,\n \"name\": \"Example Farms\",\n \"address\": \"23528 Example Rd.\",\n \"year_founded\": 1894,\n \"bio\": \"Locally Grown Produce.\",\n \"farmer_id\": 3,\n \"city_id\": 2,\n \"state_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"name\": \"Example Farms\",\n \"address\": \"23528 Example Rd.\",\n \"year_founded\": \"1894\",\n \"bio\": \"Locally Grown Produce.\",\n\t\"farmer_id\": 3,\n \"city_id\": 2,\n\t\"state_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farm_router.js",
    "groupTitle": "Farm"
  },
  {
    "type": "get",
    "url": "/api/farmers/:id",
    "title": "Get Farmer By Id -F",
    "name": "GetFarmerById",
    "group": "Farmers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User_Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>User City_Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>User State_Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\": 1,\n \"username\": \"emaxple_1\",\n \"email\": \"emaxple_1@gmail.com\",\n \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_user_routes/farmer_user_router.js",
    "groupTitle": "Farmers"
  },
  {
    "type": "post",
    "url": "/api/farmers/produce/categories",
    "title": "Add Produce Category -F",
    "name": "AddProduceCategory",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "category_id",
            "description": "<p>Produce category_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{ \n \"new_category\": {\n   \"id\": 6,\n   \"name\": \"example\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"example\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "post",
    "url": "/api/farmers/produce/:farmId",
    "title": "Add Produce Item -F",
    "name": "AddProduceItem",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "produce_item_id",
            "description": "<p>Produce produce_item_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "{\n \"id\": 8,\n \"name\": \"example\",\n \"quantity\": 20,\n \"price\": 0.8,\n \"category_id\": 1,\n \"farm_id\": 3\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"example\",\n \"quantity\": 20,\n \"price\": 0.8,\n \"category_id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "delete",
    "url": "/api/farmers/produce/:itemId",
    "title": "Delete Produce Item -F",
    "name": "DeleteProduceItem",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>Produce message with the request status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "{\n \"message\": \"successful deletion\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "get",
    "url": "/api/farmers/produce/:farmId",
    "title": "Get All Produce For A Farm -F",
    "name": "GetFarmProduce",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "produce_items",
            "description": "<p>array of produce item objects belonging to a farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"current_stock\": [\n   {\n     \"id\": 5,\n     \"name\": \"potato\",\n     \"quantity\": 100,\n     \"price\": 0.8,\n     \"category_id\": 2,\n     \"farm_id\": 3\n   },\n   {\n     \"id\": 6,\n     \"name\": \"watermelon\",\n     \"quantity\": 100,\n     \"price\": 0.95,\n     \"category_id\": 2,\n     \"farm_id\": 3\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "get",
    "url": "/api/farmers/produce/categories",
    "title": "Get Produce Categories For A Farmer -F",
    "name": "GetProduceCategories",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "produce_categories",
            "description": "<p>array of produce category objects available to farmers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"categories\": [\n   {\n     \"id\": 1,\n     \"name\": \"fruits\"\n   },\n   {\n     \"id\": 2,\n     \"name\": \"vegetables\"\n   },\n   {\n     \"id\": 3,\n     \"name\": \"grains\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "put",
    "url": "/api/farmers/produce/:farmId/:itemId",
    "title": "Update Produce Item -F",
    "name": "UpdateProduceItem",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "produce_item",
            "description": "<p>Produce produce_item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "{\n \"id\": 8,\n \"name\": \"example\",\n \"quantity\": 20,\n \"price\": 0.8,\n \"category_id\": 1,\n \"farm_id\": 3\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"example\",\n \"quantity\": 20,\n \"price\": 0.8,\n \"category_id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "get",
    "url": "/api/locations/cities",
    "title": "Get Cities Location",
    "name": "GetCities",
    "group": "Location",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "cities",
            "description": "<p>array of city objects available for selection</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"cities\": [\n   {\n     \"id\": 1,\n     \"name\": \"Chicago\"\n   },\n   {\n     \"id\": 2,\n     \"name\": \"San Francisco\"\n   },\n   {\n     \"id\": 3,\n     \"name\": \"New York\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/location_router.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/api/locations/states",
    "title": "Get States Location",
    "name": "GetStates",
    "group": "Location",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "states",
            "description": "<p>array of state objects available for selection</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"states\": [\n   {\n     \"id\": 1,\n     \"name\": \"Illinois\"\n   },\n   {\n     \"id\": 2,\n     \"name\": \"California\"\n   },\n   {\n     \"id\": 3,\n     \"name\": \"New York\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/location_router.js",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/api/auth/consumers/order/:consumerId",
    "title": "Post Consumer Order -C",
    "name": "Consumer_Order",
    "group": "Shopping",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Order",
            "description": "<p>consumer Order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 Created\n{\n \"order\": {\n   \"order_details\": 30,\n   \"orderItems\": {\n     \"shipping_address\": \"Test Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": 0,\n     \"item_purchased\": \"corn\",\n     \"quantity\": 18,\n     \"seller\": \"A.R. Farms\"\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"shipping_address\": \"Test Rd.\",\n   \"purchase_date\": \"2019-10-07\",\n   \"delivered\": 0,\n   \"order_items\":[\n       {\n           \"quantity\":18,\n           \"produce_item_id\": 2,\n           \"farm_id\":2\n       },\n       {\n           \"quantity\":5,\n           \"produce_item_id\": 5,           \n           \"farm_id\":1\n       },\n       {\n           \"quantity\":6,\n           \"produce_item_id\": 5,\n           \"farm_id\":4\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "get",
    "url": "/api/consumers/shop/categories",
    "title": "Get Shopping Categories -C",
    "name": "GetCategories",
    "group": "Shopping",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "categories",
            "description": "<p>array of produce categories to shop from.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 1,\n   \"name\": \"fruits\"\n },\n {\n   \"id\": 2,\n   \"name\": \"vegetables\"\n },\n {\n   \"id\": 3,\n   \"name\": \"grains\"\n },\n {\n   \"id\": 4,\n   \"name\": \"meats\"\n },\n {\n   \"id\": 5,\n   \"name\": \"dairy\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "get",
    "url": "/api/consumers/shop/:category/:categoryId",
    "title": "Get Shopping Category Items -C",
    "name": "GetCategoryItems",
    "group": "Shopping",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryId",
            "description": "<p>Category_Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "produce",
            "description": "<p>item array of produce items in specified category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 3,\n   \"name\": \"apple\",\n   \"quantity\": 100,\n   \"price\": 1.8,\n   \"category_id\": 1,\n   \"farm_id\": 2,\n   \"farm_name\": \"A.R. Farms\"\n },\n {\n   \"id\": 4,\n   \"name\": \"peach\",\n   \"quantity\": 100,\n   \"price\": 1.95,\n   \"category_id\": 1,\n   \"farm_id\": 2,\n   \"farm_name\": \"A.R. Farms\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "get",
    "url": "/api/consumers/shop/:cityId",
    "title": "Get City's Produce -C",
    "name": "GetCity_sProduce",
    "group": "Shopping",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>city_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "produce",
            "description": "<p>item array of produce items in specified city</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"city_id\": 1,\n   \"city_name\": \"Chicago\",\n   \"produce_name\": \"carrots\",\n   \"quantity\": 100,\n   \"unit_price\": 1.9,\n   \"produce_category\": \"vegetables\",\n   \"seller\": \"Example Farms\"\n },\n {\n   \"city_id\": 1,\n   \"city_name\": \"Chicago\",\n   \"produce_name\": \"corn\",\n   \"quantity\": 100,\n   \"unit_price\": 1.6,\n   \"produce_category\": \"vegetables\",\n   \"seller\": \"Example Farms\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "post",
    "url": "/api/tools/farms/:farmId",
    "title": "Add Tool -F",
    "name": "AddTool",
    "group": "Tools",
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"Wheel Barrow\" ,\n\t\"tool_category_id\": 2 ,\n\t\"farm_tool_data\": {\n\t\t\"quantity\": 3,\n\t\t\"tool_id\": 10\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "with",
            "description": "<p>new tool id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"new_tool\": 23\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "post",
    "url": "/api/tools/categories",
    "title": "Add Tool Category -F",
    "name": "AddToolCategory",
    "group": "Tools",
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"example\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "of",
            "description": "<p>tool category posted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": 1,\n   \"name\": \"example\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/categories",
    "title": "Get Tool Categories -F",
    "name": "GetToolCategories",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "tools",
            "description": "<p>array of tool category objects available to farmers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 1,\n   \"name\": \"machinery\"\n },\n {\n   \"id\": 2,\n   \"name\": \"hand\"\n },\n {\n   \"id\": 3,\n   \"name\": \"irrigation\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/category/:categoryId",
    "title": "Get Tool Category By Id -F",
    "name": "GetToolCategoryById",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects",
            "optional": false,
            "field": "tool_category",
            "description": "<p>tool category requested</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": 1,\n   \"name\": \"machinery\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/farm/:farmId",
    "title": "Get A Farms Tools By Id -F",
    "name": "Get_A_Farms_Tools",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tools_array",
            "description": "<p>of a farms current tool inventory</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"name\": \"Harvester\",\n   \"quantity\": 10,\n   \"farm_tool_id\": 13,\n   \"farm_id\": 3\n },\n {\n   \"name\": \"Tree Shaker\",\n   \"quantity\": 20,\n   \"farm_tool_id\": 14,\n   \"farm_id\": 3\n },\n {\n   \"name\": \"Tiller\",\n   \"quantity\": 7,\n   \"farm_tool_id\": 15,\n   \"farm_id\": 3\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/:farmId/:farmId",
    "title": "Get Single Tool By Id -F",
    "name": "Get_A_Single_Tool_From_A_Farm",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>of a single tools status for a farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"name\": \"Tree Shaker\",\n \"quantity\": 20,\n \"farm_tool_id\": 14,\n \"farm_id\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/",
    "title": "Get All Tools -F",
    "name": "Get_All_Tools",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>of all tool options for a farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"name\": \"Harvester\",\n    \"tool_category_id\": 1\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Tree Shaker\",\n    \"tool_category_id\": 1\n  },\n  {\n    \"id\": 3,\n    \"name\": \"Tiller\",\n    \"tool_category_id\": 1\n  },\n  {\n    \"id\": 4,\n    \"name\": \"Shovel\",\n    \"tool_category_id\": 2\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  }
] });
