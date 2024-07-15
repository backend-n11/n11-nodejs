import { Test, TestingModule } from "@nestjs/testing";
import { ITodo, TodosService } from "./todos.service";

describe("TodosService", () => {
  let service: TodosService;
  let fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("data");
      }, 1000);
    });
  };

  let fetchDataReject = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Fail");
      }, 1000);
    });
  };

  let fetchwithCallback = (cb) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cb);
      }, 1000);
    });
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  // it("should be return all todos", () => {
  //   const allTodos = service.findAll();

  //   expect(allTodos).toBe("This action returns all todos");
  // });

  it("should be get data from fetchdata funtion", () => {
    fetchData().then((data) => {
      expect(data).toBe("data");
    });
  });

  test("the data is peanut butter", async () => {
    const data = await fetchData();
    console.log(data);
    expect(data).toBe("data");
  });

  test("fetchdata test with resolve", async () => {
    await expect(fetchData()).resolves.toBe("data");
  });

  test("should be return throw from fetchdatareject", async () => {
    // fetchDataReject().catch((error) => {
    //   expect(error).toBe("A");
    //   expect(error.message).toBe("Fail");
    // });
    await expect(fetchDataReject()).rejects.toMatch("Fail");
  });

  it("call back async function", (done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe("data");
        done();
      } catch (error) {
        done(error);
      }
    }
    fetchwithCallback(callback(null, "data"));
  });
});

describe("mock ", () => {
  it("mock  function test", () => {
    // jest.spyOn(object, method, accessType)
    const mockCallback = jest.fn((x) => 42 + x);
    console.log(mockCallback);
  });
});

describe("Todo service test", () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  test("should create todo", () => {
    const todo: ITodo = {
      id: 1,
      title: "Test Todo",
      description: "Test Desc",
      done: false,
    };
    service.create(todo);
    expect(service.findAll()).not.toContain({ ...todo, id: 2 });
  });

  test("should update todo", () => {
    const todo: ITodo = {
      id: 1,
      title: "Test Todo",
      description: "Test Desc",
      done: false,
    };
    const newTitle = "Hello nestjs jest";
    service.create(todo);
    service.update(todo.id, { ...todo, title: newTitle });
    expect(service.findAll()).toContainEqual({ ...todo, title: newTitle });
    expect({ name: "azizbek" }).toEqual({ name: "azizbek" });
  });

  test("should delete todo", () => {
    const todos: ITodo[] = [
      {
        id: 1,
        title: "Test Todo",
        description: "Test Desc",
        done: false,
      },
      {
        id: 2,
        title: "Test Todo 2",
        description: "Test Desc 2",
        done: false,
      },
    ];

    todos.forEach((todo) => {
      service.create(todo);
    });

    service.deletebyId(1);
    expect(service.findAll()).not.toContainEqual(todos[0]);
  });

  // it("mock func", () => {
  //   const myMock = jest.fn();
  //   myMock.mockReturnValue("mocked value");

  //   test("mock function test", () => {
  //     expect(myMock()).toBe("mocked value");
  //   });
  // });

  test("spy on method", () => {
    const originalFunc = {
      a: () => "original value",
    };

    const spy = jest.spyOn(originalFunc, "a").mockReturnValue("mocked value");
    expect(originalFunc.a()).toBe("mocked value");
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });
});
