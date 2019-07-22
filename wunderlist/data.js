/**
 * @api {post} api/auth/register Register a new user
 * @apiVersion 1.1.0
 * @apiName PostNewUser
 * @apiGroup Auth
 * @apiPermission none
 * 
 * @apiDescription This will create a new user and send back a token. Username, password, firstName, lastName are required fields.
 * 
 * @apiParam {String} username Users username
 * @apiParam {Stirng} password Users password
 * @apiParam {String} firstName Users first name
 * @apiParam {String} lastName Users last name
 * 
 * @apiSuccess  (200) {Object} success User's token, ID, and a Welcome Message
 *
 * @apiError (400) Required Please fill out the required fields.
 * @apiError (500) UserCannotBeCreated Your user count not be created.
 * 
 * @apiParamExample {JSON} Request
 * {
 *    "username" : "harry",
 *    "password" : "potter",
 *    "firstName" : "harry",
 *    "lastName" : "potter"
 * }
 * 
 * @apiSuccessExample {JSON} Response
 *  {
 *   "message": "Welcome harry!",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsInVzZXJuYW1lIjoiaGFycnkiLCJpYXQiOjE1NjE1NzIzMTksImV4cCI6MTU2MjE3NzExOX0.VCaGen64x_WEkVueJof8XKZxOImjxK09tNN6tiYSZZw",
 *   "userID": 33
 *  }
 * 
 * @apiErrorExample {JSON} Response
 * {
 *    "message" : "Please fill out all required fields."
 * }
 */

/**
  * @api {post} api/auth/login Log a user in.
  * @apiVersion 1.1.0
  * @apiName PostLoginUser
  * @apiGroup Auth
  * @apiPermission none
  * 
  * @apiDescription This will log the user in, and send back a token.  Username and password required.
  * 
  * @apiParam {String} username Users username
  * @apiParam {Stirng} password Users password
  * 
  * @apiSuccess  (200) {JSON} success User's token, ID, and a Welcome Message
  * 
  * @apiError (400) Required  Username and Password are required
  * @apiError (400) InvalidCredentials  Username or password are incorrect
  * @apiError (500) LoginFailed Login failed ${error}
  * 
  * @apiParamExample {JSON} Request
  * {
  *     "username": "hermione",
  *     "password": "granger"
  * }
  * 
  * @apiSuccessExample {JSON} Response
  * {
  *     "message": "Welcome hermione!",
  *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsInVzZXJuYW1lIjoiaGVybWlvbmUiLCJpYXQiOjE1NjE0MTU2OTQsImV4cCI6MTU2MjAyMDQ5NH0.rwTCYJ97VA7IvxT0D2uwY3yHljUr0EPNlKQv-P8HloQ",
  *     "userID": 33
  * }
  * 
  * @apiErrorExample {JSON} Response
  * {
  *    "message": "Username or password incorrect"
  * }
  */
/**
  * @api {get} api/todos/ Get all todos
  * @apiVersion 1.0.0
  * @apiName GetTodos
  * @apiGroup Todos
  * @apiPermission token
  * 
  * @apiDescription This will return an array of todos.
  * 
  * @apiSuccess (200) {Array} todos All todos for a user.
  * 
  * @apiError (500) TodosNotFound Todos could not be found ${error}
  * 
  * @apiSuccessExample {JSON} Response
  * [
  *  {
  *   "id": 64,
  *   "user_id": null,
  *   "title": "Lambda",
  *   "task": "Build Documentation",
  *   "notes": null,
  *   "setDate": "Tomorrow",
  *   "completed": null,
  *   "created_at": "2019-07-21T14:30:01.322Z",
  *   "updated_at": "2019-07-21T14:30:01.322Z"
  *  },
  *  {
  *   "id": 65,
  *   "user_id": null,
  *   "title": "Lambda",
  *   "task": "WEBPT8 TL",
  *   "notes": null,
  *   "setDate": "Tonight",
  *   "completed": null,
  *   "created_at": "2019-07-21T14:30:32.381Z",
  *   "updated_at": "2019-07-21T14:30:32.381Z"
  *  },
  *  {
  *   "id": 66,
  *   "user_id": null,
  *   "title": "Lambda",
  *   "task": "WEB20 Context Project",
  *   "notes": null,
  *   "setDate": "Tuesday",
  *   "completed": null,
  *   "created_at": "2019-07-21T14:30:48.287Z",
  *   "updated_at": "2019-07-21T14:30:48.287Z"
  *  },
  *  {
  *   "id": 67,
  *   "user_id": 42,
  *   "title": "Insomnia",
  *   "task": "Trying Wunderlist End Points, Edit Todo",
  *   "notes": null,
  *   "setDate": "Tuesday",
  *   "completed": null,
  *   "created_at": "2019-07-21T14:36:03.690Z",
  *   "updated_at": "2019-07-21T14:36:03.690Z"
  *  }
  * ]
  * 
  * @apiErrorExample {JSON} Response
  * {
  *     "message": "Todos cound not be found ${error}"
  * }
  * 
  */
