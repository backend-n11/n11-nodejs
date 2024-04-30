import http from "node:http"
import dotenv from "dotenv"
import fs from "node:fs"
import path from "node:path"
import url from "node:url"

let todos = [{ id: 1, title: 'Sample ToDo' }]; // Sample initial data

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/todos' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
    } else if (req.url === '/todos' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const todo = JSON.parse(body);
            todo.id = todos.length + 1; // simple ID assignment
            todos.push(todo);
            res.writeHead(201);
            res.end();
        });
    } else if (req.url.startsWith('/todos/') && req.method === 'DELETE') {
        const id = parseInt(req.url.split('/')[2]);
        todos = todos.filter(todo => todo.id !== id);
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
