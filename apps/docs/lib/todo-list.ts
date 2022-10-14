export type Todos = { title: string; checked: boolean }[];

export function getAll() {
  const todosStorage = localStorage.getItem('todos');

  if (!todosStorage) {
    return undefined;
  }

  return JSON.parse(todosStorage) as Todos;
}

export function update(todos: Todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
