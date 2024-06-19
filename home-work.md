**MigrantWork** loyihasi uchun ma'lumotlar bazasi strukturasini quyidagicha tasvirlab beramiz. Bu loyiha foydalanuvchilar, ish joylari, ish arizalari va kompaniyalar kabi asosiy ma'lumotlarni boshqarishni o'z ichiga oladi.

### Ma'lumotlar Bazasi Strukturası

#### 1. **Foydalanuvchilar (Users)**

- **User** (Foydalanuvchi):
  - `id`: butun son, birlamchi kalit
  - `username`: qator, bo'sh bo'lishi mumkin emas, noyob
  - `password`: qator, bo'sh bo'lishi mumkin emas (hashlangan)
  - `email`: qator, bo'sh bo'lishi mumkin emas, noyob
  - `first_name`: qator, bo'sh bo'lishi mumkin emas
  - `last_name`: qator, bo'sh bo'lishi mumkin emas
  - `role`: qator, bo'sh bo'lishi mumkin emas (masalan, "job_seeker", "employer", "admin")
  - `created_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat
  - `updated_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat

#### 2. **Ish Joylari (Jobs)**

- **Job** (Ish):
  - `id`: butun son, birlamchi kalit
  - `title`: qator, bo'sh bo'lishi mumkin emas
  - `description`: matn, bo'sh bo'lishi mumkin emas
  - `company_id`: butun son, `Company(id)`ga chet el kaliti
  - `location`: qator, bo'sh bo'lishi mumkin emas
  - `salary`: o'nli son, bo'sh bo'lishi mumkin emas
  - `type`: qator, bo'sh bo'lishi mumkin emas (masalan, "full_time", "part_time", "contract")
  - `created_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat
  - `updated_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat

#### 3. **Ish Arizalari (Applications)**

- **Application** (Ariza):
  - `id`: butun son, birlamchi kalit
  - `job_id`: butun son, `Job(id)`ga chet el kaliti
  - `user_id`: butun son, `User(id)`ga chet el kaliti
  - `status`: qator, bo'sh bo'lishi mumkin emas (masalan, "applied", "reviewed", "accepted", "rejected")
  - `applied_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat
  - `updated_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat

#### 4. **Kompaniyalar (Companies)**

- **Company** (Kompaniya):
  - `id`: butun son, birlamchi kalit
  - `name`: qator, bo'sh bo'lishi mumkin emas, noyob
  - `address`: qator, bo'sh bo'lishi mumkin emas
  - `website`: qator, bo'sh bo'lishi mumkin emas
  - `description`: matn
  - `created_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat
  - `updated_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat

#### 5. **Ish Joylari uchun Ma'lumotlar (Job Details)**

- **JobDetail** (Ish Ma'lumotlari):
  - `id`: butun son, birlamchi kalit
  - `job_id`: butun son, `Job(id)`ga chet el kaliti
  - `requirement`: matn, bo'sh bo'lishi mumkin emas
  - `responsibility`: matn, bo'sh bo'lishi mumkin emas
  - `benefit`: matn, bo'sh bo'lishi mumkin emas
  - `created_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat
  - `updated_at`: vaqt tamg'asi, joriy vaqt bo'yicha standart qiymat

### ER Diagramma

1. **Users** (Foydalanuvchilar):
    - **id**
    - **username**
    - **password**
    - **email**
    - **first_name**
    - **last_name**
    - **role**
    - **created_at**
    - **updated_at**

2. **Companies** (Kompaniyalar):
    - **id**
    - **name**
    - **address**
    - **website**
    - **description**
    - **created_at**
    - **updated_at**

3. **Jobs** (Ish Joylari):
    - **id**
    - **title**
    - **description**
    - **company_id**
    - **location**
    - **salary**
    - **type**
    - **created_at**
    - **updated_at**

4. **Applications** (Arizalar):
    - **id**
    - **job_id**
    - **user_id**
    - **status**
    - **applied_at**
    - **updated_at**

5. **JobDetails** (Ish Ma'lumotlari):
    - **id**
    - **job_id**
    - **requirement**
    - **responsibility**
    - **benefit**
    - **created_at**
    - **updated_at**

### ER Diagramma Izohi

- **Foydalanuvchilar (Users)**: Bu jadval foydalanuvchilar haqida ma'lumotni saqlaydi, jumladan ish qidiruvchilar, ish beruvchilar va administratorlar.
- **Kompaniyalar (Companies)**: Bu jadval ish takliflarini joylashtiruvchi kompaniyalar haqida ma'lumotni saqlaydi.
- **Ish Joylari (Jobs)**: Bu jadval kompaniyalar tomonidan e'lon qilingan ish ro'yxatlarini saqlaydi.
- **Ish Arizalari (Applications)**: Bu jadval foydalanuvchilar tomonidan ma'lum ish joylari uchun yuborilgan arizalarni kuzatadi.
- **Ish Joylari uchun Ma'lumotlar (JobDetails)**: Bu jadval har bir ish joyi uchun talablar, majburiyatlar va imtiyozlar haqida batafsil ma'lumotlarni saqlaydi.

Har bir jadval o'zaro chet el kalitlari orqali bog'langan bo'lib, bu referentsial yaxlitlikni saqlash imkonini beradi. Masalan, `JobDetails` va `Applications` jadvallaridagi `job_id` ustuni `Jobs` jadvalidagi `id` ustuniga murojaat qiladi, va `Jobs` jadvalidagi `company_id` ustuni `Companies` jadvalidagi `id` ustuniga murojaat qiladi. Bu o'rnatish "MigrantWork" loyihasida ish joylarini va arizalarni boshqarish uchun normalizatsiyalangan va samarali ma'lumotlar bazasini tashkil etadi.
