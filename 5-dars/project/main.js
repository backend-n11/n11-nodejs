/*let o = { x: 1, y: 2, z:3, f:4, a:6}
console.log(Object.entries(o))
for(const [name, value] of Object.entries(o)) {
	console.log(name, value); 
}


console.log("##########################################################")

for (const key  in o) {
console.log(key, o[key])
}

*/

/*

const obj = {
	name:"john",	
	o: {
		name:"Percey"
	}
}



console.log(obj?.name
	,
	obj?.o?.name)
*/

/*let a; // Oops, we forgot to initialize this variable!
let index = 0;
// try {
// 	a[index++]; // Throws TypeError
// } catch(e) {
// 	index // => 1: increment occurs before TypeError is thrown
// }
a?.[index++] // => undefined: because a is undefined
index // => 1: not incremented because ?.[] short- circuits
// a[index++]*/

/*const log = (promt)=> {
	console.log(promt)
}

function square(x, log) { // The second argument is an optional function
log?.(x); // Call the function if there is one
return x * x; // Return the square of the argument
}


square("a",2)*/
/*
const geval = eval;
let x = "global",
  y = "global";
function f() {
  let x = "local";
  eval("x += 'changed';");
  return x;
}
function g() {
  let y = "local";
  geval("y += 'changed';");
  return y;
}
console.log(f(), x);
console.log(g(), y);

let x=1

eval("function f() { return x+10; }");

console.log(f())
*/
//
// let options = {
//   timeout: null,
//   title: "",
//   verbose: false,
//   n: null,
// };
// console.log({
//   1: options.timeout ?? 1000,
//   2: options.title ?? "Untitled",
//   3: options.verbose ?? true,
//   4: options.quiet ?? false,
//   5: options.n ?? 10,
// });

let counter = 0;
const increment = () => void counter++;

console.log(increment());
console.log(counter);
