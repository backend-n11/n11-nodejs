import pg from "pg"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config()


const { Pool } = pg

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`

class Database {
  constructor() {
    this.client = new Pool({
      connectionString,
    })
    // this.client.query.on('error', (err) => {
    //   console.error(err.stack)
    // })
  }

  async create(name, email, password) {
    try {
      const inserUser = `
        INSERT INTO users (name, password, email)
        VALUES ($1, $2, $3)
        returning *;
      `
      
      const hash = await this.hashFunc(password)
      const res = await this.client.query(inserUser, [name, hash, email])
      return res.rows
    } catch (error) {
      console.error(error.name)
      return false
    }
  }

  update() { }

  findAll() { }
  async findByEmail(email) {
    const findQuery = `
    SELECT * FROM users where email = $1
  `
    const res = await this.client.query(findQuery, [email])
    return res.rows[0]
  }

  findById(id) {
    return id
  }

  async hashFunc(password) {
    const saltRounds = 10
    const salt = await bcrypt.genSaltSync(saltRounds)
    const hash = await bcrypt.hashSync(password, salt)
    return hash
  }
  async compareFunc(hash) {
    const isEqual = await bcrypt.compareSync(user.password, hash)
    return isEqual
  }

  async createTables() {
    try {
      this.client.query(`
      CREATE TABLE "users"(
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);

ALTER TABLE
    "users" ADD PRIMARY KEY("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");
ALTER TABLE
    "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");


CREATE TABLE "blogs"(
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "posted_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" BIGINT NOT NULL
);
ALTER TABLE
    "blogs" ADD PRIMARY KEY("id");


CREATE TABLE "comments"(
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "book_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL
);
ALTER TABLE
    "comments" ADD PRIMARY KEY("id");


CREATE TABLE "blogs_comments"(
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blogs_id" BIGINT NOT NULL,
    "users_id" BIGINT NOT NULL
);
ALTER TABLE
    "blogs_comments" ADD PRIMARY KEY("id");


CREATE TABLE "books"(
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "publicate_date" VARCHAR(255) NOT NULL,
    "genre" VARCHAR(255) NOT NULL,
    "user_id" BIGINT NOT NULL
);
ALTER TABLE
    "books" ADD PRIMARY KEY("id");


CREATE TABLE "photos"(
    "id" SERIAL NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "book_id" BIGINT NOT NULL,
    "uploaded_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE
    "photos" ADD PRIMARY KEY("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_book_id_foreign" FOREIGN KEY("book_id") REFERENCES "books"("id");
ALTER TABLE
    "books" ADD CONSTRAINT "books_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "blogs_comments" ADD CONSTRAINT "blogs_comments_blogs_id_foreign" FOREIGN KEY("blogs_id") REFERENCES "blogs"("id");
ALTER TABLE
    "blogs_comments" ADD CONSTRAINT "blogs_comments_users_id_foreign" FOREIGN KEY("users_id") REFERENCES "users"("id");
ALTER TABLE
    "blogs" ADD CONSTRAINT "blogs_author_id_foreign" FOREIGN KEY("author_id") REFERENCES "users"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "photos" ADD CONSTRAINT "photos_book_id_foreign" FOREIGN KEY("book_id") REFERENCES "books"("id");


INSERT INTO users(username, password, email, created_at) values
    ('oybekjon', '$2b$10$7OS9DTOgmn5RG3WhwStT/.m6QjaziVoc6Sq8gJrNMJtBKMM8dhC5W', 'hello@gmail.com', '2024-05-14 21:28:30.163144+05'),
    ('shavkatjon', '$2b$10$RDB/NlszTU0WJarUjMS8auszoAjUSTR49VpgNtuaW/WVPdqxt0jiG', 'xayr@gmail.com', '2024-05-14 21:28:30.163144+05'),
    ('asrorjon', '$2b$10$hsigzdvzou5gbSL6bgCZjuwiSZVqlJ6li0ncaK71o8ChvvNZcQU.K', 'asrorjon@gmail.com', '2024-05-14 21:28:30.163144+05');

INSERT INTO 'books'('id', 'title', 'author', 'publicate_date', 'genre', 'user_id', ) values
    ()
    
      `)
    } catch (err) {
      console.log("Error creating table!")
    }
  }
}
export default new Database()
