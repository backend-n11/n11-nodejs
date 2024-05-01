import http from "node:http"
import dotenv from "dotenv"
import fs from "node:fs"
import path from "node:path"

//DOTENV

dotenv.config()
const ENV = process.env
//POST & HOSTNAME
const {
    PORT,
    HOSTNAME
} = ENV
const __dirname =
    import.meta.dirname
const __filename =
    import.meta.filename
const htmlFilePath = path.join(__dirname, "public", "index.html")
const cssFilePath = path.join(__dirname, "public", "style.css")
const jsFilePath = path.join(__dirname, "public", "script.js")
// console.log(__dirname ," \n" , __filename)
const readFile = (path) => {
    const data = fs.readFileSync(path)
    return data
}

const server = http.createServer((req, res) => {
    console.log(`
				>> METHOD ${req.method}
				>> URL ${req.url}
	`)

    if (req.url == "/") {
        res.writeHead(200, {
            "Content-type": "text/html"
        })
        const html = readFile(htmlFilePath)
        res.write(html)
        return res.end()
    }

    if (req.url == "/public/style.css") {
        console.log("$$$$$$$$$$$$$$$$$$$$$")
        res.writeHead(200, {
            "Content-type": "text/css"
        })
        const css = readFile(cssFilePath)
        res.write(css)
        return res.end()
    }
    if (req.url == "/public/script.js") {
        console.log("$$$$$$$$$$$$$$$$$$$$$")
        res.writeHead(200, {
            "Content-type": "text/javascript"
        })
        const js = readFile(jsFilePath)
        res.write(js)
        return res.end()
    }
    // 	console.log(">>>HEADERS")
    // 	console.log(req.headers)
    // res.write(JSON.stringify({
    // 	"name":"Azizbek"
    // }))
})
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on PORT: ${server.address().port}`)
})
