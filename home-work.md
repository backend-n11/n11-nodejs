## ERP Express - REST API Server with Roles and Guards

REST API serverining arxitekturasi va qanday ma'lumotlar qabul qilib, qanday ma'lumotlar qaytarishi haqida quyidagi ko'rsatmalarni taqdim etaman. Bu arxitektura diagrammasi va API spetsifikatsiyasi serverning to'liq ishlash tartibini tushunish va imtihon uchun tayyorlanish uchun yordam beradi.

### Arxitektura Diagrammasi

REST API serverining arxitekturasi quyidagi komponentlarni o'z ichiga oladi:

1. **Client**: Foydalanuvchi interfeysi (masalan, veb brauzer yoki mobil ilova) API bilan muloqot qiladi.
2. **API Server (Express)**: HTTP so'rovlarini qabul qiladi va qayta ishlaydi.
3. **Authentication Middleware**: So'rovlar autentifikatsiya va avtorizatsiya qilinishi uchun Bearer tokenlarini tekshiradi.
4. **RoleGuard Middleware**: Foydalanuvchi rolini tekshiradi va mos ravishda kirish huquqlarini boshqaradi.
5. **Controllers**: So'rovlarni qayta ishlaydi va tegishli javoblarni qaytaradi.
6. **Models (MongoDB)**: Ma'lumotlar bazasi bilan o'zaro aloqada bo'lib, ma'lumotlarni saqlaydi va oladi.
7. **Services**: Fayllarni yuklash va yuklab olish, kurs va foydalanuvchi kurslarini boshqarish kabi qo'shimcha funksiyalarni bajaradi.

### API Spetsifikatsiyasi

Quyida har bir API endpoint uchun qabul qilinadigan va qaytariladigan ma'lumotlar tafsilotlari keltirilgan.

#### AUTH

1. **/signup [POST]**
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "email": "string",
       "password": "string",
       "role": "user" // or "admin" or "superadmin"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "User created",
       "userId": "string",
       "otpSent": true
     }
     ```

2. **/verify-otp [POST]**
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "userId": "string",
       "otp": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "OTP verified, account activated"
     }
     ```

3. **/signin [POST]**
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "accessToken": "string",
       "refreshToken": "string"
     }
     ```

4. **/getMe [GET]**
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "email": "string",
       "role": "string",
       "createdAt": "date"
     }
     ```

5. **/logout [GET]**
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

6. **/send-otp [POST]**
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "email": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "OTP sent to email"
     }
     ```

#### FILE

1. **/file/upload [POST]**
   - **RoleGuard**: Admin or Super Admin
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
   - **RoleGuard**: User, Admin, or Super Admin
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
   - **RoleGuard**: Super Admin
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
   - **RoleGuard**: User, Admin, or Super Admin
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
   - **RoleGuard**: User, Admin, or Super Admin
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:** Fayl

6. **/file/:id [PUT]**
   - **RoleGuard**: Admin or Super Admin
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
   - **RoleGuard**: Admin or Super Admin
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
   - **RoleGuard**: User, Admin, or Super Admin
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
   - **RoleGuard**: Super Admin
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
   - **RoleGuard**: Admin or Super Admin
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
   - **RoleGuard**: User, Admin, or Super Admin
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
   - **RoleGuard**: Admin or Super Admin
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "title":

 "string",
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
   - **RoleGuard**: User, Admin, or Super Admin
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
   - **RoleGuard**: Super Admin
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
   - **RoleGuard**: Admin or Super Admin
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "userid":"string",
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
   - **RoleGuard**: User, Admin, or Super Admin
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
   - **RoleGuard**: Super Admin
   - **Header:**
     ```http
     Authorization: Bearer {token}
     ```
   - **Qaytariladigan ma'lumotlar:**
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
 |  RoleGuard       |         |    Services     |
 +------------------+         +-----------------+
          |                            |
          v                            v
 +------------------+         +-----------------+
 |    Models        |         |                 |
 |   (MongoDB)      |         |                 |
 +------------------+         +-----------------+
```

### Xulosa

Ushbu arxitektura va API spetsifikatsiyasi yordamida imtihon uchun REST API serverini yaratish jarayonini yaxshiroq tushunishingiz va tayyorlanishingiz mumkin. Har bir komponentning o'z vazifasi bor va ular bir-biriga bog'lanib, to'liq funksional serverni tashkil qiladi.

### Qo'shimcha Talablar

- **OTP orqali faollashtirish**: Nodemailer yordamida foydalanuvchilarga OTP (Bir martalik parol) jo'natish va foydalanuvchining statusini "deactivated"dan "active"ga o'tkazish.
- **Guardlar**: Har bir endpoint uchun OTP, admin va super admin harakatlarini himoya qilish uchun guardlar qo'shish.
- **Login qilishda tokenlar**: Foydalanuvchi tizimga kirganda access token va refresh token qaytarilishi kerak.
- **RoleGuard qo'shish**: Foydalanuvchi roliga qarab kirish huquqlarini boshqarish.

#### AUTH Qo'shimcha Spetsifikatsiya

1. **/send-otp [POST]**
   - **Qabul qilinadigan ma'lumotlar:**
     ```json
     {
       "email": "string"
     }
     ```
   - **Qaytariladigan ma'lumotlar:**
     ```json
     {
       "message": "OTP sent to email"
     }
     ```

#### RoleGuard

1. **RoleGuard**: Foydalanuvchining rolini tekshiradi va mos ravishda kirish huquqlarini boshqaradi.

### RoleGuard Implementation

RoleGuard middlewareni yaratish uchun quyidagi koddan foydalanishingiz mumkin:

```javascript
const roleGuard = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
};

// Misol uchun foydalanish:
/*
app.post('/course', roleGuard(['admin', 'superadmin']), courseController.createCourse);
app.get('/course', roleGuard(['user', 'admin', 'superadmin']), courseController.getCourses);
app.put('/course/:id', roleGuard(['admin', 'superadmin']), courseController.updateCourse);
app.delete('/course/:id', roleGuard(['superadmin']), courseController.deleteCourse);
*/
```

Bu ko'rsatmalar yordamida ERP Express loyihangizni muvaffaqiyatli amalga oshirishingiz mumkin.