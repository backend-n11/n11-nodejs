# HOME-WORK

### Telefon sotish do'koni uchun ma'lumotlar bazasi sxemasi

Do'konning turli xil jarayonlari va amaliyotlarini aks ettirish uchun quyidagi jadvallarni o'z ichiga olgan ma'lumotlar bazasi sxemasini taklif qilaman:

1. **Telefonlar** - Do'kondagi sotiladigan telefonlar haqida ma'lumot saqlaydi.
2. **Mijozlar** - Telefon sotib olgan mijozlar haqida ma'lumot.
3. **Sotuvlar** - Har bir telefon sotuvi bilan bog'liq tafsilotlar.
4. **Xodimlar** - Do'kondagi xodimlar haqida ma'lumot.

#### Jadval strukturalari

**Telefonlar**

- `telefon_id` (INT, primary key)
- `model` (VARCHAR)
- `narxi` (FLOAT)
- `ishlab_chiqaruvchi` (VARCHAR)
- `xotira` (INT) - Telefonning ichki xotirasi (GB)

**Mijozlar**

- `mijoz_id` (INT, primary key)
- `ism` (VARCHAR)
- `familiya` (VARCHAR)
- `telefon` (VARCHAR, UNIQUE not null)

**Sotuvlar**

- `sotuv_id` (INT, primary key)
- `telefon_id` (INT, foreign key)
- `mijoz_id` (INT, foreign key)
- `xodim_id` (INT, foreign key)
- `sotuv_sanasi` (DATETIME)
- `miqdori` (INT)
- `umumiy_narx` (FLOAT)

**Xodimlar**

- `xodim_id` (INT, primary key)
- `ism` (VARCHAR)
- `familiya` (VARCHAR)
- `lavozimi` (VARCHAR)

### Uyga vazifa

1. **Oson vazifa:** Telefonlarni ishlab chiqaruvchilar bo'yicha guruhlab, har bir ishlab chiqaruvchining o'rtacha telefon narxini hisoblang (`GROUP BY`, `AVG`).

2. **O‘rtacha vazifa:** Xaridorlar tomonidan sotib olingan telefonlar sonini hisoblash, bu yerda har bir mijoz va uning sotib olgan telefonlari soni ko'rsatiladi (`GROUP BY`, `COUNT`).

3. **Qiyin vazifa:** Eng ko'p sotuv amalga oshirgan xodim ma'lumotlarini topish. Bu yerda sotuvlar soni bo'yicha xodimlar ro'yxatini tuzing va eng yuqori sotuvchi xodimni ko'rsating (`GROUP BY`, `ORDER BY`, `LIMIT`).

4. **Oson vazifa:** Telefon modellarini narxlar bo'yicha saralab, faqatgina 5-10-o'rinlardagi telefonlarni ko'rsatish (`OFFSET`, `LIMIT`).

5. **O‘rtacha vazifa:** Har bir ishlab chiqaruvchi uchun o'rtacha telefon narxini hisoblang va shuningdek, eng qimmat va eng arzon telefon modellarini toping (`GROUP BY`, `MIN`, `MAX`, `AVG`).

6. **Qiyin vazifa:** Ishlab chiqaruvchilar bo'yicha eng ko'p xotiraga ega telefon modellarini toping (`GROUP BY`, `MAX`).

7. **Murakkab vazifa:** Telefonlarni sotuv guruhlab, sotilgan telefonlarning o'rtacha narxini hisoblash. Shuningdek,eng ko'p sotilgan telefon modellarini ko'rsatish (`GROUP BY`, `ORDER BY`, `JOIN`).

Bu uyga vazifalar orqali talabalar ma'lumotlar bazasi bilan ishlash ko'nikmalarini oshirishlari, turli xil SQL buyruqlarini qo'llash orqali murakkab so'rovlar yaratishni o'rganishlari mumkin. Har bir vazifa o'z darajasiga mos ravishda tayyorlangan bo'lib, talabalarga ma'lumotlarni tahlil qilish va ularni turli usullarda ko'rish imkoniyatini beradi.
