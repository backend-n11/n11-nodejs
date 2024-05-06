# Blog website

> Sizning blog veb-saytingiz uchun uyga vazifa yaratishga yordam beraman. Quyida blog veb-sayti uchun o'quv mashg'ulotini tayyorladim. Ushbu vazifada talabalar sizning tizimingizdagi foydalanuvchilar va blog yozuvlarini boshqarish bilan bog'liq CRUD operatsiyalarini amalga oshirishlari kerak.

### Uyga vazifa

#### 1. Foydalanuvchi ro'yxatdan o'tkazish

- Ro'yxatdan o'tish jarayoni uchun yangi `POST` so'rovini yaratish.
- Ma'lumotlar bazasiga foydalanuvchi ma'lumotlarini saqlash uchun `users.json` faylini ishlatish.
- Foydalanuvchidan quyidagi ma'lumotlarni qabul qilish:
  - `username` (kamida 3 belgidan iborat, noyob)
  - `password` (kamida 5 belgidan iborat)
  - `fullName` (ixtiyoriy, kamida 10 belgidan iborat)
  - `age` (kamida 10 yosh)
  - `email`
  - `gender` (ixtiyoriy, faqat "male" yoki "female")

#### 2. Foydalanuvchi profili bilan ishlash

- Foydalanuvchi profili ma'lumotlarini ko'rish uchun `GET` so'rovini amalga oshirish.
- Profil ma'lumotlarini yangilash uchun `PUT` so'rovini yaratish.
- Profilni o'chirish uchun `DELETE` so'rovini ishlatish.
- Foydalanuvchi ma'lumotlari `username` yoki `email` orqali topiladi.

#### 3. Blog yozuvlari bilan ishlash

- Yangi blog yozuvi yaratish uchun `POST` so'rovini amalga oshirish.
- Mavjud blog yozuvlarini ko'rish uchun `GET` so'rovini ishlatish.
- Blog yozuvini yangilash uchun `PUT` so'rovini yaratish.
- Blog yozuvini o'chirish uchun `DELETE` so'rovini ishlatish.
- Blog yozuvlari ma'lumotlari `id` orqali boshqariladi.

#### 4. Bonus: Izohlar bilan ishlash

- Har bir blog yozuvi uchun izohlar qismi qo'shish.
- Izohlar quyidagi ma'lumotlarni o'z ichiga olishi kerak:
  - `user_id` (izoh qoldirgan foydalanuvchi IDsi)
  - `comment` (izoh matni)

#### 5. Ma'lumotlar bazasi

- `users.json` va `blog.json` fayllari orqali foydalanuvchilar va blog yozuvlarini boshqarish.

### Vazifa talablari

- Har bir so'rov uchun to'liq va aniq API endpoint'larni yaratish.
- Ma'lumotlar bazasi bilan ishlash uchun JSON fayllaridan foydalanish.
- Ma'lumotlarni tekshirish uchun server tomonida validatsiya qilish (masalan, `username` noyobligi, ma'lumotlar to'g'riligi).

Bu uyga vazifa orqali talabalar web ilovalarini ishlab chiqishda asosiy ko'nikmalarni rivojlantirishadi va real hayotdagi veb-ilovalar uchun zarur bo'lgan CRUD operatsiyalarini amalga oshirishga o'rganishadi.

## Users

### Regiter

```md
id: number,
username: string unique min-3,
password: string min-5,
fullName: string min-10 optional,
age:number min min-10,
email:string,
gender:string "male"/"female" optinal,
```

### Login

```md
username | email : string,
password: string,
```

## Blog

```md
id: number,
tittle: string,
slug: string,
content: string,
tags: [string, string],
comments: [
{
user_id, number,
comments:string,
}
]
```

# User

1. REGISTER - POST localhost:3000/register

2. LOGIN - POST localhost:3000/login
3. PROFILE - GET, localhost:3000/profile/username | localhost:3000/profile/email
4. UPDATE PROFILE - PUT, localhost:3000/profile/username | localhost:3000/profile/email

   ```md
   tittle: string,
   slug: string,
   content: string,
   tags: [string, string],
   ```

5. DELETE PROFILE - DELETE, localhost:3000/profile/username | localhost:3000/profile/email

# BLOG

1. CREATE - POST localhost:3000/blog
2. READ - GET localhost:3000/blog
3. UPDATE - PUT localhost:3000/blog/id
4. DELETE - DELETE localhost:3000/blog/id

# Database

1. database/users.json
2. database/blog.json
   p
