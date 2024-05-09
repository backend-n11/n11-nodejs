-- Comment  ---
-- C

1.  mydatabase ni yaratish
2.  mydatabase ga connect qilish
3.  postgres ga qaytish | connect qilish
4.  mydatabase ni drop qilish

-- database yaratish
CREATE DATABASE mydatabase;
 

-- connect qilish
--\c mydatabase
--\c postgres

-- databaseni o'chirish
DROP DATABASE mydatabase;


-- table yaratish
CREATE TABLE user(
  id INT, 
  name VARCHAR(50)
)


CREATE TABLE  users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);


-- TABLE YARATISH 

INSERT INTO users (name) VALUES ('AZIZBEK');

INSERT INTO users (name) VALUES ('AZIZBEK'), ('uMIDJON')
 





-- TOPSHIRIQ
1. my_database degan database yarting
2. Students table yarting  '
  id, 
  first_name, 
  last_name , 
  email,   -- uique
  password' 
lari bo'lsin




