import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  const mockTodosService = {
    findAll() {
      return "This action returns all todos"
    },
    create(dto) {
      return {
        ...dto,
        id: Date.now()
      }
    }
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).overrideProvider(TodosService)
      .useValue(mockTodosService)
      .compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return correct message', () => {
    expect(service.findAll()).toBe("This action returns all todos")
  });
  it('should be create new todo', () => {
    const user = {
      title: "js freeze config",
      description: "js docs",
      done: false
    }
    expect(service.create(user)).toEqual({
      id: expect.any(Number),
      ...user
    })
  })
  it('should be create new todo', () => {
    const user = {
      title: "js freeze config",
      description: "js docs",
      done: false
    }

    const testUser = "test"
    jest.spyOn(service, "create").mockImplementation(() => testUser);
    jest.spyOn(service, "create")

    expect(service.create(user)).toBe("test")
  });
});
