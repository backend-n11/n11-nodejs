import query from "../utils/postgres.js";
import bcrypt  from 'bcrypt'

export const comments = async function(req, res){
    try {
        let {text, book_id, user_id} = req.body
        if(!text || !book_id || !user_id){
            res.status(400).send("malumotlar chala kiritilgan")
        } else {
            let result = await query('INSERT INTO comments(text, created_at, book_id, user_id) values($1, current_timestamp, $2, $3)',[text, book_id, user_id])
            if(result.rowCount>0){
                let salom = await query('select books.title, array_agg(comments.text) as comments from books inner join comments on comments.book_id = books.id group by books.title;',[])
                res.status(201).json({jsonstatus:"comentlar muvaffaqqiyatli yuborildi", data:salom.rows})

            }
        }
    } catch (error) {
        
    }
}