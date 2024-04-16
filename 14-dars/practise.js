function checkout(items) {
  let total = 0

  for (const item of items) {
    let itemTotal = item.prc * item.qty // Mahsulotning umumiy narxini hisoblaymiz.
    console.log({ total })
    if (item.taxable) {
      console.log(item)
      itemTotal += itemTotal * 0.06 // Agar soliqqa tortiladigan bo'lsa, 6% soliq qo'shamiz.
      console.log(itemTotal, total)

    }
    total += itemTotal // Umumiy summani hisoblash uchun qo'shamiz.
  }

  return total.toFixed(1) // Natijani bir o'nlik son sifatida qaytaramiz.
}

// Misol uchun test qilish
const items = [
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
]

console.log(checkout(items)) // 15.3 chiqishi kerak 