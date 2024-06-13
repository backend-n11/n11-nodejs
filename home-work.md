### REST API Talablari va Tasvirlangan Ma'lumotlar

#### Ma'lumotlar Modellari

**Xona Modeli (`Room`)**
- **name** (string) - Xonaning nomi.
- **floor** (integer) - Xonaning joylashgan qavati.
- **seats** (integer) - Xonadagi o'rindiqlar soni.

**Foydalanuvchi Modeli (`User`)**
- **username** (string) - Foydalanuvchi nomi, unikal bo'lishi kerak.
- **password** (string) - Foydalanuvchi paroli, shaxtalangan.
- **role** (string) - Foydalanuvchi roli (masalan, 'admin', 'user').

#### API Endpointlar

1. **Foydalanuvchi ro'yxatdan o'tish (Sign Up)**

   - **Endpoint**: `POST /auth/signup`
   - **Kiruvchi ma'lumotlar**:
     ```json
     {
       "username": "example",
       "password": "password123",
       "role": "user" // yoki "admin"
     }
     ```
   - **Qaytadigan ma'lumotlar**:
     ```json
     {
       "id": 1,
       "username": "example",
       "role": "user"
     }
     ```

2. **Foydalanuvchi tizimga kirish (Sign In)**

   - **Endpoint**: `POST /auth/signin`
   - **Kiruvchi ma'lumotlar**:
     ```json
     {
       "username": "example",
       "password": "password123"
     }
     ```
   - **Qaytadigan ma'lumotlar**:
     ```json
     {
       "accessToken": "access-token",
       "refreshToken": "refresh-token"
     }
     ```

3. **Foydalanuvchi ma'lumotlarini olish (Get Current User)**

   - **Endpoint**: `GET /auth/me`
   - **Talab**: `Authorization: Bearer <access-token>`
   - **Qaytadigan ma'lumotlar**:
     ```json
     {
       "id": 1,
       "username": "example",
       "role": "user"
     }
     ```

4. **Barcha xonalarni olish (Get All Rooms)**

   - **Endpoint**: `GET /rooms`
   - **Talab**: `Authorization: Bearer <access-token>` 
   - **Qaytadigan ma'lumotlar**:
     ```json
     [
       {
         "id": 1,
         "name": "Autodesk",
         "floor": 2,
         "seats": 17
       },
       {
         "id": 2,
         "name": "Yandex",
         "floor": 2,
         "seats": 20
       }
     ]
     ```

5. **ID bo'yicha xona olish (Get Room by ID)**

   - **Endpoint**: `GET /rooms/:id`
   - **Talab**: `Authorization: Bearer <access-token>`
   - **Qaytadigan ma'lumotlar**:
     ```json
     {
       "id": 1,
       "name": "Autodesk",
       "floor": 2,
       "seats": 17
     }
     ```

6. **Yangi xona qo'shish (Create Room)**

   - **Endpoint**: `POST /rooms`
   - **Talab**: `Authorization: Bearer <access-token>` + `admin` roli talab qilinadi.
   - **Kiruvchi ma'lumotlar**:
     ```json
     {
       "name": "New Room",
       "floor": 1,
       "seats": 10
     }
     ```
   - **Qaytadigan ma'lumotlar**:
     ```json
     {
       "id": 3,
       "name": "New Room",
       "floor": 1,
       "seats": 10
     }
     ```

7. **Xonani yangilash (Update Room)**

   - **Endpoint**: `PUT /rooms/:id`
   - **Talab**: `Authorization: Bearer <access-token>` + `admin` roli talab qilinadi.
   - **Kiruvchi ma'lumotlar**:
     ```json
     {
       "name": "Updated Room",
       "floor": 2,
       "seats": 25
     }
     ```
   - **Qaytadigan ma'lumotlar**:
     ```json
     {
       "id": 1,
       "name": "Updated Room",
       "floor": 2,
       "seats": 25
     }
     ```

8. **Xonani o'chirish (Delete Room)**

   - **Endpoint**: `DELETE /rooms/:id`
   - **Talab**: `Authorization: Bearer <access-token>` + `admin` roli talab qilinadi.
   - **Qaytadigan ma'lumotlar**: 
     ```json
     {
       "message": "Room deleted successfully"
     }
     ```

#### Access Token va Refresh Token

- **Access Token**:
  - Kirish tokeni foydalanuvchini autentifikatsiya qilish uchun ishlatiladi.
  - **Yaroqlilik muddati**: odatda qisqa (15-30 daqiqa).
  - **Talab**: Har bir himoyalangan endpointda `Authorization: Bearer <access-token>` ko'rsatilishi kerak.

- **Refresh Token**:
  - Kirish tokeni muddati tugaganda yangilash uchun ishlatiladi.
  - **Yaroqlilik muddati**: uzoqroq (bir necha kun yoki haftalar).
  - **Talab**: `POST /auth/refresh-token` endpointida yangilash so'rovi yuboriladi.

**Endpoint**: `POST /auth/refresh-token`
  - **Kiruvchi ma'lumotlar**:
    ```json
    {
      "refreshToken": "refresh-token"
    }
    ```
  - **Qaytadigan ma'lumotlar**:
    ```json
    {
      "accessToken": "new-access-token",
      "refreshToken": "new-refresh-token"
    }
    ```

#### Role-based Authentication Guards

**Role-based himoyani amalga oshirish** uchun har bir endpointda quyidagi elementlar hisobga olinadi:

1. **Role tekshiruvi**:
   - Foydalanuvchining `role` ma'lumotini JWT dan olingan foydalanuvchi ma'lumotlari orqali tekshirish.
   - `admin` roliga ega bo'lgan foydalanuvchilargina ma'lumotlarni yaratish, yangilash va o'chirish huquqiga ega bo'lishi kerak.

**Misol**: `admin` roli uchun middleware

```json
{
  "role": "admin",
  "message": "Access denied. Admins only."
}
```

#### Hujjatlangan Ish Tartibi

1. **API'ga kirish (Sign Up)**
   - **Tavsif**: Yangi foydalanuvchi hisobini yaratadi.
   - **Parametrlar**: `username`, `password`, `role`.

2. **API orqali tizimga kirish (Sign In)**
   - **Tavsif**: Foydalanuvchi tizimga kiradi va token oladi.
   - **Parametrlar**: `username`, `password`.

3. **Foydalanuvchi ma'lumotlarini olish**
   - **Tavsif**: Token orqali foydalanuvchi ma'lumotlarini oladi.
   - **Token tekshiruvi**: `Authorization` sarlavhasida token yuborilishi kerak.

4. **Xonalar bilan ishlash (CRUD)**:
   - **Xonalarni ko'rish**: Barcha foydalanuvchilar.
   - **Xona qo'shish**: Faqat `admin`.
   - **Xonani yangilash**: Faqat `admin`.
   - **Xonani o'chirish**: Faqat `admin`.

### Xulosa

Yuqoridagi tavsiflangan ma'lumotlar asosida REST API foydalanuvchi autentifikatsiyasi va xonalar boshqaruvi uchun xavfsiz va izchil yondashuvni ta'minlaydi. Endpointlar, kirish va qaytish formatlari, shuningdek autentifikatsiya va rol asosida himoya qilish aniq belgilanadi, bu API’ni xavfsiz va mustahkam qiladi.
