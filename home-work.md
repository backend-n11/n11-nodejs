### 1. DrawSQL yordamida Database diagrammasini tuzish

DrawSQL diagrammasini bu yerda matn orqali ko'rsata olmayman, lekin quyidagi ma'lumotlar asosida diagramma tuzishingiz mumkin:

- `users`:
  - `_id`: ObjectId (Primary Key)
  - `username`: String
  - `email`: String
  - `password`: String
  - `role`: String (enum: ['ADMIN', 'USER'])
  - `isVerified`: Boolean
  - `createdAt`: Date
  - `updatedAt`: Date

- `services`:
  - `_id`: ObjectId (Primary Key)
  - `name`: String
  - `description`: String
  - `price`: Number
  - `createdAt`: Date
  - `updatedAt`: Date

- `orders`:
  - `_id`: ObjectId (Primary Key)
  - `userId`: ObjectId (Foreign Key to `users`)
  - `serviceId`: ObjectId (Foreign Key to `services`)
  - `status`: String (enum: ['PENDING', 'COMPLETED', 'CANCELLED'])
  - `createdAt`: Date
  - `updatedAt`: Date

### 2. CRUD yozish

Har bir ma'lumot uchun CRUD (Create, Read, Update, Delete) operatsiyalarini yozish kerak.

#### `users` uchun CRUD:

- Create: Foydalanuvchini ro'yxatdan o'tkazish (signup)
- Read: Foydalanuvchilar ro'yxatini olish, alohida foydalanuvchini olish
- Update: Foydalanuvchi ma'lumotlarini yangilash
- Delete: Foydalanuvchini o'chirish

#### `services` uchun CRUD:

- Create: Xizmat qo'shish
- Read: Xizmatlar ro'yxatini olish, alohida xizmatni olish
- Update: Xizmat ma'lumotlarini yangilash
- Delete: Xizmatni o'chirish

#### `orders` uchun CRUD:
- Create: Buyurtma qo'shish
- Read: Buyurtmalar ro'yxatini olish, alohida buyurtmani olish
- Update: Buyurtma ma'lumotlarini yangilash
- Delete: Buyurtmani o'chirish

### 3. VALIDATION yozish
DTO (Data Transfer Object) va Class-validator yordamida validatsiya yozish kerak.



### 4. AUTH yozish
NestJS-da JWT yordamida autentifikatsiya yozish.

#### Modullar:
- AuthModule
- UsersModule

#### Servislar:
- AuthService
- UsersService

#### Kontrollerlar:
- AuthController
- UsersController

#### Interseptorlar:
- JwtInterceptor

### 5. EMAIL orqali tasdiqlash
Foydalanuvchi ro'yxatdan o'tganda tasdiqlash emaili yuborish uchun `nodemailer` dan foydalanish.


### 6. ACCESS va REFRESH token, COOKIE
JWT yordamida access va refresh tokenlar yaratish.

### 7. GUARD yozish
JWT guard yaratish va himoyalangan marshrutlarga qo'shish.

### 8. Tokenlar
Access va refresh tokenlar yaratish, cookie orqali saqlash.

### 10. Role-Based Access Control (RBAC)
Har bir foydalanuvchi roliga mos ravishda huquqlarni boshqarish.

### 12. Muloqot
Foydalanuvchilar orasida real-time chat imkoniyatini qo'shish.

### 13. Qo'shimcha xavfsizlik choralari
- Two-factor authentication (2FA)
- Password reset funksiyasi

### 14. Statistik ma'lumotlar
Adminlar uchun xizmatlar va buyurtmalar haqida statistik ma'lumotlar ko'rsatish.

#### Statistik ma'lumotlar talablari:
- Jami foydalanuvchilar soni
- Jami xizmatlar soni
- Jami buyurtmalar soni
- Buyurtmalar holati bo'yicha soni

#### API Endpoints:
- `GET /admin/statistics` - Barcha statistik ma'lumotlarni olish



### 15 health check endpoint ochish

### 16 pagination

### 17 filter

### 18 sorting

### 19 query base search

### 20 rate limit


### Natija

Ushbu qadamlar asosida "Tozalash xizmati" backend qismini NestJS va MongoDB yordamida yaratishingiz mumkin. 