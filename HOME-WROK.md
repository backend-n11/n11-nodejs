---
id: Course.md
date: 15-05-2024
type:
  - lesson
  - kelmaganlar
  - yaxshi qatnashganlar
title: HOME-WROK
---
### Uyga Vazifa: Qarz Daftari CRUD Loyihasi

**Umumiy Talablar:**

1. **Texnologiyalar:**
   - Node.js
   - Express.js
   - PostgreSQL (pg moduli bilan)
   - JavaScript
2. **Loyihani tuzish talablari:**
   - Auth/Register
   - Auth/Login
   - CRUD amallarini bajarish
   - JWT dan foydalanmaslik
   - Har safar amal bajarish uchun email va passwordni qo'shib yuborish

**Loyiha Tuzilishi:**
```
qarz-daftari/
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── User.js
│   └── Debt.js
├── routes/
│   └── auth.js
│   └── debts.js
├── controllers/
│   └── authController.js
│   └── debtController.js
├── db/
│   └── db.js
├── app.js
├── package.json
└── README.md
```

### Tasklar

#### 1. Task: Loyihani boshlang'ich sozlash va fayllarni yaratish
**Vazifa:**
   - `qarz-daftari` nomli papka yarating.
   - Node.js loyihasini boshlang (`npm init -y`).
   - `Express.js`, `pg`, `body-parser`, va `dotenv` modullarini o'rnating.
   - Yuqoridagi tuzilishga muvofiq papkalar va fayllarni yarating (`middlewares`, `models`, `routes`, `controllers`, `db`).

#### 2. Task: Database ulanishini sozlash
**Vazifa:**
   - `db/db.js` faylini yarating.
   - `pg` modulidan foydalanib, PostgreSQL bilan ulanishni sozlang.
   - `.env` faylini yaratib, unda database konfiguratsiya ma'lumotlarini saqlang (masalan, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME).

#### 3. Task: User modelini yaratish
**Vazifa:**
   - `models/User.js` faylini yarating.
   - `User` modeli uchun kerakli maydonlarni aniqlang (`id`, `email`, `password`).
   - `email` maydoni takrorlanmasin va bo'sh bo'lmasin.
   - `password` maydoni bo'sh bo'lmasin va uzunligini 5 tadan ko'p bo'lishini tekshiring.
   - PostgreSQL uchun `users` jadvalini yarating.

#### 4. Task: Debt modelini yaratish
**Vazifa:**
   - `models/Debt.js` faylini yarating.
   - `Debt` modeli uchun kerakli maydonlarni aniqlang (`id`, `user_id`, `amount`, `description`, `created_at`).
   - `amount` maydoni manfiy son bo'lmasin va bo'sh bo'lmasin, `decimal` tipida bo'lsin.
   - `created_at` maydoni TIMESTAMP tipida bo'lsin va yaratilgan vaqti default qiymatga ega bo'lsin.
   - PostgreSQL uchun `debts` jadvalini yarating.

#### 5. Task: Auth/Register marshrutini yaratish
**Vazifa:**
   - `routes/auth.js` faylini yarating.
   - `authController.js` da `register` funksiyasini yozing.
   - `app.js` faylida `auth` marshrutini ulang (`/auth/register`).

#### 6. Task: Auth/Login marshrutini yaratish
**Vazifa:**
   - `authController.js` da `login` funksiyasini yozing.
   - `app.js` faylida `auth` marshrutini ulang (`/auth/login`).

#### 7. Task: Auth middleware yaratish
**Vazifa:**
   - `middlewares/authMiddleware.js` faylini yarating.
   - Bu middleware register marshrutidan tashqari barcha marshrutlar uchun email va passwordni tekshirib tursin.
   - Agar to'g'ri kelmasa, xatolikni qaytaring.
   - Postgresdan bodyda berilgan `email` orqali userni ma'lumotlarini olib kelish kerak va `bcrypt` bilan passwordni solishtirish kerak. Agar to'g'ri kelmasa, qolgan jarayon ishlamasligi kerak va userga xato ma'lumot kiritilganligi haqida xabar berish kerak.

#### 8. Task: CRUD marshrutlarini yaratish
**Vazifa:**
   - `routes/debts.js` faylini yarating.
   - `debtController.js` da `createDebt`, `getDebts`, `updateDebt`, `deleteDebt` funksiyalarini yozing.
   - `app.js` faylida `debts` marshrutini ulang (`/debts`).

#### 9. Task: Auth middlewareni CRUD marshrutlariga qo'shish
**Vazifa:**
   - `routes/debts.js` faylida barcha marshrutlar uchun `authMiddleware` ni qo'shing.
   - Har bir CRUD amalda email va passwordni tekshirib turing.

#### 10. Task: Loyihani sinab ko'rish
**Vazifa:**
   - Postman yoki boshqa API sinov vositasidan foydalanib, barcha routelarni sinab ko'ring.
   - Har bir route uchun mos keladigan kirish ma'lumotlarini yuborib, natijalarni tekshiring.

**Qo'shimcha vazifa:** 
   - `README.md` faylini yozing va unda loyihani qanday ishlatish haqida ma'lumot bering.
   - Loyihani GitHub ga yuklash.

