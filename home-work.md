# Loyihaning Texnik Tavsifi (PRD)

### Loyihaning Maqsadi

Ushbu loyiha NestJS yordamida REST API serverini yaratish va boshqarishdan iborat. Loyihada foydalanuvchi autentifikatsiyasi, fayllar boshqaruvi, kurslar boshqaruvi va foydalanuvchi kurslari boshqaruvi funksiyalari amalga oshiriladi.

### Texnologiyalar

- NodeJS (v20)
- NestJS
- PostgreSQL
- TypeORM

### Asosiy Talablar

1. **NestJS** yordamida REST API serverini yaratish.
2. **Bearer token** bilan autentifikatsiya.
4. **PostgreSQL** ma'lumotlar bazasini ulash va undan foydalanish.
5. **Tokenning** amal qilish muddati - 10 daqiqa.

### API Endpointlar

### AUTENTIFIKATSIYA

- **/signup [POST]** - Yangi foydalanuvchini ro'yxatdan o'tkazish (login, parol).
- **/signin [POST]** - Foydalanuvchini tizimga kiritish (accessToken qaytaradi).
- **/getMe [GET]** - Foydalanuvchi ma'lumotlarini qaytarish (Bearer token orqali).
- **/logout [GET]** - Foydalanuvchini tizimdan chiqarish, tokenni bekor qilish.

### FAYLLAR

- **/file/upload [POST]** - Foydalanuvchi uchun fayl yuklash (auth token kerak).
- **/file/list [GET]** - Barcha fayllar ro'yxatini olish, paginatsiya qo'llaniladi (auth token kerak).
- **/file/:id [DELETE]** - Faylni o'chirish (auth token kerak).
- **/file/:id [GET]** - Fayl ma'lumotlarini olish (auth token kerak).
- **/file/download/:id [GET]** - Faylni yuklab olish (auth token kerak).
- **/file/:id [PUT]** - Fayl ma'lumotlarini yangilash (auth token kerak).

### KURS FAYLLARI

- **/set-course-file [POST]** - Kurs uchun fayl tayinlash (auth token kerak).
- **/file/:course [GET]** - Kurs faylini olish (auth token kerak).
- **/file/:id/course/:courseId [DELETE]** - Kurs faylini o'chirish (auth token kerak).

### KURSLAR

- **/course [POST]** - Foydalanuvchi uchun yangi kurs qo'shish (auth token kerak).
- **/course/all [GET]** - Barcha kurslarni olish, paginatsiya qo'llaniladi (auth token kerak).
- **/course/:id [PUT]** - Kurs ma'lumotlarini yangilash (auth token kerak).
- **/course/:id [GET]** - Kurs ma'lumotlarini olish (auth token kerak).
- **/course/:id [DELETE]** - Kursni o'chirish (auth token kerak).

### FOYDALANUVCHI KURSLARI

- **/set-user-course [POST]** - Foydalanuvchi uchun kurs tayinlash (auth token kerak).
- **/course/:userId [GET]** - Foydalanuvchining kurslarini olish (auth token kerak).
- **/course/:id/user/:userId [DELETE]** - Foydalanuvchi kursini o'chirish (auth token kerak).

### Ma'lumotlar Bazasining Strukturası

1. **Foydalanuvchilar** (Users) - login, parol va boshqa foydalanuvchi ma'lumotlari.
2. **Fayllar** (Files) - fayl ma'lumotlari, egasi (foydalanuvchi) bilan bog'liq.
3. **Kurslar** (Courses) - kurs ma'lumotlari va bog'liq foydalanuvchilar.
4. **Kurs Fayllari** (Course Files) - kursga bog'liq fayllar.
5. **Foydalanuvchi Kurslari** (User Courses) - foydalanuvchilarga bog'liq kurslar.

### Xavfsizlik va Kirish Huquqlari

- Barcha autentifikatsiya va ma'lumot olish funktsiyalari **Bearer token** orqali amalga oshiriladi.
- Tokenning amal qilish muddati 10 daqiqa bo'lib, foydalanuvchi seanslari boshqariladi va tekshiriladi.
- Har bir endpoint uchun kerakli kirish huquqlari ko'rsatiladi (faqat ro'yxatdan o'tgan va tizimga kirgan foydalanuvchilar uchun).

### Qo'shimcha Talablar

- Paginatsiya barcha ro'yxatlarni olish funktsiyalarida qo'llanilishi kerak.
- Fayllarni yuklash va yuklab olishda xavfsizlik choralari ko'rilishi kerak.
- Kurs va foydalanuvchi kurslarini boshqarish uchun mos endpointlar yaratish.

Ushbu PRD NestJS loyihasini yaratish va boshqarish uchun asosiy talablarni qamrab oladi. Har bir endpoint va funksiyaning aniq tavsifi loyihaning muvaffaqiyatli amalga oshirilishini ta'minlaydi.