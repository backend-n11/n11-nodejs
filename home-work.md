### REST API Uyga Vazifa

**Maqsad:** Foydalanuvchi ro'yxatdan o'tganda va tizimga kirganda elektron pochtasiga OTP (bir martalik parol) yuborish va uni `/otp/verify` endpointidan tasdiqlash kerak. Tasdiqlashdan so'ng, access token va refresh tokenni yaratish va refresh tokenni ma'lumotlar bazasiga saqlash kerak. Shuningdek, verify qilingandan so'ng OTPni ma'lumotlar bazasidan o'chirib tashlash kerak.

#### **Tug'iladigan vazifalar:**

1. **Foydalanuvchini ro'yxatdan o'tkazish (signup):**
    - Foydalanuvchi email va parol orqali ro'yxatdan o'tadi.
    - Parolni xavfsiz saqlash uchun hashing ishlatiladi.
    - Foydalanuvchining emailiga nodemailer orqali OTP yuboriladi.
    
    **Endpoint:**
    ```
    POST /signup
    {
      "email": "string",
      "password": "string"
    }
    ```

2. **Foydalanuvchini tizimga kirgizish (signin):**
    - Foydalanuvchi email va parol orqali tizimga kiradi.
    - Agar email va parol mos kelsa, foydalanuvchiga OTP yuboriladi.
    
    **Endpoint:**
    ```
    POST /signin
    {
      "email": "string",
      "password": "string"
    }
    ```

3. **OTP ni tasdiqlash (verify):**
    - Foydalanuvchi yuborilgan OTPni tasdiqlaydi.
    - Tasdiqlash muvaffaqiyatli bo'lsa, access token va refresh token yaratiladi.
    - OTP ma'lumotlar bazasidan o'chiriladi.
    - Refresh token ma'lumotlar bazasida saqlanadi.
    
    **Endpoint:**
    ```
    POST /otp/verify
    {
      "email": "string",
      "otp": "string"
    }
    ```

#### **REST API arxitekturasi:**

1. **Client:** Foydalanuvchi interfeysi (veb yoki mobil ilova) API bilan muloqot qiladi.
2. **API Server (Express):** HTTP so'rovlarini qabul qiladi va qayta ishlaydi.
3. **Authentication Middleware:** So'rovlar autentifikatsiya va avtorizatsiya qilinishi uchun Bearer tokenlarini tekshiradi.
4. **Controllers:** So'rovlarni qayta ishlaydi va tegishli javoblarni qaytaradi.
5. **Models (MongoDB):** Ma'lumotlar bazasi bilan o'zaro aloqada bo'lib, ma'lumotlarni saqlaydi va oladi.
6. **Services:** OTP yuborish va token yaratish kabi qo'shimcha funksiyalarni bajaradi.

#### **Diagramma:**

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
 |   (MongoDB)      |         |   (OTP, Token)  |
 +------------------+         +-----------------+
```

#### **Mongoose metodi:**

1. **comparePassword:** Foydalanuvchining parolini tekshirish uchun ishlatiladi.
2. **compareOtp:** Foydalanuvchining OTPsini tekshirish uchun ishlatiladi.

#### **Uyga vazifa:**

1. **Ro'yxatdan o'tish va tizimga kirish uchun API endpointlarini yarating.**
2. **Nodemailer orqali OTP yuborishni amalga oshiring.**
3. **Foydalanuvchining OTPsini `/otp/verify` endpointidan tekshiring.**
4. **Tasdiqlashdan so'ng, access token va refresh token yarating va refresh tokenni ma'lumotlar bazasiga saqlang.**
5. **Tasdiqlangan OTPni ma'lumotlar bazasidan o'chiring.**

#### **Qo'shimcha:**

- Ma'lumotlar bazasida refresh tokenni saqlash va kerak bo'lganda undan foydalanish uchun qo'shimcha endpointlar qo'shing.
- Kodni xavfsiz va optimallashtirilgan holda yozishga harakat qiling.
- Har bir qadamni to'liq sinab ko'ring va muammolarni aniqlang.

Yaxshi o'qiganlaring va vazifalarni bajarganinglar uchun rahmat!
