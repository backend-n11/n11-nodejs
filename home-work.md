### Homework: TypeScriptda OOP va Interfeyslar

#### Task 1: Shape interfeysini yaratish va undan Circle va Rectangle classlarini yaratish

1. **Shape interfeysini yaratish:**
   - `Shape` nomli interfeys yarating.
   - Ushbu interfeysda `accountArea` metodi bo'lsin.

2. **Circle classini yaratish:**
   - `Shape` interfeysini amalga oshiruvchi (`implements`) `Circle` classini yarating.
   - `Circle` classida radius xususiyati bo'lsin.
   - `accountArea` metodini `Circle` classida amalga oshiring.

3. **Rectangle classini yaratish:**
   - `Shape` interfeysini amalga oshiruvchi (`implements`) `Rectangle` classini yarating.
   - `Rectangle` classida kenglik (`width`) va balandlik (`height`) xususiyatlari bo'lsin.
   - `accountArea` metodini `Rectangle` classida amalga oshiring.

#### Task 2: Vehicle abstract classini yaratish va Car va MotorCycle classlarini yaratish

1. **Vehicle abstract classini yaratish:**
   - `Vehicle` nomli abstract class yarating.
   - Ushbu classda `start` va `stop` abstract metodlari bo'lsin.

2. **Car classini yaratish:**
   - `Vehicle` classidan meros oluvchi (`extends`) `Car` classini yarating.
   - `start` va `stop` metodlarini `Car` classida amalga oshiring.

3. **MotorCycle classini yaratish:**
   - `Vehicle` classidan meros oluvchi (`extends`) `MotorCycle` classini yarating.
   - `start` va `stop` metodlarini `MotorCycle` classida amalga oshiring.

#### Task 3: Users classini yaratish

1. **Users classini yaratish:**
   - `Users` nomli class yarating.
   - Ushbu classda `user_list` nomli xususiy (`private`) massiv bo'lsin.
   - Massiv ustida CRUD amallarini bajaruvchi metodlarni yarating.

2. **CRUD metodlari:**
   - **Create:** Yangi foydalanuvchi qo'shuvchi metod.
   - **Read:** Foydalanuvchilar ro'yxatini qaytaruvchi metod.
   - **Update:** Foydalanuvchi ma'lumotlarini yangilovchi metod.
   - **Delete:** Foydalanuvchini o'chiruvchi metod.

3. **Abstract class va Genericlardan foydalanish:**
   - CRUD amallari uchun abstrakt class yarating va undan meros olish orqali `Users` classini yarating.
   - CRUD metodlarida generiklardan foydalaning.
