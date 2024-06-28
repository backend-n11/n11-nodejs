import createHttpError from "http-errors";

interface IUser {
  name: string;
  age: number;
  isMerried: boolean;
  skills: Array<string>;
}

const user: IUser = {
  name: "Ali",
  age: 12,
  isMerried: false,
  skills: ["a", "b"],
};

type c = {
  name: string;
  age: number;
  isMerried: boolean;
  skills?: Array<string>;
};

type User = keyof c;

type L = Record<User, "string">;

type CreateUser = {
  name: string;
  mail: string;
  age: number;
  isMerried: boolean;
  skills: Array<string>;
  password: string;
};

const createUser: CreateUser = {
  name: "Ali",
  age: 12,
  isMerried: false,
  skills: ["a", "b"],
  mail: "test@test.com",
  password: "12345",
};

type UpdateUser = Partial<CreateUser>;

const updateUser: UpdateUser = {
  name: "Ali",
  mail: "test@test.com",
};

type RequiredUser = Partial<Omit<Required<UpdateUser>, "mail">>;

type UserWithOutName = Omit<RequiredUser, "name">;

type ReadOnlyUser = Readonly<CreateUser>;

const readOnlyUser: ReadOnlyUser = {
  name: "Ali",
  age: 12,
  isMerried: false,
  skills: ["a", "b"],
  password: "12345",
  mail: "test@test.com",
};

type PickUser = Pick<CreateUser, "mail" | "password">;

function createUser2() {
  return {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
}

type User2 = ReturnType<typeof createUser2>;

const user2: User2 = createUser2();
console.log(user); // { id: 1, name: 'Alice', email: 'alice@example.com' }
