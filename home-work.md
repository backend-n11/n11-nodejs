### Uyga Vazifa: ITINFO Loyihasi uchun CRUD Operatsiyalarini Yozish

### Vazifalar Ro'yxati:

1. **Author va Category jadvallari uchun CRUD operatsiyalarini yozish**
2. **User va Admin kolleksiyalari uchun validatsiya va CRUD operatsiyalarini yozish**

### 1. Author va Category jadvallari uchun CRUD operatsiyalari

#### Author CRUD operatsiyalari:
- Author yaratish
- Author o'qish (barchasi yoki ID bo'yicha)
- Author yangilash
- Author o'chirish

#### Category CRUD operatsiyalari:
- Category yaratish
- Category o'qish (barchasi yoki ID bo'yicha)
- Category yangilash
- Category o'chirish

### 2. User va Admin kolleksiyalari uchun validatsiya va CRUD operatsiyalari

#### User CRUD operatsiyalari:
- User yaratish (SuperAdmin)
- User o'qish (SuperAdmin)
- User yangilash (SuperAdmin)
- User o'chirish (SuperAdmin)

#### Admin CRUD operatsiyalari:
- Admin yaratish (SuperAdmin)
- Admin o'qish (SuperAdmin)
- Admin yangilash (SuperAdmin)
- Admin o'chirish (SuperAdmin)

### API Yo'nalishlari

#### SuperAdmin:

**User CRUD operatsiyalari:**
- Foydalanuvchini yaratish:
  ```bash
  POST localhost:4000/superadmin/user/
  Body:
    {
      "email": "user@example.com",
      "password": "strong_password",
      // Boshqa foydalanuvchi xususiyatlari (ismi, roli, h.k.)
    }
  ```

- Foydalanuvchini o'qish:
  ```bash
  GET localhost:4000/superadmin/user/
  ```

- Foydalanuvchini yangilash:
  ```bash
  PUT localhost:4000/superadmin/user/{user_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, email, parol)
    }
  ```

- Foydalanuvchini o'chirish:
  ```bash
  DELETE localhost:4000/superadmin/user/{user_id}
  ```

**Admin CRUD operatsiyalari:**
- Admin yaratish:
  ```bash
  POST localhost:4000/superadmin/admin/
  Body:
    {
      "email": "admin@example.com",
      "password": "strong_password",
      // Boshqa admin xususiyatlari
    }
  ```

- Adminni o'chirish:
  ```bash
  DELETE localhost:4000/superadmin/admin/{admin_id}
  ```

- Adminni yangilash:
  ```bash
  PUT localhost:4000/superadmin/admin/{admin_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar
    }
  ```

#### Admin:

**Category CRUD operatsiyalari:**
- Kategoriyani yaratish:
  ```bash
  POST localhost:4000/admin/category/
  Body:
    {
      "name": "Category Name",
      // Boshqa kategoriya xususiyatlari (ta'rif, h.k.)
    }
  ```

- Kategoriyani o'qish:
  ```bash
  GET localhost:4000/admin/category/
  ```

- Kategoriyani yangilash:
  ```bash
  PUT localhost:4000/admin/category/{category_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, nomi, ta'rifi)
    }
  ```

- Kategoriyani o'chirish:
  ```bash
  DELETE localhost:4000/admin/category/{category_id}

### Loyihani Qurish Qadamlar:
1. **Loyihani yaratish va kerakli paketlarni o'rnatish:**
   

2. **MongoDB ulanishini sozlash:**
   - `.env` faylini yarating va MongoDB ulanish URI ni saqlang.
   - `mongoose` yordamida MongoDB ma'lumotlar bazasiga ulaning.

3. **Mongoose Modellarini yaratish:**
   - Author, Category, User va Admin kolleksiyalari uchun Mongoose modellarini yarating.

4. **Joi yordamida validatsiya qilish:**
   - Author, Category, User va Admin kolleksiyalari uchun validatsiya sxemalarini yarating.

5. **Express yo'nalishlari va controllerlarni yaratish:**
   - CRUD operatsiyalarini amalga oshiruvchi yo'nalishlar va controllerlar yarating.

6. **Autentifikatsiya va avtorizatsiya tizimini qo'shish:**
   - JWT yordamida autentifikatsiya tizimini amalga oshiring.
   - Foydalanuvchilarni rollarga asoslangan ravishda avtorizatsiya qiling.

7. **Xatoliklarni boshqarish va test qilish:**
   - Xatoliklarni boshqarish mexanizmini amalga oshiring.
   - Postman yoki boshqa API test vositalari yordamida API ni sinab ko'ring.

### Kod Namunalari:

#### MongoDB Ulanishi (`src/config/db.js`):

#### User Modeli (`src/models/userModel.js`):

#### User Validatsiyasi (`src/validations/userValidation.js`):

#### User Controlleri (`src/controllers/userController.js`):


#### User Yo'nalishlari (`src/routes/userRoutes.js`):

### Yakuniy eslatmalar:
- Loyihangizni boshlash uchun ko'rsatilgan qadamlarni bajaring.
- CRUD operatsiyalarini har bir model va controller uchun bajaring.
- API nuqtalarini sinovdan o'tkazish uchun Postman yoki boshqa vositalardan foydalaning.
- Xatoliklarni boshqarish mexanizmini amalga oshiring.

Agar sizda qo'shimcha savollar yoki tushunmovchiliklar bo'lsa, marhamat qilib so'rang!



### 3. Modellarni yaratish

**Author modeli (`src/models/authorModel.js`):**

**Category modeli (`src/models/categoryModel.js`):**

**Admin modeli (`src/models/adminModel.js`):**

### 4. Validatsiya qilish

**Author validatsiyasi (`src/validations/authorValidation.js`):**

**Category validatsiyasi (`src/validations/categoryValidation.js`):**

**Admin validatsiyasi (`src/validations/adminValidation.js`):**

### 5. Controllerlarni yaratish

**Author controlleri (`src/controllers/authorController.js`):**
``````

**Category controlleri (`src/controllers/categoryController.js`):**

**Admin controlleri (`src/controllers/adminController.js`):**


