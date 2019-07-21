define({ "api": [
  {
    "type": "post",
    "url": "api/auth/login",
    "title": "Log a user in.",
    "version": "1.0.0",
    "name": "PostLoginUser",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This will log the user in, and send back a token.  Username and password required.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "Stirng",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n    \"username\": \"hermione\",\n    \"password\": \"granger\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "success",
            "description": "<p>User's token, ID, and a Welcome Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"message\": \"Welcome hermione!\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsInVzZXJuYW1lIjoiaGVybWlvbmUiLCJpYXQiOjE1NjE0MTU2OTQsImV4cCI6MTU2MjAyMDQ5NH0.rwTCYJ97VA7IvxT0D2uwY3yHljUr0EPNlKQv-P8HloQ\",\n    \"userID\": 33\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Required",
            "description": "<p>Username and Password are required</p>"
          },
          {
            "group": "401",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>Username or password are incorrect</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "LoginFailed",
            "description": "<p>Login failed ${error}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"message\": \"Username or password incorrect\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/auth/register",
    "title": "Register a new user",
    "version": "1.0.0",
    "name": "PostNewUser",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This will create a new user and send back a token. Username, password, firstName, lastName are required fields.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "Stirng",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Users first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Users last name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n   \"username\" : \"harry\",\n   \"password\" : \"potter\",\n   \"firstName\" : \"harry\",\n   \"lastName\" : \"potter\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "success",
            "description": "<p>User's token, ID, and a Welcome Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n \"message\": \"Welcome harry!\",\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsInVzZXJuYW1lIjoiaGFycnkiLCJpYXQiOjE1NjE1NzIzMTksImV4cCI6MTU2MjE3NzExOX0.VCaGen64x_WEkVueJof8XKZxOImjxK09tNN6tiYSZZw\",\n \"userID\": 33\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UserCannotBeCreated",
            "description": "<p>Your user count not be created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"message\" : \"Your user could not be created ${error}\" \n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "api/todos/:id",
    "title": "Delete Todo",
    "version": "1.0.0",
    "name": "DeleteTodo",
    "group": "Todos",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This will delete the todo at this ID, and return the deleted object.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Todo Id passed in the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "todo",
            "description": "<p>Deleted Todo is sent back to the FE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 67,\n    \"user_id\": 42,\n    \"title\": \"Insomnia\",\n    \"task\": \"Trying Wunderlist End Points, Edit Todo\",\n    \"notes\": null,\n    \"setDate\": \"Tuesday\",\n    \"completed\": null,\n    \"created_at\": \"2019-07-21T14:36:03.690Z\",\n    \"updated_at\": \"2019-07-21T14:36:03.690Z\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "DoesNotExist",
            "description": "<p>The Todo with ID does not exist</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "CannotDeleteTodo",
            "description": "<p>The todo information could not be modified ${error}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"message\": \"The Todo with the specified ID does not exist.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Todos"
  },
  {
    "type": "get",
    "url": "api/todos/:id",
    "title": "Get single todo",
    "version": "1.0.0",
    "name": "GetTodo",
    "group": "Todos",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This will return an object corresponding to the todo at that ID.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Todo Id passed in the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "todo",
            "description": "<p>Specific Todo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 67,\n    \"user_id\": 42,\n    \"title\": \"Insomnia\",\n    \"task\": \"Trying Wunderlist End Points, Edit Todo\",\n    \"notes\": null,\n    \"setDate\": \"Tuesday\",\n    \"completed\": null,\n    \"created_at\": \"2019-07-21T14:36:03.690Z\",\n    \"updated_at\": \"2019-07-21T14:36:03.690Z\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Todo with specific ID does not exist</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Failed",
            "description": "<p>Todo request failed ${error}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"message\": \"Todo with specified ID does not exist\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Todos"
  },
  {
    "type": "get",
    "url": "api/todos/",
    "title": "Get all todos",
    "version": "1.0.0",
    "name": "GetTodos",
    "group": "Todos",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This will return an array of todos.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "todos",
            "description": "<p>All todos for a user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[\n {\n  \"id\": 64,\n  \"user_id\": null,\n  \"title\": \"Lambda\",\n  \"task\": \"Build Documentation\",\n  \"notes\": null,\n  \"setDate\": \"Tomorrow\",\n  \"completed\": null,\n  \"created_at\": \"2019-07-21T14:30:01.322Z\",\n  \"updated_at\": \"2019-07-21T14:30:01.322Z\"\n },\n {\n  \"id\": 65,\n  \"user_id\": null,\n  \"title\": \"Lambda\",\n  \"task\": \"WEBPT8 TL\",\n  \"notes\": null,\n  \"setDate\": \"Tonight\",\n  \"completed\": null,\n  \"created_at\": \"2019-07-21T14:30:32.381Z\",\n  \"updated_at\": \"2019-07-21T14:30:32.381Z\"\n },\n {\n  \"id\": 66,\n  \"user_id\": null,\n  \"title\": \"Lambda\",\n  \"task\": \"WEB20 Context Project\",\n  \"notes\": null,\n  \"setDate\": \"Tuesday\",\n  \"completed\": null,\n  \"created_at\": \"2019-07-21T14:30:48.287Z\",\n  \"updated_at\": \"2019-07-21T14:30:48.287Z\"\n },\n {\n  \"id\": 67,\n  \"user_id\": 42,\n  \"title\": \"Insomnia\",\n  \"task\": \"Trying Wunderlist End Points, Edit Todo\",\n  \"notes\": null,\n  \"setDate\": \"Tuesday\",\n  \"completed\": null,\n  \"created_at\": \"2019-07-21T14:36:03.690Z\",\n  \"updated_at\": \"2019-07-21T14:36:03.690Z\"\n }\n]",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "TodosNotFound",
            "description": "<p>Todos could not be found ${error}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"message\": \"Todos cound not be found ${error}\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Todos"
  },
  {
    "type": "post",
    "url": "api/todos/",
    "title": "Add Todo",
    "version": "1.0.0",
    "name": "PostTodo",
    "group": "Todos",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This will add a new todo, and return the created object. title, task and setDate are required fields. user_id, notes, and completed are optional fields.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of your todo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>Your todo Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "setDate",
            "description": "<p>When is your todo due.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p><strong>OPTIONAL</strong> <strong>HIGHLY RECOMMENDED</strong> Current User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p><strong>OPTIONAL</strong> Notes on your Todo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p><strong>OPTIONAL</strong> Is your todo completed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n   \"title\" : \"Insomnia\",\n   \"task\" : \"Trying Wunderlist End Points\",\n   \"setDate\" : \"Tuesday\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "JSON",
            "optional": false,
            "field": "Todo",
            "description": "<p>User's Todo is returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 67,\n    \"user_id\": null,\n    \"title\": \"Insomnia\",\n    \"task\": \"Trying Wunderlist End Points\",\n    \"notes\": null,\n    \"setDate\": \"Tuesday\",\n    \"completed\": null,\n    \"created_at\": \"2019-07-21T14:36:03.690Z\",\n    \"updated_at\": \"2019-07-21T14:36:03.690Z\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Required",
            "description": "<p>Your Todo needs a title, task, and setDate</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "TodoCannotBeCreated",
            "description": "<p>Your todo could not be created ${error}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"message\": \"Your Todo needs a title, task, and setDate\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Todos"
  },
  {
    "type": "put",
    "url": "api/todos/:id",
    "title": "Edit Todo",
    "version": "1.0.0",
    "name": "PutTodo",
    "group": "Todos",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This will edit the todo at this ID, and return the edited object.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Todo Id passed in the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p><strong>OPTIONAL</strong> Title of your todo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p><strong>OPTIONAL</strong> Your todo Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "setDate",
            "description": "<p><strong>OPTIONAL</strong> When is your todo due.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p><strong>OPTIONAL</strong> Current User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p><strong>OPTIONAL</strong> Notes on your Todo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p><strong>OPTIONAL</strong> Is your todo completed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n    \"task\" : \"Trying Wunderlist End Points, Edit Todo\",\n    \"user_id\" : 42 \n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "Users",
            "description": "<p>edited Todo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 67,\n    \"user_id\": 42,\n    \"title\": \"Insomnia\",\n    \"task\": \"Trying Wunderlist End Points, Edit Todo\",\n    \"notes\": null,\n    \"setDate\": \"Tuesday\",\n    \"completed\": null,\n    \"created_at\": \"2019-07-21T14:36:03.690Z\",\n    \"updated_at\": \"2019-07-21T14:36:03.690Z\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Todo cannot be found</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "CannotEditTodo",
            "description": "<p>The Todo information could not be modified ${error}.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"message\": \"The Todo with the specified ID does not exist.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Todos"
  },
  {
    "type": "delete",
    "url": "api/users/:id",
    "title": "Delete profile",
    "version": "1.0.0",
    "name": "DelUser",
    "group": "Users",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This allows a user to delete their specific profile</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Todo Id passed in the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User Information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"id\": 42,\n   \"first_name\": \"Donald\",\n   \"last_name\": \"Whitely\",\n   \"username\": \"don\",\n   \"password\": \"$2a$08$aaR080XNGaa5tesl9mDD0.In.D8yntpkmEmIesptyocsk8gkoMmkq\",\n   \"created_at\": \"2019-07-21T14:28:45.483Z\",\n   \"updated_at\": \"2019-07-21T14:28:45.483Z\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User with the specific ID is not found</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Failed",
            "description": "<p>User request failed ${error}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"message\": \"User with specified ID does not exist.\"\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "Get profile",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This allows a user to view their specific profile by id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Todo Id passed in the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User Information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"id\": 43,\n   \"first_name\": \"Donald\",\n   \"last_name\": \"Whitely\",\n   \"username\": \"don\",\n   \"password\": \"$2a$08$aaR080XNGaa5tesl9mDD0.In.D8yntpkmEmIesptyocsk8gkoMmkq\",\n   \"created_at\": \"2019-07-21T14:28:45.483Z\",\n   \"updated_at\": \"2019-07-21T14:28:45.483Z\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User with the specific ID is not found</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Failed",
            "description": "<p>User request failed ${error}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"message\": \"User with specified ID does not exist.\"\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "api/users/:id",
    "title": "Edit profile",
    "version": "1.0.0",
    "name": "PutUser",
    "group": "Users",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>This allows a user to edit their specific profile.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Todo Id passed in the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username  <strong>OPTIONAL</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "Stirng",
            "optional": false,
            "field": "password",
            "description": "<p>Users password  <strong>OPTIONAL</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Users first name  <strong>OPTIONAL</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Users last name  <strong>OPTIONAL</strong></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"username\": \"donald\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The edited user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"id\": 43,\n   \"first_name\": \"Donald\",\n   \"last_name\": \"Whitely\",\n   \"username\": \"donald\",\n   \"password\": \"$2a$08$aaR080XNGaa5tesl9mDD0.In.D8yntpkmEmIesptyocsk8gkoMmkq\",\n   \"created_at\": \"2019-07-21T14:28:45.483Z\",\n   \"updated_at\": \"2019-07-21T14:28:45.483Z\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "DoesNotExist",
            "description": "<p>The user with the specified ID does not exist</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "CannotEditUser",
            "description": "<p>The user's information could not be modified ${error}.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"message\": \"The user with the specified ID does not exist.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Users"
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
    "filename": "./doc/main.js",
    "group": "_mnt_s_Lambda_pt_build_week_wunderlist_wunderlist_doc_main_js",
    "groupTitle": "_mnt_s_Lambda_pt_build_week_wunderlist_wunderlist_doc_main_js",
    "name": ""
  }
] });
