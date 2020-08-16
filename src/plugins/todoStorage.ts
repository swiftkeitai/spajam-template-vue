<<<<<<< HEAD
import { TodoItem } from '@/constants/todoItem'

interface Storable {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
};

const STORAGE_KEY = 'vue-ts-todo'

export default class TodoStorage {
  get nextId(): number {
    return this.fetchAll().length + 1
  }

  constructor(
    private storage: Storable = localStorage
  ) {}
=======
import { TodoItem } from '@/constants/todoItem';

interface Storable {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const STORAGE_KEY = 'vue-ts-todo';

export default class TodoStorage {
  get nextId(): number {
    return this.fetchAll().length + 1;
  }

  constructor(private storage: Storable = localStorage) {}
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932

  public fetchAll(): TodoItem[] {
    const todos = JSON.parse(
      this.storage.getItem(STORAGE_KEY) || '[]'
<<<<<<< HEAD
    ) as TodoItem[]
    todos.forEach((todo, index) => todo.id = index)
    return todos
  }

  public save(todos: TodoItem[]) {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
=======
    ) as TodoItem[];
    todos.forEach((todo, index) => (todo.id = index));
    return todos;
  }

  public save(todos: TodoItem[]) {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
