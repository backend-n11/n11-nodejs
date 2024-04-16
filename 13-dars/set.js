// new Set();
// set.add(value);
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

let set = new Set();

set.add("1");
set.add("2");
set.add("3");
set.add(true);

set.forEach((el) => {
  console.log(el);
});

console.log(set);
