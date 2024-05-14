---
id: Course.md
date: "{{date}}"
type:
  - lesson
  - kelmaganlar
  - yaxshi qatnashganlar
title: "{{title}}"
---

### Umumiy Talablar:
1. **Backend**: Node.js va Express framework.
2. **Ma'lumotlar Bazasi**: PostgreSQL.
3. **Authentication**:  ro'yxatdan o'tish va tizimga kirish.
4. **API**: RESTful API.

### Ma'lumotlar Bazasi Jadvallari:
1. **users**:
   - `id` (primary key)
   - `username`
   - `email`
   - `password`
   - `created_at`

2. **books**:
   - `id` (primary key)
   - `title`
   - `author`
   - `publication_date`
   - `genre`
   - `user_id` (foreign key from `users`)
3. **comments**:
   - `id` (primary key)
   - `text`
   - `created_at`
   - `book_id` (foreign key from `books`)
   - `user_id` (foreign key from `users`)
4. **photos**:
   - `id` (primary key)
   - `url`
   - `book_id` (foreign key from `books`)
   - `uploaded_at`

### API Endpoints:
1. **User Authentication**:
   - `POST /register`: Ro'yxatdan o'tish uchun. Foydalanuvchi nomi, email va parolni qabul qiladi.
   - `POST /login`: Tizimga kirish uchun. Email va parolni tekshirib.
2. **Books CRUD**:
   - `POST /books`: Ro'yxatdan o'tgan foydalanuvchi tomonidan yangi kitob qo'shish.
   - `GET /books`: Barcha kitoblarni ko'rish.
   - `GET /books/{id}`: Bitta kitob haqida ma'lumot.
   - `PUT /books/{id}`: Kitobni yangilash.
   - `DELETE /books/{id}`: Kitobni o'chirish.
==BONUS==
1. **Comments**:
   - `POST /books/{book_id}/comments`: Kitobga izoh qoldirish.
   - `GET /books/{book_id}/comments`: Kitobga qoldirilgan barcha izohlarni ko'rish.
2. **Photos**:
   - `POST /books/{book_id}/photos`: Kitobga foto qo'shish. url
   - `GET /books/{book_id}/photos`: Kitobga qo'shilgan barcha fotosuratlarni ko'rish.





# POSTMANDAN foydalaning!