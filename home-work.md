REST API serverining arxitekturasi va qanday ma'lumotlar qabul qilib, qanday ma'lumotlar qaytarishi haqida quyidagi ko'rsatmalarni taqdim etaman. Bu arxitektura diagrammasi va API spetsifikatsiyasi serverning to'liq ishlash tartibini tushunish va imtihon uchun tayyorlanish uchun yordam beradi.

### Arxitektura Diagrammasi

REST API serverining arxitekturasi quyidagi komponentlarni o'z ichiga oladi:

1. **Client**: Foydalanuvchi interfeysi (masalan, veb brauzer yoki mobil ilova) API bilan muloqot qiladi.
2. **API Server (Express)**: HTTP so'rovlarini qabul qiladi va qayta ishlaydi.
3. **Authentication Middleware**: So'rovlar autentifikatsiya va avtorizatsiya qilinishi uchun Bearer tokenlarini tekshiradi.
4. **Controllers**: So'rovlarni qayta ishlaydi va tegishli javoblarni qaytaradi.
5. **Models (MongoDB)**: Ma'lumotlar bazasi bilan o'zaro aloqada bo'lib, ma'lumotlarni saqlaydi va oladi.
6. **Services**: Fayllarni yuklash va yuklab olish, kurs va foydalanuvchi kurslarini boshqarish kabi qo'shimcha funksiyalarni bajaradi.

### API Spetsifikatsiyasi

Quyida har bir API endpoint uchun qabul qilinadigan va qaytariladigan ma'lumotlar tafsilotlari keltirilgan.

#### AUTH

1. **/signup [POST]**
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "login": "string",
       "password": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "User created"
     }
     ```

2. **/signin [POST]**
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "login": "string",
       "password": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "accessToken": "string",
       refreshToken: string
     }
     ```

3. **/getMe [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "login": "string",
       "createdAt": "date"
     }
     ```

4. **/logout [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "Logout successful"
     }
     ```

#### FILE

1. **/file/upload [POST]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Form Data:**
     - `file`: Fayl
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "File uploaded",
       "fileId": "string"
     }
     ```

2. **/file/list [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     [
       {
         "id": "string",
         "filename": "string",
         "createdAt": "date"
       },
       {
         "id": "string",
         "filename": "string",
         "createdAt": "date"
       }
     ]
     ```

3. **/file/:id [DELETE]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "File deleted"
     }
     ```

4. **/file/:id [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "id": "string",
       "filename": "string",
       "filepath": "string",
       "createdAt": "date"
     }
     ```

5. **/file/download/:id [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:** Fayl

6. **/file/:id [PUT]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "filename": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "File updated"
     }
     ```

#### COURSE FILE

1. **/set-course-file [POST]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "fileId": "string",
       "courseId": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "File set for course"
     }
     ```

2. **/file/:course [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     [
       {
         "id": "string",
         "filename": "string",
         "createdAt": "date"
       }
     ]
     ```

3. **/file/:id/course/:courseId [DELETE]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "Course file deleted"
     }
     ```

#### COURSE

1. **/course [POST]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "title": "string",
       "description": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "Course added",
       "courseId": "string"
     }
     ```

2. **/course/all [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     [
       {
         "id": "string",
         "title": "string",
         "description": "string",
         "createdAt": "date"
       }
     ]
     ```

3. **/course/:id [PUT]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "title": "string",
       "description": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "Course updated"
     }
     ```

4. **/course/:id [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "id": "string",
       "title": "string",
       "description": "string",
       "createdAt": "date"
     }
     ```

5. **/course/:id [DELETE]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "Course deleted"
     }
     ```

#### USER COURSE

1. **/set-user-course [POST]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "courseId": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "Course set for user"
     }
     ```

2. **/course/:userId [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     [
       {
         "id": "string",
         "title": "string",
         "description": "string",
         "createdAt": "date"
       }
     ]
     ```

3. **/course/:id/user/:userId [DELETE]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:

**
     ```json
     {
       "message": "User course deleted"
     }
     ```

### Diagramma

Quyida API serveri arxitekturasini vizual ko'rsatib beruvchi diagrammani ko'rishingiz mumkin:

```plaintext
+------------------+          +-----------------+
|    Client        |<-------->|   API Server    |
| (Browser/Mobile) |          |   (Express)     |
+------------------+          +-----------------+
          |                            |
          v                            v
 +------------------+         +-----------------+
 | Authentication   |         |    Controllers  |
 |   Middleware     |         |                 |
 +------------------+         +-----------------+
          |                            |
          v                            v
 +------------------+         +-----------------+
 |    Models        |         |    Services     |
 |   (MongoDB)      |         |  (File Handling)|
 +------------------+         +-----------------+
```

### Xulosa

Ushbu arxitektura va API spetsifikatsiyasi yordamida imtihon uchun REST API serverini yaratish jarayonini yaxshiroq tushunishingiz va tayyorlanishingiz mumkin. Har bir komponentning o'z vazifasi bor va ular bir-biriga bog'lanib, to'liq funksional serverni tashkil qiladi.
