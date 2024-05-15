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
                let salom = await query('select * from comments inner join books on comments.book_id = books.id;',[])
                res.status(201).send({status:"comentlar muvaffaqqiyatli yuborildi", data:salom.rows})

            }
        }
    } catch (error) {
        
    }
}