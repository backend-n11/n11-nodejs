#### Mavzu: **Online Learning Platform**

Siz `Sequelize` ORM-dan foydalanib, onlayn o‘quv platformasi uchun ma'lumotlar bazasini yaratishingiz kerak. Quyidagi vazifalarni bajaring:

### Ma'lumotlar Bazasining Strukturasini Aniqlash

**Jadvallar va Aloqalar:**

1. **Users** (Foydalanuvchilar)
   - `id` (Primary Key, Integer, Auto Increment)
   - `name` (String, Not Null)
   - `email` (String, Unique, Not Null)
   - `password` (String, Not Null)
   - `role` (Enum: `student`, `instructor`, `admin`, Not Null)
   - `createdAt` (Timestamp)
   - `updatedAt` (Timestamp)

2. **Courses** (Kurslar)
   - `id` (Primary Key, Integer, Auto Increment)
   - `title` (String, Not Null)
   - `description` (Text, Not Null)
   - `price` (Decimal, Not Null)
   - `createdAt` (Timestamp)
   - `updatedAt` (Timestamp)

3. **Modules** (Modullar)
   - `id` (Primary Key, Integer, Auto Increment)
   - `title` (String, Not Null)
   - `description` (Text, Not Null)
   - `courseId` (Foreign Key, Integer, References `Courses.id`)
   - `createdAt` (Timestamp)
   - `updatedAt` (Timestamp)

4. **Lessons** (Darslar)
   - `id` (Primary Key, Integer, Auto Increment)
   - `title` (String, Not Null)
   - `content` (Text, Not Null)
   - `moduleId` (Foreign Key, Integer, References `Modules.id`)
   - `createdAt` (Timestamp)
   - `updatedAt` (Timestamp)

5. **Enrollments** (Kursga yozilishlar)
   - `id` (Primary Key, Integer, Auto Increment)
   - `userId` (Foreign Key, Integer, References `Users.id`)
   - `courseId` (Foreign Key, Integer, References `Courses.id`)
   - `createdAt` (Timestamp)
   - `updatedAt` (Timestamp)

6. **Assignments** (Topshiriqlar)
   - `id` (Primary Key, Integer, Auto Increment)
   - `title` (String, Not Null)
   - `description` (Text, Not Null)
   - `lessonId` (Foreign Key, Integer, References `Lessons.id`)
   - `createdAt` (Timestamp)
   - `updatedAt` (Timestamp)

7. **Submissions** (Topshiriq topshirish)
   - `id` (Primary Key, Integer, Auto Increment)
   - `assignmentId` (Foreign Key, Integer, References `Assignments.id`)
   - `userId` (Foreign Key, Integer, References `Users.id`)
   - `content` (Text, Not Null)
   - `grade` (Decimal, Nullable)
   - `createdAt` (Timestamp)
   - `updatedAt` (Timestamp)

