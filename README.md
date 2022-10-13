# oneForce_Nodejs_Assesment



## Project Structure
```
│   .gitignore
│   index.js
│   package-lock.json
│   package.json
│
├───task1
│       cache.json
│       controller_task1.js
│       task1_router.js
│
├───task2
│       task-2-script.js
│
└───task3
        controller_task3.js
        task3_router.js
        user_model.js
 ```
 
 
 ## Create Project
1. ``` git clone https://github.com/MitanshGor/oneForce_Nodejs_Assesment.git ```
2. ``` npm install ```
3. ``` nodemon index.js ```


## The project contains 3 Tasks.

![image](https://user-images.githubusercontent.com/76811812/195692279-4409cb7b-5c26-4e51-9bb3-a89486761f5e.png)

- Task 1 is run using api  => ``` localhost:5000/task-1?number=20 ```
- Task 2 is run using given command  => ``` node task2/task-2-scripts.js ```
- Task 3 is run using 3 apis
```
  - fetch user by id : GET : localhost:5000/users?id={id}
  - fetch all users  : GET : localhost:5000/users
  - create new user  : POST : localhost:5000/users
  
  body for post request : 
  {
    "first_name" : "Mitansh",
    "last_name" : "Gor",
    "email" : "gormit@gmail.com",
    "avatar" : "link_to_url",
    "job_title" : "boss"
}

```