/**
  * @api {get} api/todos/:id Get single todo
  * @apiVersion 1.0.0
  * @apiName GetTodo
  * @apiGroup Todos
  * @apiPermission token
  * 
  * @apiDescription This will return an object corresponding to the todo at that ID.
  * 
  * @apiParam {Number} id Todo Id passed in the request.
  * 
  * @apiSuccess (200) {Object} todo Specific Todo
  * 
  * @apiError (404) NotFound Todo with specific ID does not exist
  * @apiError (500) Failed  Todo request failed ${error}
  * 
  * @apiSuccessExample {JSON} Response
  * {
  *     "id": 67,
  *     "user_id": 42,
  *     "title": "Insomnia",
  *     "task": "Trying Wunderlist End Points, Edit Todo",
  *     "notes": null,
  *     "setDate": "Tuesday",
  *     "completed": null,
  *     "created_at": "2019-07-21T14:36:03.690Z",
  *     "updated_at": "2019-07-21T14:36:03.690Z"
  * }
  * 
  * @apiErrorExample {JSON} Response
  * {
  *   "message": "Todo with specified ID does not exist"
  * }
  */

/**
  * @api {post} api/todos/ Add Todo
  * @apiVersion 1.1.0
  * @apiName PostTodo
  * @apiGroup Todos
  * @apiPermission token
  * 
  * @apiDescription This will add a new todo, and return the created object. title, task and setDate are required fields. user_id, notes, and completed are optional fields.
  * 
  * @apiParam {String} title Title of your todo
  * @apiParam {String} task Your todo Description
  * @apiParam {String} setDate When is your todo due.
  * @apiParam {Number} user_id Current User Id
  * @apiParam {String} notes **OPTIONAL** Notes on your Todo
  * @apiParam {Boolean} completed **OPTIONAL** Is your todo completed
  * 
  * @apiSuccess (201) {Object} Todo User's Todo is returned.
  * 
  * @apiError (400) Required Your Todo needs a title, task, and setDate
  * @apiError (500) TodoCannotBeCreated Your todo could not be created ${error}
  * 
  * @apiParamExample {JSON} Request
  * {
  *    "title" : "Insomnia",
  *    "task" : "Trying Wunderlist End Points",
  *    "setDate" : "Tuesday"
  *    "user_id" : 42
  * }
  * 
  * @apiSuccessExample {JSON} Response
  * {
  *     "id": 67,
  *     "user_id": 42,
  *     "title": "Insomnia",
  *     "task": "Trying Wunderlist End Points",
  *     "notes": null,
  *     "setDate": "Tuesday",
  *     "completed": null,
  *     "created_at": "2019-07-21T14:36:03.690Z",
  *     "updated_at": "2019-07-21T14:36:03.690Z"
  * }
  * 
  * @apiErrorExample {JSON} Response
  * {
  *     "message": "Please fill out the required fields."
  * }
  */

/**
  * @api {put} api/todos/:id Edit Todo
  * @apiVersion 1.0.0
  * @apiName PutTodo
  * @apiGroup Todos
  * @apiPermission token
  * 
  * @apiDescription This will edit the todo at this ID, and return the edited object.
  * 
  * @apiParam {Number} id Todo Id passed in the request.
  * @apiParam {String} title **OPTIONAL** Title of your todo
  * @apiParam {String} task **OPTIONAL** Your todo Description
  * @apiParam {String} setDate **OPTIONAL** When is your todo due.
  * @apiParam {Number} user_id **OPTIONAL** Current User Id
  * @apiParam {String} notes **OPTIONAL** Notes on your Todo
  * @apiParam {Boolean} completed **OPTIONAL** Is your todo completed
  * 
  * @apiSuccess (200) {Object} Users edited Todo.
  * 
  * @apiError (404) NotFound Todo cannot be found
  * @apiError (500) CannotEditTodo The Todo information could not be modified ${error}.
  * 
  * @apiParamExample {JSON} Request
  * {
  *     "task" : "Trying Wunderlist End Points, Edit Todo",
  *     "user_id" : 42 
  * }
  * 
  * @apiSuccessExample {JSON} Response
  * {
  *     "id": 67,
  *     "user_id": 42,
  *     "title": "Insomnia",
  *     "task": "Trying Wunderlist End Points, Edit Todo",
  *     "notes": null,
  *     "setDate": "Tuesday",
  *     "completed": null,
  *     "created_at": "2019-07-21T14:36:03.690Z",
  *     "updated_at": "2019-07-21T14:36:03.690Z"
  * } 
  * 
  * @apiErrorExample {JSON} Response
  * {
  *   "message": "The Todo with the specified ID does not exist."
  * }
  */

