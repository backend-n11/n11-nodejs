### Talablar va Funksionallik

#### 1. **Xonalar va foydalanuvchilar haqida ma'lumotlar**

- **Room**:
  - `id`: integer, primary key
  - `name`: string, not null
  - `floor`: integer, not null
  - `seats`: integer, not null

- **User**:
  - `id`: integer, primary key
  - `username`: string, not null, unique
  - `password`: string, not null (hashed)
  - `role`: string, not null (e.g., "user", "admin")

#### 2. **API Endpoints va Ma'lumotlar**

##### Autentifikatsiya:

- **POST /signup**:
  - Kiruvchi: `{ "username": "user1", "password": "pass123", "role": "user" }`
  - Chiquvchi: `{ "id": 1, "username": "user1", "role": "user" }`

- **POST /signin**:
  - Kiruvchi: `{ "username": "user1", "password": "pass123" }`
  - Chiquvchi: `{ "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }`

- **POST /token** (Access tokenni yangilash):
  - Kiruvchi: `{ "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }`
  - Chiquvchi: `{ "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }`

- **GET /me** (Hozirgi foydalanuvchini olish):
  - Kiruvchi: `Bearer <accessToken>`
  - Chiquvchi: `{ "id": 1, "username": "user1", "role": "user" }`

##### Xonalar:

- **GET /rooms**:
  - Kiruvchi: `Bearer <accessToken>`
  - Chiquvchi: 
    ```json
    [
      { "id": 1, "name": "Autodesk", "floor": 2, "seats": 17 },
      { "id": 2, "name": "Yandex", "floor": 2, "seats": 20 }
    ]
    ```

- **GET /rooms/:id**:
  - Kiruvchi: `Bearer <accessToken>`
  - Chiquvchi: 
    ```json
    { "id": 1, "name": "Autodesk", "floor": 2, "seats": 17 }
    ```

- **POST /rooms** (faqat admin):
  - Kiruvchi: `Bearer <accessToken>`
  - Chiquvchi: `{ "id": 3, "name": "Google", "floor": 3, "seats": 30 }`

- **PUT /rooms/:id** (faqat admin):
  - Kiruvchi: `Bearer <accessToken>`
  - Chiquvchi: `{ "id": 1, "name": "Autodesk", "floor": 2, "seats": 18 }`

- **DELETE /rooms/:id** (faqat admin):
  - Kiruvchi: `Bearer <accessToken>`
  - Chiquvchi: `{ "message": "Xona muvaffaqiyatli o'chirildi" }`

#### 3. **Autentifikatsiya va Avtorizatsiya**

- **Access token**: Har bir so'rovni autentifikatsiya qilish uchun ishlatiladi. JWT formatida bo'ladi.
- **Refresh token**: Access token muddati tugaganda yangilash uchun ishlatiladi.
- **Role-based access**: Foydalanuvchi rollariga asoslangan avtorizatsiya. Masalan, faqat admin foydalanuvchilarga xonalarni qo'shish, o'zgartirish va o'chirishga ruxsat beriladi.

#### 4. **Middlewares**

- **Auth Middleware**:
  - Kiruvchi: HTTP so'rovi (headerda `Bearer <accessToken>`)
  - Chiquvchi: Foydalanuvchi JWT asosida tasdiqlanadi va so'rovga foydalanuvchi ma'lumotlari qo'shiladi.

- **Role Middleware**:
  - Kiruvchi: Auth Middleware orqali tasdiqlangan foydalanuvchi
  - Chiquvchi: Foydalanuvchi roli asosida avtorizatsiya qilingan.

#### 5. **Ish jarayoni**

1. **Foydalanuvchi ro'yxatdan o'tadi** (`/signup`):
   - Ma'lumotlar `POST /signup` endpointiga yuboriladi.
   - Yangi foydalanuvchi ma'lumotlar bazasiga qo'shiladi va qaytariladi.

2. **Foydalanuvchi tizimga kiradi** (`/signin`):
   - Ma'lumotlar `POST /signin` endpointiga yuboriladi.
   - Foydalanuvchi ma'lumotlari tekshiriladi, access va refresh tokenlar qaytariladi.

3. **Access tokenni yangilash** (`/token`):
   - Refresh token orqali yangi access token olinadi.

4. **Xonalar ro'yxatini olish** (`/rooms`):
   - Foydalanuvchi `GET /rooms` endpointiga so'rov yuboradi.
   - Xonalar ro'yxati qaytariladi.

5. **Xonalar haqida batafsil ma'lumot olish** (`/rooms/:id`):
   - Foydalanuvchi `GET /rooms/:id` endpointiga so'rov yuboradi.
   - Xonaning batafsil ma'lumotlari qaytariladi.

6. **Yangi xona qo'shish** (`/rooms`) (faqat admin):
   - Admin foydalanuvchi `POST /rooms` endpointiga ma'lumot yuboradi.
   - Yangi xona ma'lumotlar bazasiga qo'shiladi va qaytariladi.

7. **Xonani yangilash** (`/rooms/:id`) (faqat admin):
   - Admin foydalanuvchi `PUT /rooms/:id` endpointiga ma'lumot yuboradi.
   - Xonaning yangilangan ma'lumotlari qaytariladi.

8. **Xonani o'chirish** (`/rooms/:id`) (faqat admin):
   - Admin foydalanuvchi `DELETE /rooms/:id` endpointiga so'rov yuboradi.
   - Xona ma'lumotlar bazasidan o'chiriladi va muvaffaqiyat xabari qaytariladi.

### Xulosa

Ushbu API xonalar va foydalanuvchilar haqida ma'lumotlarni boshqarishga imkon beradi. Autentifikatsiya va avtorizatsiya JWT orqali amalga oshiriladi. Foydalanuvchilar roli asosida xonalar bilan bog'liq operatsiyalar bajarilishi mumkin.
