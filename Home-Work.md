Albatta, uyga vazifalarni kiritish va ularning natijalarini quyidagi shaklda yozib beraman.

### 1. Array va Tuple turlari

#### 1.1. Ikkita massiv berilgan. Har ikkala massivda ham mavjud bo'lgan elementlarni toping va ularning tartiblangan ro'yxatini qaytaring.

```typescript
// Input
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// Output
console.log(findCommonElements(array1, array2)); // [4, 5]
```

#### 1.2. Foydalanuvchi haqida ma'lumotlarni saqlovchi tuple yaratib, bu ma'lumotlarni qaytaradigan funksiya yozing.

```typescript
// Input
const userInfo = getUserInfo();

// Output
console.log(userInfo); // ["Ali", 30, "Toshkent", true]
```

### 2. Alias va Union turlari

#### 2.1. Ikkita alias yarating: biri string yoki number qiymatlarni, ikkinchisi esa faqat boolean qiymatlarni qabul qilsin. Keyin, bu aliaslarni qabul qiluvchi va ularning qiymatiga qarab turli xabarlarni qaytaruvchi funksiya yozing.

```typescript
// Input
console.log(checkValue("Hello")); // Output: Qiymat string yoki number: Hello
console.log(checkValue(42));      // Output: Qiymat string yoki number: 42
console.log(checkValue(true));    // Output: Qiymat boolean: true
```

### 3. Function va Literal turlari

#### 3.1. Funksiya yarating, bu funksiya berilgan sonlar orasidan eng kattasini topib qaytarsin. Funksiya faqat musbat sonlarni qabul qilsin.

```typescript
// Input
console.log(findMaxPositive(1, -2, 3, 4, -5)); // Output: 4
```

#### 3.2. Foydalanuvchi rolini belgilovchi literal tur yarating. Bu rol `admin`, `editor`, yoki `viewer` qiymatlarini qabul qilishi kerak. Foydalanuvchi roliga qarab, tegishli xabarni qaytaradigan funksiya yozing.

```typescript
// Input
console.log(getRoleMessage('admin'));  // Output: Siz admin roli bilan kirdingiz.
console.log(getRoleMessage('viewer')); // Output: Siz viewer roli bilan kirdingiz.
```

### 4. Object turlari

#### 4.1. TypeScript interfeysidan foydalanib, mashina haqida ma'lumotlarni saqlovchi ob'ekt yarating. Keyin, ushbu interfeysni qabul qiluvchi va mashina ma'lumotlarini qaytaradigan funksiya yozing.

```typescript
// Input
const myCar: Car = { marka: 'Toyota', model: 'Corolla', yil: 2020, aktiv: true };

// Output
console.log(getCarInfo(myCar)); // Output: Toyota Corolla, 2020 yil, Aktiv: true
```

#### 4.2. TypeScript interfeysidan foydalanib, foydalanuvchi profilingini yaratish va yangilash funksiyasini yozing.

```typescript
// Input
user = updateUserProfile(user, { email: 'newemail@example.com' });

// Output
console.log(user); // Output: { ism: 'Ali', email: 'newemail@example.com', telefon: '123456789' }
```



### Uyga vazifa

**Vazifa:** Rang kodlari asosida resistorlarning qarshilik qiymatini aniqlovchi TypeScript dasturini yozing.

**Tushuntirish:** Har bir resistor rangining o'ziga xos qiymati bor. Sizning dasturingiz kiritilgan rang nomlari asosida ikki xonali sonni qaytarishi kerak, hatto kiruvchi ranglar ikki tadan ko'p bo'lsa ham. Birinchi ikki rangning qiymatlari hisobga olinadi.

### Rang kodlari

- **Qora:** 0
- **Jigarrang:** 1
- **Qizil:** 2
- **To'q sariq:** 3
- **Sariq:** 4
- **Yashil:** 5
- **Ko'k:** 6
- **Binafsha:** 7
- **Kulrang:** 8
- **Oq:** 9

### Kirish va Chiqish Misollari

```
<< Input
colors = ["jigarrang", "yashil"]
>> Output
"15"

<< Input
colors = ["jigarrang", "yashil", "binafsha"]
>> Output
"15"

<< Input
colors = ["ko'k", "oq"]
>> Output
"69"
```

### Yechim

1. Rang kodlari uchun xarita (dictionary) yarating.
2. Kiritilgan rang nomlarini ikkita bo'lakka ajrating.
3. Har bir rang uchun uning qiymatini aniqlang va ikki xonali sonni qaytaring.



### Vazifa

**Tushuntirish:** Sizning vazifangiz berilgan so'zlardan ularning qisqartmalarini yaratish. So'zlarni bo'sh joylar va chiziqcha ("-") bilan ajratib olinadi, boshqa barcha punktuatsiya belgilarini olib tashlash kerak.

### Kirish va Chiqish Misollari

```
<< Input
phrase = "As Soon As Possible"
>> Output
"ASAP"

<< Input
phrase = "Liquid-crystal display"
>> Output
"LCD"

<< Input
phrase = "Thank George It's Friday!"
>> Output
"TGIF"
```

### Yechim

1. Kirish iborani qabul qiladigan funksiya yarating.
2. Iboradagi barcha kerakli bo'lmagan punktuatsiya belgilarini olib tashlang.
3. Iboradagi so'zlarni bo'sh joylar va chiziqchalar yordamida ajrating.
4. Har bir so'zning bosh harfini olib, ularni birlashtirib qisqartma yarating.

### Kod namunasi

```typescript
function generateAcronym(phrase: string): string {
    // Barcha punktuatsiya belgilarini olib tashlash, chiziqcha va bo'sh joylar saqlanadi
    const cleanPhrase = phrase.replace(/[^\w\s-]/g, '');
    
    // So'zlarni bo'sh joy va chiziqcha yordamida ajratish
    const words = cleanPhrase.split(/[\s-]+/);
    
    // Har bir so'zning bosh harfini olib, birlashtirish
    const acronym = words.map(word => word[0].toUpperCase()).join('');
    
    return acronym;
}

// Misollarni tekshirish
console.log(generateAcronym("As Soon As Possible"));  // ASAP
console.log(generateAcronym("Liquid-crystal display")); // LCD
console.log(generateAcronym("Thank George It's Friday!")); // TGIF
```

### Vazifa shartlari

1. `generateAcronym` funksiyasini yozing. Bu funksiya `phrase` deb nomlangan string parametrni qabul qiladi.
2. Iboradagi barcha kerakli bo'lmagan punktuatsiya belgilarini olib tashlang. Bo'sh joylar va chiziqchalar so'zlarni ajratish uchun saqlanadi.
3. Iborani bo'sh joylar va chiziqchalar yordamida so'zlarga ajrating.
4. Har bir so'zning bosh harfini olib, ularni katta harflar bilan birlashtirib qisqartma yarating.
5. Funksiya to'g'ri ishlayotganligini tekshirish uchun misollarni `console.log` orqali tekshiring.
