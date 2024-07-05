const forFunc = (): never => {
  while (true) {}
};

console.log(forFunc());

const throwFunc = () => {
  throw "a";
};