/**
 * @api {delete} api/todos/:id Delete Todo
 * @apiVersion 1.1.0
 * @apiName DeleteTodo
 * @apiGroup Todos
 * @apiPermission token
 * 
 * @apiDescription This will delete the todo at this ID, and return the deleted object.
 * 
 * @apiParam {Number} id Todo Id passed in the request.
 * 
 * @apiSuccess (200) {Object} message The Todo has been successfully deleted.
 * 
 * @apiError (404) DoesNotExist The Todo with ID does not exist
 * @apiError (500) CannotDeleteTodo The todo information could not be modified ${error}
 * @apiSuccessExample {JSON} Response
  * {
  *     "message": "The Todo has been successfully deleted."
  * }
  * 
  * @apiErrorExample {JSON} Response
  * {
  *     "message": "The Todo with the specified ID does not exist."
  * }
 */
/**
 * @api {get} api/users/:id Get profile
 * @apiVersion 1.1.0
 * @apiName GetUser
 * @apiGroup Users
 * @apiPermission token
 * 
 * @apiDescription This allows a user to view their specific profile by id
 * 
 * @apiParam {Number} id User Id passed in the request.
 * 
 * @apiSuccess (200) {Object} user User Information
 * 
 * @apiError (404) NotFound User with the specific ID is not found
 * @apiError (500) Failed User request failed ${error}
 * 
 * @apiSuccessExample {JSON} Response
 * {
 *    "id": 43,
 *    "first_name": "Donald",
 *    "last_name": "Whitely",
 *    "username": "don",
 *    "created_at": "2019-07-21T14:28:45.483Z",
 *    "updated_at": "2019-07-21T14:28:45.483Z"
 * }
 * 
 * @apiErrorExample {JSON} Response
 * {
 *    "message": "User with specified ID does not exist.""
 * }
 */
/**
 * @api {put} api/users/:id Edit profile
 * @apiVersion 1.1.0
 * @apiName PutUser
 * @apiGroup Users
 * @apiPermission token
 * 
 * @apiDescription This allows a user to edit their specific profile.
 * 
 * @apiParam {Number} id User Id passed in the request.
 * @apiParam {String} username Users username  **OPTIONAL**
 * @apiParam {String} password Users password  **OPTIONAL**
 * @apiParam {String} first_name Users first name  **OPTIONAL**
 * @apiParam {String} last_name Users last name  **OPTIONAL**
 * 
 * @apiSuccess (200) {Object} user The edited user
 * 
 * @apiError (404) DoesNotExist The user with the specified ID does not exist
 * @apiError (500) CannotEditUser The user's information could not be modified ${error}.
 * 
 * @apiParamExample {JSON} Request
 * {
 *    "username": "donald"
 * }
 * 
 * @apiSuccessExample {JSON} Response
 * {
 *    "id": 43,
 *    "first_name": "Donald",
 *    "last_name": "Whitely",
 *    "username": "donald",
 *    "created_at": "2019-07-21T14:28:45.483Z",
 *    "updated_at": "2019-07-21T14:28:45.483Z"
 * }
 * 
 * @apiErrorExample {JSON} Response
 * {
 *    "message": "The user with the specified ID does not exist."
 * }
 */
/**
 * @api {delete} api/users/:id Delete profile
 * @apiVersion 1.1.0
 * @apiName DelUser
 * @apiGroup Users
 * @apiPermission token
 * 
 * @apiDescription This allows a user to delete their specific profile
 * 
 * @apiParam {Number} id User Id passed in the request.
 * 
 * @apiSuccess (200) {Object} message Success Message
 * 
 * @apiError (404) NotFound User with the specific ID is not found
 * @apiError (500) Failed User request failed ${error}
 * 
 * @apiSuccessExample {JSON} Response
 * {
 *    "message": "The user has been successfully deleted."
 * }
 * 
 * @apiErrorExample {JSON} Response
 * {
 *    "message": "User with specified ID does not exist.""
 * }
 */
