# Blog website

## Users
  ### Regiter
  ```md
    id: number,
    username: string unique min-3,
    password: string min-5,
    fullName: string min-10 optional,
    age:number min min-10,
    email:string,
    gender:string "male"/"female" optinal,
  ```


 ### Login
 ```md
   username | email : string,
   password: string,

 ```
## Blog
  ```md
  id: string, 
  tittle: string,
  slug: string,
  content: string,
  tags: [string, string],
  ```

# User 
   1. REGISTER - POST
   2. LOGIN - POST
   3. PROFILE - GET, localhost:3000/username | localhost:3000/email |localhost:3000/is 

# BLOG

  1. CREATE - POST localhost:3000/blog
  2. READ - GET  localhost:3000/blog
  3. UPDATE - PUT localhost:3000/blog/id
  4. DELETE - DELETE localhost:3000/blog/id


# Database

1. database/users.json
2. database/blogs.json
