import db from "../database/auth.js"


export const createBlog = async (req, res) => {
    try {
        const { title, content, author_id } = req.body

        if(!title || !content){
            res.status(400).send({
                body: "Bad request"
            })
        }
        const response = await db.createBlog(title, content, author_id)

        if(!response) {
            res.status(400).send("Insert error")
        }
        res.send(response)


    } catch (err) {
        console.log(err.detail)
    }
}