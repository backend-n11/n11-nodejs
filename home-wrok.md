
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

# Bonus 
Albatta, murakkabroq funksiyalar uchun test masalalarini yaratib beraman. Bu masalalar turli algoritmlar va ma'lumotlarni qayta ishlash usullarini o'z ichiga oladi.

### 1. Matrix Addition
**Funksiya:** Ikki matritsani qo'shish.
**Misol:** `addMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]) -> [[6, 8], [10, 12]]`
```javascript
function addMatrices(matrix1, matrix2) {
  return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}
```

### 2. Matrix Multiplication
**Funksiya:** Ikki matritsani ko'paytirish.
**Misol:** `multiplyMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]) -> [[19, 22], [43, 50]]`
```javascript
function multiplyMatrices(matrix1, matrix2) {
  const result = Array(matrix1.length).fill(0).map(() => Array(matrix2[0].length).fill(0));
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix2[0].length; j++) {
      for (let k = 0; k < matrix1[0].length; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }
  return result;
}
```

### 3. Merge Sort
**Funksiya:** Massivni birlashma tartiblash usuli bilan tartiblash.
**Misol:** `mergeSort([5, 3, 8, 4, 2]) -> [2, 3, 4, 5, 8]`
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}
```

### 4. Quick Sort
**Funksiya:** Massivni tezkor tartiblash usuli bilan tartiblash.
**Misol:** `quickSort([5, 3, 8, 4, 2]) -> [2, 3, 4, 5, 8]`
```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  return quickSort(left).concat(pivot, quickSort(right));
}
```

### 5. Binary Search
**Funksiya:** Massivda binary search usuli bilan element qidirish.
**Misol:** `binarySearch([1, 2, 3, 4, 5], 3) -> 2`
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

### 6. Dijkstra's Algorithm
**Funksiya:** Berilgan grafikdagi eng qisqa yo'lni topish.
**Misol:** `dijkstra(graph, start, end)`
```javascript
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const unvisited = new Set(Object.keys(graph));
  for (const node of unvisited) distances[node] = Infinity;
  distances[start] = 0;
  
  while (unvisited.size > 0) {
    const current = Array.from(unvisited).reduce((min, node) => distances[node] < distances[min] ? node : min, Array.from(unvisited)[0]);
    unvisited.delete(current);
    for (const neighbor in graph[current]) {
      if (visited.has(neighbor)) continue;
      const newDistance = distances[current] + graph[current][neighbor];
      if (newDistance < distances[neighbor]) distances[neighbor] = newDistance;
    }
    visited.add(current);
  }
  return distances;
}
```

### 7. Linked List Implementation
**Funksiya:** Linked listni yaratish va unga element qo'shish.
**Misol:** `linkedList.add(3)`
```javascript
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  add(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}
```

### 8. Tree Traversal
**Funksiya:** Binary tree uchun pre-order, in-order va post-order traversal.
**Misol:** `treeTraversal(tree)`
```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function preOrder(node) {
  if (!node) return [];
  return [node.value, ...preOrder(node.left), ...preOrder(node.right)];
}

function inOrder(node) {
  if (!node) return [];
  return [...inOrder(node.left), node.value, ...inOrder(node.right)];
}

function postOrder(node) {
  if (!node) return [];
  return [...postOrder(node.left), ...postOrder(node.right), node.value];
}
```

### 9. LRU Cache Implementation
**Funksiya:** Least Recently Used (LRU) cache.
**Misol:** `lruCache.get(key)`, `lruCache.put(key, value)`
```javascript
class LRUCache {
  constructor(limit) {
    this.cache = new Map();
    this.limit = limit;
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}
```

### 10. JSON Deep Copy
**Funksiya:** Ob'ektning chuqur nusxasini yaratish.
**Misol:** `deepCopy({ a: 1, b: { c: 2 } }) -> { a: 1, b: { c: 2 } }`
```javascript
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

### 11. Validate Email
**Funksiya:** Email manzilni validatsiya qilish.
**Misol:** `validateEmail('test@example.com') -> true`
```javascript
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
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

