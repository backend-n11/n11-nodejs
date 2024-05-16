-- USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email  VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL CHECK(LENGTH(password) > 5),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);

-- books
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author  VARCHAR(100) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  publication_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


-- comments
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id int,
  book_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);
