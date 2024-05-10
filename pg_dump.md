# pg_dump

`pg_dump` yordamida PostgreSQL ma'lumotlar bazasidan ma'lumotlarni eksport qilish uchun foydalaniladigan asosiy buyruqlarni jadval ko'rinishida taqdim etaman:

| Parametr      | Tavsif                                | Miso'l                                                |
|---------------|---------------------------------------|-------------------------------------------------------|
| `-U`          | PostgreSQL foydalanuvchi nomi         | `-U user_name`                                        |
| `-d`          | Eksport qilinadigan ma'lumotlar bazasi nomi | `-d database_name`                                    |
| `-f`          | Ma'lumotlar eksport qilinadigan fayl nomi | `-f output_file.sql`                                  |
| `-t`          | Faqat ma'lum bir jadvalni eksport qilish uchun | `-t table_name`                                       |
| `-h`          | Server manzili (agar lokal emas bo'lsa) | `-h server_address`                                   |

### Miso'lar

1. **To'liq ma'lumotlar bazasini eksport qilish:**
   - Buyruq: `pg_dump -U user_name -d database_name -f output_file.sql`
   - Bu buyruq ma'lumotlar bazasining to'liq nusxasini `output_file.sql` fayliga saqlaydi.

2. **Ma'lum bir jadvalni eksport qilish:**
   - Buyruq: `pg_dump -U user_name -d database_name -t table_name -f output_file.sql`
   - Bu buyruq faqat `table_name` nomli jadvalni va uning ma'lumotlarini `output_file.sql` fayliga saqlaydi.

Har bir buyruqni bajarishda, foydalanuvchi nomi va ma'lumotlar bazasining nomi kabi parametrlarni o'zgartirishingiz kerak bo'ladi. Shuningdek, agar ma'lumotlar bazasi serveri sizning lokal tizimingizda bo'lmasa, `-h` parametri yordamida serverning IP manzilini ko'rsatishingiz mumkin.