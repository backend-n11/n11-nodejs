Albatta, unit testlar uchun 20 yaqin masala yaratib beraman. Bu masalalar turli funksiyalar va metodlar uchun yozilgan bo'lib, sizga amaliyot uchun yaxshi manba bo'ladi. Har bir masala uchun test yozish talab qilinadi.

### 1. Sum Function
**Funksiya:** Ikki sonni qo'shish.
**Misol:** `sum(2, 3) -> 5`
```javascript
function sum(a, b) {
  return a + b;
}
```

### 2. Subtract Function
**Funksiya:** Ikki sonni ayirish.
**Misol:** `subtract(5, 3) -> 2`
```javascript
function subtract(a, b) {
  return a - b;
}
```

### 3. Multiply Function
**Funksiya:** Ikki sonni ko'paytirish.
**Misol:** `multiply(2, 3) -> 6`
```javascript
function multiply(a, b) {
  return a * b;
}
```

### 4. Divide Function
**Funksiya:** Ikki sonni bo'lish.
**Misol:** `divide(6, 3) -> 2`
```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
```

### 5. Palindrome Check
**Funksiya:** So'z palindrome ekanligini tekshirish.
**Misol:** `isPalindrome('racecar') -> true`
```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
```

### 6. Reverse String
**Funksiya:** So'zni teskari o'girish.
**Misol:** `reverseString('hello') -> 'olleh'`
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### 7. Factorial
**Funksiya:** Berilgan sonning faktorialini hisoblash.
**Misol:** `factorial(5) -> 120`
```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

### 8. Fibonacci
**Funksiya:** Fibonacci ketma-ketligi bo'yicha n-sonni qaytarish.
**Misol:** `fibonacci(5) -> 5`
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 9. Find Maximum
**Funksiya:** Massivdagi eng katta elementni topish.
**Misol:** `findMax([1, 2, 3, 4, 5]) -> 5`
```javascript
function findMax(arr) {
  return Math.max(...arr);
}
```

### 10. Find Minimum
**Funksiya:** Massivdagi eng kichik elementni topish.
**Misol:** `findMin([1, 2, 3, 4, 5]) -> 1`
```javascript
function findMin(arr) {
  return Math.min(...arr);
}
```

### 11. Sum Array
**Funksiya:** Massivdagi barcha elementlarni qo'shish.
**Misol:** `sumArray([1, 2, 3, 4, 5]) -> 15`
```javascript
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
```

### 12. Average Array
**Funksiya:** Massivdagi barcha elementlarning o'rtacha qiymatini topish.
**Misol:** `averageArray([1, 2, 3, 4, 5]) -> 3`
```javascript
function averageArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
```

### 13. Remove Duplicates
**Funksiya:** Massivdagi takroriy elementlarni olib tashlash.
**Misol:** `removeDuplicates([1, 2, 2, 3, 4, 4, 5]) -> [1, 2, 3, 4, 5]`
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

### 14. Capitalize String
**Funksiya:** Har bir so'zning bosh harfini katta qilish.
**Misol:** `capitalize('hello world') -> 'Hello World'`
```javascript
function capitalize(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
```

### 15. Count Vowels
**Funksiya:** Berilgan matndagi unli harflarni sanash.
**Misol:** `countVowels('hello') -> 2`
```javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}
```

### 16. Anagram Check
**Funksiya:** Ikki so'zning anagram ekanligini tekshirish.
**Misol:** `isAnagram('listen', 'silent') -> true`
```javascript
function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
```

### 17. Flatten Array
**Funksiya:** Ichma-ich massivlarni bitta tekis massivga aylantirish.
**Misol:** `flattenArray([1, [2, [3, 4], 5]]) -> [1, 2, 3, 4, 5]`
```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}
```

### 18. Chunk Array
**Funksiya:** Massivni kichik qismlarga bo'lish.
**Misol:** `chunkArray([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]`
```javascript
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```

### 19. Remove Null and Undefined
**Funksiya:** Massivdan null va undefined qiymatlarni olib tashlash.
**Misol:** `removeNullAndUndefined([1, null, 2, undefined, 3]) -> [1, 2, 3]`
```javascript
function removeNullAndUndefined(arr) {
  return arr.filter(val => val !== null && val !== undefined);
}
```

### 20. Array Intersection
**Funksiya:** Ikki massivdagi umumiy elementlarni topish.
**Misol:** `arrayIntersection([1, 2, 3], [2, 3, 4]) -> [2, 3]`
```javascript
function arrayIntersection(arr1, arr2) {
  return arr1.filter(val => arr2.includes(val));
}
```

Yuqoridagi misollar uchun siz Jest yordamida unit testlarni yozishingiz mumkin. Har bir funksiya uchun test faylini yarating va funksiyaning kutilgan natijalarini tekshiring. Misol uchun, `sum` funksiyasining testini quyidagicha yozishingiz mumkin:

### Test Misoli
```javascript
// src/sum.test.js
import { sum } from './sum';

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
```

Barcha masalalar uchun testlarni yozish va ishlatish orqali unit testlar amaliyotini o'rganishingiz mumkin. Agar qo'shimcha savollar bo'lsa yoki biror narsa tushunarsiz bo'lsa, bemalol so'rang!
