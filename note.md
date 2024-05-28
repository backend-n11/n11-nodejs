

Header baz64 formatida kodlanadi.
Payload baz64 formatida kodlanadi.
Header va Payload baz64 formatida kodlangan qiymatlari "." (nuqta) bilan birlashtiriladi.
Ushbu birlashtirilgan satr secret key yordamida imzolanadi.


signature jwt ning ma'lumotlar integritetini va autentifikatsiyasini tekshirish uchun ishlatiladi.

JWT (JSON Web Token)
{
  "alg": "HS256",
  "typ": "JWT"
}

Ma'lumotlar Integritetini Tekshirish: Header va Payload ma'lumotlari o'zgartirilmaganligini tekshirish uchun.

Avtorizatsiyani Tasdiqlash: Tokenni yaratuvchi haqiqiy server ekanligini tasdiqlash uchun.


Access va Refresh Tokenlar


Access va Refresh Tokenlar
Autentifikatsiya va avtorifikatsiya tizimlarida Access va Refresh tokenlar keng qo'llaniladi. Ular birgalikda foydalanuvchilarning xavfsiz va qulay kirishini ta'minlaydi


Access Token
Access Token — bu qisqa muddatga amal qiluvchi token bo'lib, foydalanuvchiga ma'lum resurslarga kirish huquqini beradi


Xususiyatlari:

Odatda JWT formatida bo'ladi.
Qisqa muddatga (masalan, 15 daqiqa) amal qiladi.
Foydalanuvchining resurslarga kirish huquqini tasdiqlaydi.


Foydalanish:

Har bir so'rovda (request) Authorization header orqali yuboriladi.
Masalan, Authorization: Bearer <access_token>.


Refresh Token
Refresh Token — bu uzunroq muddatga amal qiluvchi token bo'lib, access tokenning muddati tugaganda yangi access token olish uchun ishlatiladi

Xususiyatlari:

Uzunroq muddatga (masalan, 7 kun yoki 30 kun) amal qiladi.
Faqatgina yangi access token yaratish uchun ishlatiladi.
Odatda server tomonida saqlanadi va yuborilmaydi, bu uni nisbatan xavfsiz qiladi.


Foydalanish:

Access token muddati tugaganda yangi access token olish uchun yuboriladi.
Foydalanuvchining doimiy kirish holatini ta'minlash uchun ishlatiladi


5-dars. Middleware tushunchasi. GUARD (POLICE) orqali cheklov o'rnatish.


Middleware Concept. Implementing Restrictions using GUARD (POLICE)

Middleware tushunchasi


Middleware — bu web server (masalan, Express.js) so'rov va javob o'rtasida bajariladigan funksiyalar. Ular so'rovni qayta ishlash jarayonida turli vazifalarni bajarish uchun ishlatiladi, masalan autentifikatsiya, log yozish, xatolarni boshqarish va boshqalar.



