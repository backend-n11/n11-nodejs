interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface ICartItem<Type> {
  product: Type;
  quantity?: number;
}

const obj2: Required<ICartItem<IProduct>> = {
  product: {
    id: 1,
    name: "sasa",
    price: 1234,
  },
  quantity: 2,
};

function addToCart<Type>(cartItem: ICartItem<Type>) {
  console.log(
    `Added ${cartItem.quantity} of ${cartItem.product} to the cart.`,
  );
}

const product: IProduct = { id: 1, name: "Laptop", price: 1500 };
const product2: IProduct = { id: 2, name: "Phone", price: 500 };

const cartItem: ICartItem<IProduct> = {
  product,
  quantity: 2,
};

const cartItem2: ICartItem<IProduct> = {
  product: product2,
  quantity: 2,
};

addToCart<IProduct>(cartItem); // Added 2 of Laptop to the cart.
