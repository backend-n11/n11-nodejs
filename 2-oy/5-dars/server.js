import http from "node:http"
import dotenv from "dotenv"
import fs from "node:fs"
import path from "node:path"
import url from "node:url"

//DOTENV
dotenv.config()

const ENV = process.env

//POST & HOSTNAME
const { PORT, HOSTNAME } = ENV

const users  = []

const myServer = http.createServer((req,res)=>{
//CRUD
//CREATE
  if (req.method === 'POST' && req.url === '/') {
    let body = [];
    req
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString()
        // users.push(body)
        users.push({ ...JSON.parse(body), id: users.length + 1 })
        res.end(body);
      });

  } else if (req.method === 'GET' && req.url === '/') {
    //READ
    res.writeHead(200, {
      "Content-type": "application/json"
    })
    res.end(JSON.stringify(users));
  } else if (req.method === 'PUT') {
    //UPDATE
    
    const parsedUrl = url.parse(req.url, true);
    const ID = parsedUrl.path.split("/")[1]
    let body = [];
    let newUserData
    req
      .on('data', chunk => {

        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        newUserData = JSON.parse(body)
        res.writeHead(200, {
          "Content-type": "application/json"
        })

        users.forEach((userData, index) => {
          if (userData.id == ID) {
            
            userData.name = newUserData.name
            userData.age = newUserData.age
            userData.gender = newUserData.gender
          }
        })
       
        
        res.write(JSON.stringify(users));
       
        res.end();
      });
  } else if (req.method === 'DELETE') {
  
    const parsedUrl = url.parse(req.url, true);
    const ID = parsedUrl.path.split("/")[1]

    

  res.writeHead(200, {
          "Content-type": "application/json"
        })

        users.forEach((userData, index) => {
          if (userData.id == ID) {
            // TODO

          }
        })
       
        
        res.write(JSON.stringify(users));
       
        res.end();

  }

//DELETE

})


myServer.listen(PORT,HOSTNAME,()=>{
		console.log(`Server is running on PORT: ${myServer.address().port}`)
})