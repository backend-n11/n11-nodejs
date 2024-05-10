-- role_user type ni yaratib olamiz o'zimiz uchun
CREATE TYPE role_user AS ENUM ('user', 'admin');

-- users table ni yaratib olamiz
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    login VARCHAR(250) NOT NULL ,
    password TEXT NOT NULL ,
    full_name VARCHAR(250) NOT NULL ,
    birthdate DATE NOT NULL,
    role role_user NOT NULL
);

-- files tableni yaratib olamiz
CREATE TABLE IF NOT EXISTS files(
    id SERIAL PRIMARY KEY,
    original_name VARCHAR(300) NOT NULL ,
    path VARCHAR(350) NOT NULL ,
    size INT NOT NULL ,
    mime_type VARCHAR(251) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- DROP TABLE users CASCADE ;
-- DROP TABLE user_files;
-- DROP TABLE files;


ALTER TABLE users
    ADD COLUMN file_id INT default null;
ALTER TABLE users
    ADD CONSTRAINT fk_file_id FOREIGN KEY (file_id) REFERENCES files(id);




-- user files tableni yaratib FOREIGN KEY qilamiz
CREATE TABLE IF NOT EXISTS user_files(
    if SERIAL PRIMARY KEY ,
    user_id INT NOT NULL UNIQUE ,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id),
    file_id INT NOT NULL UNIQUE ,
    CONSTRAINT fk_file_id FOREIGN KEY (file_id) REFERENCES files(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- TESTS tableni yaratib olamiz
CREATE TABLE IF NOT EXISTS tests(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(250) NOT NULL ,
    description TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Question table ni yaratib olamiz
CREATE TABLE IF NOT EXISTS questions(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(250) NOT NULL ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- test questions table ni yaratib olamiz
CREATE TABLE IF NOT EXISTS test_questions(
    id SERIAL PRIMARY KEY,
    test_id INT NOT NULL ,
    CONSTRAINT fk_test_id FOREIGN KEY (test_id) REFERENCES tests(id),
    question_id INT NOT NULL ,
    CONSTRAINT fk_question_id FOREIGN KEY (question_id) REFERENCES questions(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Variantlar tablesini yaratib olamiz
CREATE TABLE IF NOT EXISTS variants(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(250) NOT NULL ,
    description TEXT NOT NULL ,
    question_id INT NOT NULL ,
    CONSTRAINT fk_question_id FOREIGN KEY (question_id) REFERENCES questions(id),
    is_correct BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User yechgan testlar table ni yaratib olamiz
CREATE TABLE IF NOT EXISTS user_passed_tests(
    id SERIAL PRIMARY KEY ,
    user_id INT NOT NULL ,
    test_id INT NOT NULL ,
    total_questions INT NOT NULL ,
    passed_questions INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_test_id FOREIGN KEY (test_id) REFERENCES tests(id)
);




SELECT row_to_json(t.*) AS tests, row_to_json(q.*) AS questions
FROM tests t INNER JOIN test_questions tq ON t.id = tq.test_id INNER JOIN questions q ON tq.question_id = q.id;


SELECT u.id, u.login, u.password, u.full_name, u.birthdate, row_to_json(f) AS file
FROM users u  INNER JOIN files f ON u.file_id = f.id;


SELECT t.title, row_to_json(q) AS question
FROM tests t  INNER JOIN questions q ON t.id = q.id;


SELECT t.title AS test, row_to_json(q.*) AS question
FROM tests t INNER JOIN test_questions tq ON t.id = tq.test_id INNER JOIN questions q ON tq.question_id = q.id;


SELECT q.title AS question, row_to_json(t.*) AS test
FROM questions q INNER JOIN test_questions tq ON q.id = tq.question_id INNER JOIN tests t ON tq.test_id = t.id;
