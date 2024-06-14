CREATE TABLE "Users"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) CHECK
        ("role" IN('(' admin '', '' USER ')')) NOT NULL DEFAULT '' USER ''
);
ALTER TABLE
    "Users" ADD PRIMARY KEY("id");
ALTER TABLE
    "Users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");
CREATE TABLE "payedBooks"(
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "bookid" INTEGER NOT NULL
);
ALTER TABLE
    "payedBooks" ADD PRIMARY KEY("id");

    CREATE TABLE "books"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "genre" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "price" DECIMAL(8, 2) NOT NULL
);

ALTER TABLE
    "books" ADD PRIMARY KEY("id");
ALTER TABLE
    "payedBooks" ADD CONSTRAINT "payedbooks_userid_foreign" FOREIGN KEY("userid") REFERENCES "Users"("id");
ALTER TABLE
    "payedBooks" ADD CONSTRAINT "payedbooks_bookid_foreign" FOREIGN KEY("bookid") REFERENCES "books"("id");
